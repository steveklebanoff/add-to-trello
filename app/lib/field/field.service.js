import storage from 'local-storage'
import _ from 'lodash'
import Field from './field.model'
import defaultFields from './defaultFields.json'

/**
 * Field Service
 */
export default {

  get() {
    // if (this.hasCached()) {
    //   return this.fromCache()
    // }
    return this.setDefault()
  },

  save(fields) {
    return storage.set('fields', fields)
  },

  hasCached() {
    return !! storage.get('fields')
  },

  fromCache() {
    let cached = storage.get('fields')
    if (!cached) return this.setDefault()
    return this.hydrate(cached)
  },

  setDefault() {
    storage.set('fields', defaultFields)
    return this.hydrate(defaultFields)
  },

  hydrate(data) {
    return _.map(data, (field) => new Field(field))
  }

}
