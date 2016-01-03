<template>
<div class="c-field">
  <pre>{{ field | json }}</pre>

  <div class="c-field__subheading">
    <label class="switch-light switch-material  c-field__display">
      <input type="checkbox" v-model="field.display">
      <span><a></a></span>
    </label>

    <label class="c-field__label">{{ field.label }}</label>
  </div>

  <div class="c-field__options form-group">
    <label class="small">Prepopulate field with:</label>
    <select name="prepopulate_options" class="form-control" v-model="field.options.value" @change="optionCallback">
      <option v-for="option in availableOptions"
              v-if="optionIsAllowed(option)"
              :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>

  <div class="c-field__options form-group" v-show="isTextField" transition="expand">
    <input type="text"
           class="form-control"
           placeholder="Add some default text to this field..."
           v-model="field.options.text">
  </div>

  <div class="c-field__options form-group" v-show="isChooseLocation" transition="expand">
    <trello-dropdown :type="field.name"></trello-dropdown>
  </div>

</div>
</template>

<script>
import _ from 'lodash'
import FieldOptions from '../../lib/field/prefillOptions.model'
import TrelloDropdown from './TrelloDropdown.vue'

export default {
  props: ['field'],

  data() {
    return {
      availableOptions: FieldOptions.available()
    }
  },

  components: {
    'trello-dropdown': TrelloDropdown
  },

  computed: {
    isTextField() {
      return this.field.options.value === 'text'
    },

    isChooseLocation() {
      return this.field.options.value === 'select:choose'
    }
  },

  methods: {
    optionIsAllowed(option) {
      return option.checkFieldPermissions(this.field)
    },

    optionCallback(e) {
      let options = FieldOptions.get(e.target.value)
      options.text = this.field.options.text
      this.field.options = _.assign(this.field.options, options)
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
