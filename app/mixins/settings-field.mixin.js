import PrefillOptions from '../lib/field/prefillOptions.model'

/**
 * Configuration Field Mixin
 */
 export default {
  props: ['field', 'configure'],

  data() {
    return {
      availablePrefillOptions: PrefillOptions.available()
    }
  },
  
  methods: {
    optionIsAllowed(option) {
      return option.allowedFields.indexOf(this.field.inputType) !== -1
    },

    prefillOptionHasChanged(e, callback = null) {
      this.field.prefillOptions = PrefillOptions.createFromType(e.target.value)
      if (callback) return callback()
    },

  }
 }
