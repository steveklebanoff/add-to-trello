<template>
<div class="c-fields-form">
  <button class="btn btn-primary" @click="save">Save</button>
  <template v-for="field in fields">
    <component
      :is="field.component"
      :field.sync="field"
      configure="true">
    </component>
  </template>
</div>
</template>

<script>
import fieldService from '../../lib/field/field.service'

import Title from './fields/Title.vue'
import Description from './fields/Description.vue'
import DueDate from './fields/DueDate.vue'
import Board from './fields/Board.vue'
import List from './fields/List.vue'

export default {

  data() {
    return {
      fields: fieldService.get()
    }
  },

  components: {
    'title': Title,
    'description': Description,
    'due-date': DueDate,
    'board': Board,
    'list': List
  },

  methods: {
    save() {
      if (fieldService.save(this.fields)) {
        console.log('saved!!!!!!');
        // noty('successful save notification')
      }
    }
  }
}
</script>
