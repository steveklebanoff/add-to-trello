import storage from 'local-storage'
import _ from 'lodash'
import Api from './api'

const STORAGE_KEY = 'trello_data'

export default {

  getBoardsDropdown(callback) {
    if (storage.get(STORAGE_KEY)) {
      return callback(storage.get(STORAGE_KEY))
    }

    Api.getOrganizations()
    // transform organizations
    .then((orgs) => {
      var dropdown = {
        me: { name: 'Boards', boards: [] }
      }

      _.transform(orgs, (result, org) => {
        result[org.id] = { name: org.displayName, boards: [] }
      }, dropdown)

      return dropdown
    })
    // transform boards
    .then((dropdown) => {
      Api.getBoards()
      .then((boards) => {
        _.transform(boards, (result, board) => {
          dropdown[board.idOrganization || 'me'].boards.push({
            id: board.id,
            label: board.name,
            lists: board.lists
          })
        })

        storage.set(STORAGE_KEY, dropdown)
        return callback(dropdown)
      })
    })
  },

  getListDropdown(boardId, callback) {
    var boardsDropdown = storage.get(STORAGE_KEY)

    _.each(boardsDropdown, (org) => {
      let board = _.find(org.boards, (board) => board.id === boardId)
      if (! board) { return }

      let listDropdown = _.filter(board.lists, (list) => {
        return list.closed === false
      })

      callback(listDropdown)
    })
  },

  logout() {
    Api.deauthorize()
    storage.clear()
  }
}
