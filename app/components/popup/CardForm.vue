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
import fieldService from '../../lib/field/field.service'
import Api from '../../lib/trello/api'

import Board from './fields/Board.vue'
import List from './fields/List.vue'
import Title from './fields/Title.vue'
import Description from './fields/Description.vue'
import DueDate from './fields/DueDate.vue'

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
    'form.update': function(val) {
      this.form = _.assign(this.form, val)
    },
    'board.updated': function(id) {
      this.$broadcast('board.updated', id)
    },
  },

  methods: {
    save() {
      Api.createCard(this.form)
      .then((res) => {
        console.log('success!');
        console.log(res);
      })
      .catch((err) => {
        console.log('error!');
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
