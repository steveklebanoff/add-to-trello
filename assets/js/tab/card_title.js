var isCl = document.domain == 'craigslist.org';
var clTitle = document.querySelector('.postingtitle span#titletextonly') && document.querySelector('.postingtitle span#titletextonly').textContent;
var clPrice = document.querySelector('.postingtitle span.price') && document.querySelector('.postingtitle span.price').textContent;
(isCl && clTitle && clPrice) ? `${clPrice} - ${clTitle}` : ''
