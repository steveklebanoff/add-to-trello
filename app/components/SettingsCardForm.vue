<template>
<div class="c-fields-form">
  <button @click="save" class="btn btn--green pull-right">Save</button>
  <h2>Trello Fields</h2>
  <template v-for="field in fields">
    <component
      :is="field.component"
      :field.sync="field">
    </component>
  </template>
</div>
</template>

<style lang="scss">
@import '../shared';

.c-fields-form {
  width: 50%;
  margin: auto;

  h1 {
    font-family: $font-family;
  }
}

.c-field {
  background-color: #edeff0;
  padding: 15px;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  margin-bottom: 15px;
  cursor: pointer;
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

<script>
import noty from 'noty'
import _ from 'lodash'

import sortableMixin from '../mixins/sortable.mixin'
import fieldService from '../lib/field/field.service'

import Title from './Title/TitleSettings.vue'
import Description from './Description/DescriptionSettings.vue'
import DueDate from './DueDate/DueDateSettings.vue'
import Board from './Board/BoardSettings.vue'
import List from './List/ListSettings.vue'
// import Position from './Position/PositionSettings.vue'

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
    // 'position': Position
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
