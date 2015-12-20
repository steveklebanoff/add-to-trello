<template>
<form class="settings_form js-settings-form clearfix">
  <div class="col-md-5">
    <!-- Card Title -->
    <div class="form-group">
      <label for="title">Card Title</label>
      <select class="form-control js-title js-defined-control" name="title">
        <option value="empty">Leave Blank</option>
        <option value="page">Current Page Title</option>
        <option value="defined">As Defined</option>
      </select>

      <!-- As Defined Input -->
      <input class="value_input form-control hidden"
             type="text"
             name="titleValue"
             placeholder="Card Title">
    </div>

    <!-- Card Description -->
    <div class="form-group">
      <label for="description">Description</label>
      <select class="form-control js-description js-defined-control" name="description">
        <option value="empty">Leave Blank</option>
        <option value="url">Current Page Url</option>
        <option value="defined">As Defined</option>
      </select>

      <!-- As Defined Input -->
      <input class="value_input form-control hidden"
             type="text"
             name="descriptionValue"
             placeholder="Card Description">
    </div>
  </div>

    <div class="col-md-5 col-md-offset-2">
      <!-- Board & List Defaults -->
      <div class="form-group">
        <label for="boardList">Board &amp; List Overrides</label>
        <select class="form-control js-board-list" name="boardList">
          <option value="last-used">Last Used</option>
          <option value="choose">Choose</option>
        </select>
      </div>

      <!-- Board Dropdown -->
      <div class="form-group board-dropdown hidden">
        <label for="board">Board</label>
        <select class="form-control js-boards" name="board">
        </select>
      </div>

      <!-- List Dropdown -->
      <div class="form-group list-dropdown hidden">
        <label for="list">List</label>
        <select class="form-control js-lists" name="list">
        </select>
      </div>
    </div>

    <!-- Save Button -->
    <div class="col-md-12">
      <button type="submit" class="btn btn--green">Save</button>
    </div>
</form>
</template>
