import _ from 'lodash'

class FieldOptions {
  constructor ({ name, value, text, determines_location }) {
    this.name = name
    this.value = value
    this.text = text
    this.determines_location = determines_location

    // short paragraph describing how the field translates to Trello
    // this.description = description
  }

  static available() {
    return AVAILABLE_OPTIONS
  }

  static get(value) {
    return _.find(AVAILABLE_OPTIONS, (opt) => {
      return opt.value === value
    })
  }

  checkFieldPermissions(field) { 
    if (field.type === 'select') {
      return this.determines_location
    } else {
      return ! this.determines_location
    }
  }
}

export default FieldOptions

const AVAILABLE_OPTIONS = [
  new FieldOptions({ name: 'Nothing',    value: 'blank',            determines_location: false }),
  new FieldOptions({ name: 'Text',       value: 'text',             determines_location: false }),
  new FieldOptions({ name: 'Page Title', value: 'chrome:title',     determines_location: false }),
  new FieldOptions({ name: 'Page URL',   value: 'chrome:url',       determines_location: false }),
  new FieldOptions({ name: 'Last Used',  value: 'select:last_used', determines_location: true }),
  new FieldOptions({ name: 'Choose',     value: 'select:choose',    determines_location: true })
]

