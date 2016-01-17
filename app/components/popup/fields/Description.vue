<template>
<div class="form-group c-card__description">
  <label>{{ field.label }}</label>
  <textarea class="form-control"
    v-model="formValue"
    rows="5"></textarea>
</div>
</template>

<script>
import fieldMixin from './field.mixin'

export default {
  mixins: [fieldMixin]
}
</script>
