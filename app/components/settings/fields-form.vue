<template>
<div class="c-fields-form">
</div>
</template>

<script>
import fieldService from '../../lib/field/field.service'

export default {
  data() {
    return {
      fields: fieldService.get()
    }
  },

  methods: {
    save() {
      // fieldService.save(this.fields)
      // noty('successful save notification')
    }
  }
}
</script>