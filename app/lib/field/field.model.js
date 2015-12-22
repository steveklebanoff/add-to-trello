/**
 * Field Model
 */
export default class Field {
  constructor ({ name, label, position, display }) {
    this.name = name
    this.label = label
    this.position = position
    this.display = display
  }
}