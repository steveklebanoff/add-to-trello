<template>
<div class="form-group c-card__list">
  <label>{{ field.label }}</label>

  <select class="form-control"
          v-model="field.prefillOptions.value" @change="listHasChanged">
    <option value="">Select a List</option>
    <option v-for="list in listDropdown" :value="list.id" v-show="boardId">
      {{ list.name }}
    </option>
  </select>
</div>
</template>

<script>
import fieldMixin from '../../mixins/popup-field.mixin'
import TrelloService from '../../lib/trello/trello.service'

export default {
  mixins: [fieldMixin],

  data() {
    return {
      boardId: false,
      listDropdown: []
    }
  },

  ready() {
    this.formValue = this.field.prefillOptions.value

    if (this.boardId) {
      this.setListDropdown()
    }
  },


  computed: {
    chooseList() {
      return this.field.prefillOptions.type === 'select:choose'
    }
  },

  events: {
    'board.updated': function(boardId) {
      this.boardId = boardId
      this.setListDropdown()
    }
  },

  methods: {
    setListDropdown() {
      TrelloService.getListDropdown(this.boardId, (dropdown) => {
        this.$set('listDropdown', dropdown)
      })
    },
    listHasChanged() {
      if (this.field.prefillOptions.updateLastUsed()) {
        this.$dispatch('fields.updated')
      }
    }
  }
}
</script>
