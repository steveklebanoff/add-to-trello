const AVAILABLE_TYPES = [
  { name: 'text', display_name: 'Text' },
  { name: 'chrome:title', display_name: 'Page Title' },
  { name: 'chrome:url', display_name: 'Page URL' },
  { name: 'select:last_used', display_name: 'Last Used' },
  { name: 'select:choose', display_name: 'Choose' }
]

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