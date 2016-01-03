<template>
<div class="c-fields-form">
  <template v-for="field in fields">
    <component
      :is="field.component"
      :field.sync="field">
    </component>
  </template>
</div>
</template>

<script>
import noty from 'noty'
import _ from 'lodash'

import sortableMixin from './fields/sortable.mixin'
import fieldService from '../../lib/field/field.service'
import Title from './fields/Title.vue'
import Description from './fields/Description.vue'
import DueDate from './fields/DueDate.vue'
import Board from './fields/Board.vue'
import List from './fields/List.vue'

export default {
  mixins: [sortableMixin],

  data() {
    return {
      fields: fieldService.get()
    }
  },

  ready() {
    this.makeSortable(this.fields)
  },

  components: {
    'title': Title,
    'description': Description,
    'due-date': DueDate,
    'board': Board,
    'list': List
  },

  events: {
    'board.updated': function(id) {
      this.$broadcast('board.updated', id)
    },
    'sortable.end': function() {
      for (var i = 0; i < this.fields.length; i++) {
        this.fields[i].position = i
      }
    }
  },

  watch: {
    fields: {
      deep: true,
      // debounce the save handler so we don't save too many times in a row
      handler: _.debounce(function() {
        this.save()
      }, 250)
    }
  },

  methods: {
    save() {
      if (fieldService.save(this.fields)) {
        noty({
          text: 'Saved!',
          theme: 'bootstrapTheme',
          layout: 'topRight',
          type: 'success',
          timeout: 2000,
          animation: {
            open: { height: 'toggle' },
            close: { height: 'toggle' }
          }
        })
      }
    }
  }
}
</script>
