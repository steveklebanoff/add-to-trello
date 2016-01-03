/**
 * Field Form Mixin
 */
export default {
  props: ['field'],

  data() {
    return {
      formValue: ''
    }
  },

  watch: {
    formValue: function() {
      if (this.field.trelloField) {
        this.$dispatch('form.update', { [this.field.trelloField]: this.formValue })
      }
    }
  },

  ready() {
    this.field.prefillOptions.getPrefillValue((value) => this.formValue = value)
  }
}
