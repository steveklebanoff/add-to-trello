<template>
<div class="c-field" :data-id="field.position">

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
            @change="prefillOptionHasChanged">

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
           v-model="field.prefillOptions.value">
  </div>
</div>
</template>

<script>
import fieldMixin from '../../mixins/settings-field.mixin'

export default {
  mixins: [fieldMixin],

  computed: {
    isTextField() {
      return this.field.prefillOptions.type === 'text'
    }
  }
}
</script>
