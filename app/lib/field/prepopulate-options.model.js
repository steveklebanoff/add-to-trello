// const AVAILABLE_TYPES = [
//   { name: 'Text', value: 'text' },
//   { name: 'Page Title', value: 'chrome:title' },
//   { name: 'Page URL', value: 'chrome:url' },
//   { name: 'Last Used', value: 'select:last_used' },
//   { name: 'Choose', value: 'select:choose' }
// ]

const AVAILABLE_TYPES = {
  
  { name: 'Text', value: 'text' },
  { name: 'Page Title', value: 'chrome:title' },
  { name: 'Page URL', value: 'chrome:url' },
  { name: 'Last Used', value: 'select:last_used' },
  { name: 'Choose', value: 'select:choose' }
}

/**
 * Field Prepopulation Options
 */
export default class PrepopulateOptions {
  constructor ({ type, value }) {
    this.type = type
    this.value = value
  }

  static availableTypes() {
    return AVAILABLE_TYPES
  }
}