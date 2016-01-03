import _ from 'lodash'

const AVAILABLE_OPTIONS = [
  { label: 'Nothing', type: 'nothing', allowedFields: ['text', 'textarea', 'date', 'select'] },
  { label: 'Page Title', type: 'chrome:page_title', allowedFields: ['text', 'textarea'] },
  { label: 'Page URL', type: 'chrome:page_url', allowedFields: ['text', 'textarea'] },
  { label: 'Text', type: 'text', allowedFields: ['text', 'textarea'], text: '' },
  { label: 'Last Used', type: 'select:last_used', allowedFields: ['select'], text: '' },
  { label: 'Choose', type: 'select:choose', allowedFields: ['select'], text: '' },
]

export default class PrefillOptions {
  constructor ({ label, type, allowedFields, text }) {
    this.label = label
    this.type = type
    this.allowedFields = allowedFields
    this.text = text
  }

  static available () {
    return _.map(AVAILABLE_OPTIONS, (opt) => new PrefillOptions(opt))
  }

  static createFromType(type) {
    return new PrefillOptions(
      _.find(AVAILABLE_OPTIONS, (opt) => opt.type === type)
    )
  }
}
