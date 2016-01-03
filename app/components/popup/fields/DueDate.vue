<template>
<div class="form-group c-card__due-date">
  <label>{{ field.label }}</label>
  <input class="form-control"
         type="text"
         data-provide="datepicker"
         v-model="formValue">
</div>
</template>

<script>
import fieldMixin from './field.mixin'

export default {
  mixins: [fieldMixin]
}
</script>
