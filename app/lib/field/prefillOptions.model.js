import _ from 'lodash'
import chromeService from '../chrome/chrome.service'

const AVAILABLE_OPTIONS = [
  { label: 'Nothing', type: 'nothing', allowedFields: ['text', 'textarea', 'date', 'select'] },
  { label: 'Page Title', type: 'chrome:page_title', allowedFields: ['text', 'textarea'] },
  { label: 'Page URL', type: 'chrome:page_url', allowedFields: ['text', 'textarea'] },
  { label: 'Text', type: 'text', allowedFields: ['text', 'textarea'], value: '' },
  { label: 'Last Used', type: 'select:last_used', allowedFields: ['select'], value: '' },
  { label: 'Choose', type: 'select:choose', allowedFields: ['select'], value: '' },
]

export default class PrefillOptions {
  constructor ({ label, type, allowedFields, value }) {
    this.label = label
    this.type = type
    this.allowedFields = allowedFields
    this.value = value
  }

  /**
   * Return an array of available prefill types
   */
  static available () {
    return _.map(AVAILABLE_OPTIONS, (opt) => new PrefillOptions(opt))
  }

  /**
   * Create a new instance of PrefillOptions based on the given type
   */
  static createFromType(type) {
    return new PrefillOptions(
      _.find(AVAILABLE_OPTIONS, (opt) => opt.type === type)
    )
  }

  /**
   * Based on the prefill type, return the appropriate value for this field.
   */
  getPrefillValue(callback) {
    switch(this.type) {
      case 'nothing':
        return callback('')

      case 'chrome:page_title':
        return chromeService.getCurrentTab((tab) => callback(tab.title))

      case 'chrome:page_url':
        return chromeService.getCurrentTab((tab) => callback(tab.url))

      case 'select:last_used':
      case 'text':
      case 'select:choose':
        return callback(this.value)
    }
  }
}
