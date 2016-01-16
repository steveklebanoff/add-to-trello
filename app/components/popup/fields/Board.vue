<template>
<div class="form-group c-card__board">
  <label>{{ field.label }}</label>

  <select class="form-control" v-model="field.prefillOptions.value" @change="boardHasChanged">
    <option value="">Select a Board</option>
    <optgroup v-for="org in boardsDropdown" :label="org.name">
      <option v-for="board in org.boards" :value="board.id">
        {{ board.label }}
      </option>
    </optgroup>
  </select>
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
    this.$dispatch('board.updated', this.field.prefillOptions.value)

    TrelloService.getBoardsDropdown((dropdown) => {
      this.$set('boardsDropdown', dropdown)
    })
  },

  methods: {
    boardHasChanged(e) {
      this.$dispatch('board.updated', e.target.value)
    }
  }
}
</script>
