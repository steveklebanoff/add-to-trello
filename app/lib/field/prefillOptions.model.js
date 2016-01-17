import _ from 'lodash'
import chromeService from '../chrome/chrome.service'

const TYPE_NOTHING = 'nothing'
const TYPE_PAGE_TITLE = 'chrome:page_title'
const TYPE_PAGE_URL = 'chrome:page_url'
const TYPE_TEXT = 'text'
const TYPE_LAST_USED = 'select:last_used'
const TYPE_CHOOSE = 'select:choose'

const AVAILABLE_OPTIONS = [
  { label: 'Nothing', type: TYPE_NOTHING, allowedFields: ['text', 'textarea', 'date', 'select'] },
  { label: 'Page Title', type: TYPE_PAGE_TITLE, allowedFields: ['text', 'textarea'] },
  { label: 'Page URL', type: TYPE_PAGE_URL, allowedFields: ['text', 'textarea'] },
  { label: 'Text', type: TYPE_TEXT, allowedFields: ['text', 'textarea'], value: '' },
  { label: 'Last Used', type: TYPE_LAST_USED, allowedFields: ['select'], value: '' },
  { label: 'Choose', type: TYPE_CHOOSE, allowedFields: ['select'], value: '' },
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
  static available() {
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

  /**
   * Returns boolean to determine if this field should update the last used ID.
   */
  updateLastUsed() {
    return this.type === TYPE_LAST_USED
  }
}
