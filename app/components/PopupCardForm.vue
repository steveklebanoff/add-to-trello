<template>
<form class="c-card">
  <template v-for="field in fields">
    <component
      :is="field.component"
      :field="field"
      v-if="displayField(field)">
    </component>
  </template>

  <div class="form-group">
    <button type="button" class="btn btn--green" @click="save">Save</button>
  </div>

</form>
</template>

<script>
import _ from 'lodash'
import fieldService from '../lib/field/field.service'
import Api from '../lib/trello/api'

import Board from './Board/BoardPopup.vue'
import List from './List/ListPopup.vue'
import Title from './Title/TitlePopup.vue'
import Description from './Description/DescriptionPopup.vue'
import DueDate from './DueDate/DueDatePopup.vue'

export default {

  data() {
    return {
      fields: fieldService.get(),
      form: {}
    }
  },

  components: {
    'title': Title,
    'description': Description,
    'due-date': DueDate,
    'board': Board,
    'list': List
  },

  events: {
    'form.updated': function(val) {
      this.form = _.assign(this.form, val)
    },
    'board.updated': function(id) {
      this.$broadcast('board.updated', id)
    },
    'fields.updated': function() {
      fieldService.save(this.fields)
    }
  },

  methods: {
    save() {
      Api.createCard(this.form)
      .then((card) => {
        window.close();
      })
      .catch((err) => {
        console.log(err);
      })
    },

    displayField(field) {
      return field.display === true
    }
  }

}
</script>

<style lang="scss">
.c-card {
  margin-bottom: 20px;
}
</style>
