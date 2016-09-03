
function showAlert(alertType, alertText) {
  $('.add-card-form').hide();
  $('.form-alerts .alert').hide();
  return $(`.form-alerts .alert-${alertType}`).html(alertText).show();
}

function showSuccess(cardData) {
  var cardLink = $('<a />');
  cardLink.attr('href', cardData.shortUrl);
  cardLink.text('View card');

  var $alertEl = showAlert('success', 'Card saved! ').append(cardLink);
  bindLinks($alertEl);

  window.setTimeout(window.close, 2500);
}

$(function() {

// ---------- Initialization ---------- //

    // if not logged in, redirect to settings page
    if (!api.isAuthorized()) return showSettings();

    // initially load the boards from memory
    loadBoardsAndLists();

    // add default form values based on settings
    initForms();

    // hit API to get boards and insert into the add form
    api.getOrgsAndBoards(loadBoardsAndLists);


// ---------- Events ---------- //

    // open up Trello.com
    $('.js-trello-link').click(openTrello);

    // open settings page
    $('.js-open-settings').click(showSettings);

    // Deauthorize Trello
    $('.js-logout').click(api.deauthorize);

    // Change list dropdown when the user changes the board
    $('.js-boards').change(changeList);

    // Add the new card
    $('.add-card-form').submit(function(e) {
        e.preventDefault();

        var settings = storage.getSettings();
        var form     = $(".add-card-form");
        var data     = serialize(form);

        if (settings.boardList != 'choose') {
            // set the default dropdowns to what was selected
            storage.setDefaults(data['board'], data['list']);
        }

        showAlert('info', 'Saving card&hellip;');
        api.submitCard(data, (cardData) => {
          executeScript("var imgEl = document.querySelector('.gallery img'); imgEl && imgEl.getAttribute('src');", (imgResults) => {
            var imgUrl = imgResults && imgResults[0];
            if (imgUrl) {
              showAlert('info', 'Saving image&hellip;');
              // has image, add attachment
              api.addAttachment(cardData.id, imgUrl, () => {
                showSuccess(cardData);
              });
            } else {
              showSuccess(cardData);
            }
          })
        });
    });
});

/**
 * getCurrentTab
 * retrieves the current tab information from chrome
 *
 */
function getCurrentTab(callback) {
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function(tabs) {
        // send the first tab through the callback
        callback(tabs[0]);
    });
}

function executeScript(code, callback) {
  getCurrentTab(function(tab) {
      window.chrome.tabs.executeScript(
        tab.id, { code: code }, (res) => {
          callback(res, tab);
        }
      );
  })
}

/**
 * initialize selected form inputs based on settings
 */
function initForms() {
    var settings    = storage.getSettings();
    var title       = $('.js-card-title');
    var description = $('.js-card-description');
    var board       = $('.js-lists option[value="'+ settings.list +'"]');
    var list        = $('.js-boards option[value="'+ settings.board +'"]');

    if (settings.boardList == 'choose') {
        board.prop('selected', true);
        list.prop('selected', true);
    }

    executeScript(
      '[].slice.call(document.querySelectorAll("span#titletextonly, span.price")).map((x) => { return x.textContent; }).join(" - ")',
      (titleAndCostVars, tab) => {
        var titleAndCost = titleAndCostVars && titleAndCostVars[0];
        if (titleAndCost !== '') {
          title.val(titleAndCost);
        } else {
          title.val(tab.title);
        }
        description.text(tab.url);
      }
    )

}
