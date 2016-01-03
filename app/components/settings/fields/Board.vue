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
            @change="prefillOptionHasChanged($event, prefillOptionCallback)">

      <option v-for="option in availablePrefillOptions"
              v-if="optionIsAllowed(option)"
              :value="option.type">
        {{ option.label }}
      </option>

    </select>
  </div>

  <div class="c-field__options form-group" v-show="chooseBoard" transition="expand">
    <select name="boards" class="form-control" v-model="field.prefillOptions.value" @change="boardHasChanged">
      <option value="">Select a Board</option>
      <optgroup v-for="org in boardsDropdown" :label="org.name">
        <option v-for="board in org.boards" :value="board.id">
          {{ board.label }}
        </option>
      </optgroup>
    </select>
  </div>
</div>
</template>

<script>
import fieldMixin from './field.mixin'
import TrelloService from '../../../lib/trello/trello.service'

export default {
  mixins: [fieldMixin],

  data() {
    return {
      boardsDropdown: {}
    }
  },

  ready() {
    TrelloService.getBoardsDropdown((dropdown) => {
      this.$set('boardsDropdown', dropdown)
    })
  },

  computed: {
    chooseBoard() {
      return this.field.prefillOptions.type === 'select:choose'
    }
  },

  methods: {
    prefillOptionCallback() {
      if (this.field.prefillOptions.type !== 'select:choose') {
        this.$dispatch('board.updated')
      }
    },

    boardHasChanged(e) {
      this.$dispatch('board.updated', e.target.value)
    }
  }
}
</script>

<style lang="scss">
@import '../../../shared';
</style>
