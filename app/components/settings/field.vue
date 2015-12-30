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
    <label class="small">Prepopulate field with:</label>
    <select name="prepopulate_options" class="form-control">
      <option v-for="option in availableTypes"
              value="{{ option.value }}">
        {{ option.name }}
      </option>
    </select>
  </div>

</div>
</template>

<script>
import prepopulateOptions from '../../lib/field/prepopulate-options.model'

export default {
  props: ['field'],

  data() {
    return {
      availableTypes: prepopulateOptions.availableTypes()
    }
  }
}
</script>

<style lang="scss">
@import '../../shared';

.c-field {
  background-color: #efefef;
  padding: 15px;
  width: 50%;
  margin: auto;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  margin-bottom: 15px;
}

.c-field__subheading {
  margin-bottom: 15px;
}

.c-field__display {
  cursor: pointer;
  float: left;
}

.c-field__label {
  margin: 3px 10px;
}
</style>
