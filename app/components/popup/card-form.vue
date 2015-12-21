<template>
<form class="c-card">
  <div class="form-group c-card__title">
    <label>Card Title</label>
    <input type="text"
           class="form-control"
           v-model="card.title"
           autofocus>
  </div>

  <div class="form-group c-card__description">
    <label>Card Description</label>
    <textarea
      class="form-control"
      v-model="card.description"
      rows="5"></textarea>
  </div>

  <div class="form-group c-card__boards">
    <label>Board</label>
    <select class="form-control"></select>
  </div>

  <div class="form-group c-card__lists">
    <label>List</label>
    <select class="form-control"
            v-model="card.list_id"></select>
  </div>

  <div class="form-group c-card__submit">
    <button type="submit" class="btn btn--green">Add</button>
  </div>
</form>
</template>

<script>
export default {

  data() {
    return {
      card: { title: '', description: '', list_id: '' }
    }
  },

  ready() {
  },

  methods: {
    getCurrentTab(callback) {
      let queryInfo = { active: true, currentWindow: true }
      chrome.tabs.query(queryInfo, (tabs) => {
        callback(tabs[0])
      });
    }
  }

}
</script>

<style lang="scss">
.c-card {
  margin-bottom: 20px;
}
</style>