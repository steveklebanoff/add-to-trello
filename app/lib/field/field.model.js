import PrefillOptions from './prefillOptions.model'

/**
 * Field Model
 */
export default class Field {
  constructor ({ component, label, inputType, position, trelloField, display, prefillOptions }) {
    this.component = component
    this.label = label
    this.inputType = inputType
    this.position = position
    this.trelloField = trelloField
    this.display = display
    this.prefillOptions = new PrefillOptions(prefillOptions)
  }
}
