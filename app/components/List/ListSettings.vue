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

  <div class="c-field__options form-group" v-show="chooseList" transition="expand">
    <div class="alert alert-danger" v-show="!boardId" transition="expand">
      You must selected a board before you can choose a list.
    </div>

    <select class="form-control"
            v-model="field.prefillOptions.value"
            v-show="boardId"
            transition="expand">
      <option value="">Select a List</option>
      <option v-for="list in listDropdown" :value="list.id">
        {{ list.name }}
      </option>
    </select>
  </div>
</div>
</template>

<script>
import fieldMixin from '../../mixins/settings-field.mixin'
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
    }
  }
}
</script>

<style lang="scss">
.alert {
  margin-bottom: 0;
}
</style>
