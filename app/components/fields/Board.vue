<template>
<div class="c-field">
  <pre>{{ field | json }}</pre>

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

      <div class="c-field__options form-group" v-show="chooseBoard" transition="expand">
        <select name="boards" class="form-control" v-model="field.prefillOptions.text">
          <option value="">Select a Board</option>
          <optgroup v-for="org in boardsDropdown" :label="org.name">
            <option v-for="board in org.boards" :value="board.id">
              {{ board.label }}
            </option>
          </optgroup>
        </select>
      </div>
  </template>

  <template v-if="!isConfiguration">
    <p>not configure</p>
  </template>

</div>
</template>

<script>
import PrefillOptions from '../../lib/field/prefillOptions.model'
import TrelloService from '../../lib/trello.service'

export default {
  props: ['field', 'configure'],

  data() {
    return {
      availablePrefillOptions: PrefillOptions.available(),
      boardsDropdown: {}
    }
  },

  ready() {
    TrelloService.getBoardsDropdown((dropdown) => {
      this.$set('boardsDropdown', dropdown)
    })
  },

  computed: {
    isConfiguration() {
      return !! this.configure
    },

    chooseBoard() {
      return this.field.prefillOptions.type === 'select:choose'
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
