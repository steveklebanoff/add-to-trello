const APP_KEY = '68fc29641c38d36e500e264a5c7e9ec0'

Trello.setKey(APP_KEY);
Trello.setToken(localStorage.getItem('trello_token'));

export default {
  authorize() {
    return new Promise((resolve, reject) => {
      let opts = {
        name: 'Add to Trello',
        expiration: 'never',
        scope: { read: true, write: true, account: false },
        success: resolve,
        error: reject
      }
      Trello.authorize(opts)
    })
  },

  authorized() {
    return Trello.authorized()
  },

  redirectToLogin() {
    return chrome.tabs.create({url: chrome.extension.getURL('settings.html')}); 
  },

  getOrganizations() {
    return new Promise((resolve, reject) => {
      Trello.rest('GET', 'members/me/organizations', (orgs) => {
        resolve(orgs)
      }, reject);
    })
  },

  getBoards() {
    return new Promise((resolve, reject) => {
      let options = { filter: 'open', lists: 'open' }
      Trello.rest('GET', 'members/me/boards', options, (boards) => {
        resolve(boards);
      }, reject);
    })
  },

  createCard(data) {
    return new Promise((resolve, reject) => {
      Trello.rest('POST', 'cards', {
        name: data['title'],
        desc: data['description'],
        date: null,
        idList: data['list_id'],
        urlSource: null
      }, resolve, reject);
    })
  }
}