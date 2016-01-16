import SortableJs from 'sortablejs'

/**
 * SortableMixin
 * Usage: Call this.makeSortable(some-data);
 * @param  Array list
 */
export default {
  data() {
    return {
      sortable: null
    }
  },

  methods: {
    /**
     * Create a new instance of the Sortable plugin
     * @param  data
     */
    makeSortable(data) {
      var el = this.$el;
      var self = this;

      this.sortable = SortableJs.create(el, {
        draggable: '.c-field',
        animation: 150,
        dataIdAttr: 'data-id',

        /**
         * We track the position of the list item
         * by it's data-id and update the list.
         */
        onUpdate: function(e) {
          var oldPosition = e.item.getAttribute('data-id');
          var newPosition = this.toArray().indexOf(oldPosition);

          data.splice(newPosition, 0, data.splice(oldPosition, 1)[0]);
          self.$emit('sortable.end')
        }
      });
    }
  }
}
