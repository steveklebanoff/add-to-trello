import storage from 'local-storage'
import _ from 'lodash'
import Field from './field.model'
import defaultFields from './defaultFields.json'

const STORAGE_KEY = 'fields'

/**
 * Field Service
 */
export default {

  get() {
    if (this.hasCached()) return this.fromCache()
    return this.setDefault()
  },

  save(fields) {
    return storage.set(STORAGE_KEY, fields)
  },

  hasCached() {
    return !! storage.get(STORAGE_KEY)
  },

  fromCache() {
    let cached = storage.get(STORAGE_KEY)
    if (!cached) return this.setDefault()
    return this.hydrate(cached)
  },

  setDefault() {
    storage.set(STORAGE_KEY, defaultFields)
    return this.hydrate(defaultFields)
  },

  hydrate(data) {
    return _.map(data, (field) => new Field(field))
  }

}
