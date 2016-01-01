<template>
<div class="c-fields-form">
  <field v-for="field in fields" :field="field"></field>
</div>
</template>

<script>
import fieldService from '../../lib/field/field.service'
import FieldView from './Field.vue'

export default {

  data() {
    return {
      fields: fieldService.get()
    }
  },

  components: {
    field: FieldView
  },

  methods: {
    save() {
      // fieldService.save(this.fields)
      // noty('successful save notification')
    }
  }
}
</script>
