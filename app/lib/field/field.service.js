import storage from 'local-storage'
import _ from 'lodash'
import Field from './field.model'
import defaultFields from './default-fields.json'

/**
 * Field Service
 */
export default {

  get() {
    if (this.hasCached()) return this.fromCache()
    return this.setDefault()
  },

  hasCached() {
    return !! storage.get('fields')
  },

  fromCache() {
    let cached = storage.get('fields')
    if (!cached) return false
    return this.hydrate(cached)
  },

  setDefault() {
    storage.set(defaultFields)
    return this.hydrate(defaultFields)
  },

  hydrate(data) {
    return _.map(data, (field) => new Field(field))
  }

}