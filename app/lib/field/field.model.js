import PrepopulateOptions from './prepopulate-options.model'

/**
 * Field Model
 */
export default class Field {
  constructor ({ name, label, type, display, prepopulate_options }) {
    this.name = name
    this.label = label
    this.type = type
    this.display = display
    this.prepopulate_options = new PrepopulateOptions(prepopulate_options)
  }
}