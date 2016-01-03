<template>
<div class="c-field">

  <template v-if="isConfiguration">
      <div class="c-field__subheading">
        <label class="switch-light switch-material  c-field__display">
          <input type="checkbox" v-model="field.display">
          <span><a></a></span>
        </label>

        <label class="c-field__label">{{ field.label }}</label>
      </div>

      <div class="c-field__options form-group">
        <label class="small">Prefill with:</label>
        <select name="prepopulate_options"
                class="form-control"
                v-model="field.prefillOptions.type"
                @change="optionCallback">

          <option v-for="option in availablePrefillOptions"
                  v-if="optionIsAllowed(option)"
                  :value="option.type">
            {{ option.label }}
          </option>

        </select>
      </div>

      <div class="c-field__options form-group" v-show="isTextField" transition="expand">
        <input type="text"
               class="form-control"
               placeholder="Add some default text to this field..."
               v-model="field.prefillOptions.text">
      </div>
  </template>

  <template v-if="!isConfiguration">
    <p>not configure</p>
  </template>

</div>
</template>

<script>
import PrefillOptions from '../../lib/field/prefillOptions.model'

export default {
  props: ['field', 'configure'],

  data() {
    return {
      availablePrefillOptions: PrefillOptions.available()
    }
  },

  computed: {
    isConfiguration() {
      return !! this.configure
    },
    
    isTextField() {
      return this.field.prefillOptions.type === 'text'
    }
  },

  methods: {
    optionCallback(e) {
      this.field.prefillOptions = PrefillOptions.createFromType(e.target.value)
    },

    optionIsAllowed(option) {
      return option.allowedFields.indexOf(this.field.inputType) !== -1
    }
  }
}
</script>

<style lang="scss">
@import '../../shared';
</style>
