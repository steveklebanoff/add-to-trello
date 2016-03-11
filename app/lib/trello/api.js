import _ from 'lodash'

const APP_KEY = '68fc29641c38d36e500e264a5c7e9ec0'
const TRELLO_TOKEN = localStorage.getItem('trello_token')

Trello.setKey(APP_KEY);
Trello.setToken(TRELLO_TOKEN);

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

  deauthorize() {
    return Trello.deauthorize()
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
      data = _.assign({ idList: null }, data)
      Trello.rest('POST', 'cards', data, resolve, reject);
    })
  }
}
