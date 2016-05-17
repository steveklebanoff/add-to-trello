<template>
<div class="form-group c-card__due-date">
  <label>{{ field.label }}</label>
  <div class="input-group">
    <input class="form-control js-datepicker"
           type="text"
           v-model="formValue">
    <span class="input-group-addon c-card__icon">
      <span class="glyphicon glyphicon-calendar"></span>
    </span>
  </div>
</div>
</template>

<script>
import fieldMixin from '../../mixins/popup-field.mixin'

export default {
  mixins: [fieldMixin],

  ready() {
    $('.js-datepicker').datepicker({ todayBtn: 'linked' })
    this.formValue = this.getToday()
  },

  methods: {
    getToday() {
      let today = new Date()
      let dd = today.getDate()
      let mm = today.getMonth()+1
      let yyyy = today.getFullYear()
      if (dd < 10) dd='0'+dd 
      if (mm < 10) mm='0'+mm
      return `${mm}/${dd}/${yyyy}`
    }
  }
}
</script>

<style lang="scss">
.c-card__due-date .c-card__icon {
  border: 0;
  border-radius: 0;
}
</style>
