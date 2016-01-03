<template>
<div class="c-field">

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

  <div class="c-field__options form-group" v-show="chooseList" transition="expand">
    <select name="boards" class="form-control" v-model="field.prefillOptions.value">
      <option value="">Select a List</option>
    </select>
  </div>
</div>
</template>

<script>
import fieldMixin from './field.mixin'

export default {
  mixins: [fieldMixin],

  computed: {
    chooseList() {
      return this.field.prefillOptions.type === 'select:choose'
    }
  }
}
</script>

<style lang="scss">
@import '../../../shared';
</style>
