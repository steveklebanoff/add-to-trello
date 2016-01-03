import PrefillOptions from './prefillOptions.model'

/**
 * Field Model
 */
export default class Field {
  constructor ({ component, label, inputType, trelloField, display, prefillOptions }) {
    this.component = component
    this.label = label
    this.inputType = inputType
    this.trelloField = trelloField
    this.display = display
    this.prefillOptions = new PrefillOptions(prefillOptions)
  }
}
