<template>
<form class="c-card-form">
    <div class="form-group">
        <label for="card-title">Card Title</label>
        <input type="text" name="card-title" class="form-control js-card-title" autofocus>
    </div>

    <div class="form-group">
        <label for="card-description">Card Description</label>
        <textarea
          name="card-description"
          class="form-control js-card-description"
          rows="5"></textarea>
    </div>

    <div class="form-group">
        <label for="board">Board</label>
        <select name="board" class="form-control js-boards"></select>
    </div>

    <div class="form-group">
        <label for="list">List</label>
        <select name="list" class="form-control js-lists"></select>
    </div>

    <div class="form-group">
        <button type="submit" class="btn btn--green">Add</button>
    </div>
</form>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss">
.c-card-form {
    margin-bottom: 20px;
}
</style>