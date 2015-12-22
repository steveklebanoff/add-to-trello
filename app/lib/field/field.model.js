import PrepopulateOptions from './prepopulate-options.model'

/**
 * Field Model
 */
export default class Field {
  constructor ({ name, label, type, position, display, prepopulate_options }) {
    this.name = name
    this.label = label
    this.type = type
    this.position = position
    this.display = display
    this.prepopulate_options = new PrepopulateOptions(prepopulate_options)
  }
}