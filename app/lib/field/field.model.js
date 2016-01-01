import FieldOptions from './field-options.model'

/**
 * Field Model
 */
export default class Field {
  constructor ({ name, label, type, display, options }) {
    this.name = name
    this.label = label
    this.type = type
    this.display = display
    this.options = new FieldOptions(options)
  }
}
