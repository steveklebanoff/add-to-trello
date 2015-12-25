<template>
<div class="c-field">

  <label class="switch-light switch-material  c-field__display">
    <input type="checkbox" v-model="field.display">
    <span><a></a></span>
  </label>

  <label class="c-field__label">{{ field.label }}</label>

</div>
</template>

<script>
export default {
  props: ['field']
}
</script>

<style lang="scss">
@import '../../shared';

.c-field {
  background-color: #efefef;
  padding: 15px;
  width: 50%;
  margin: auto;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  margin-bottom: 15px;
}

.c-field__display {
  float: left;
}

.c-field__label {
  margin: 3px 10px;
}
</style>
