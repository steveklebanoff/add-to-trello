<template>
<div class="form-group c-card__title">
  <label>{{ field.label }}</label>
  <input type="text"
    class="form-control"
    v-model="formValue"
    autofocus>
</div>
</template>

<script>
import fieldMixin from '../../mixins/popup-field.mixin'

export default {
  mixins: [fieldMixin]
}
</script>
