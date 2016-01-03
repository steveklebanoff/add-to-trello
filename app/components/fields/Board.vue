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
                @change="prefillOptionHasChanged">

          <option v-for="option in availablePrefillOptions"
                  v-if="optionIsAllowed(option)"
                  :value="option.type">
            {{ option.label }}
          </option>

        </select>
      </div>

      <div class="c-field__options form-group" v-show="chooseBoard" transition="expand">
        <select name="boards" class="form-control" v-model="field.prefillOptions.text" @change="boardHasChanged">
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
import storage from 'local-storage'
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
    prefillOptionHasChanged(e) {
      this.field.prefillOptions = PrefillOptions.createFromType(e.target.value)

      if (this.field.prefillOptions.type !== 'select:choose') {
        storage.remove('selectedBoard')
      }
    },

    optionIsAllowed(option) {
      return option.allowedFields.indexOf(this.field.inputType) !== -1
    },

    boardHasChanged(e) {
      storage.set('selectedBoard', e.target.value)
    }
  }
}
</script>

<style lang="scss">
@import '../../shared';
</style>
