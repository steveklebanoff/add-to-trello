<template>
  <p>{{ type }}</p>
</template>

<script>
export default {
  props: ['type'],

  data() {
    return {
      data: []
    }
  },

  ready() {
    this.data = this.getDataByType(this.type)
  },

  methods: {
    getDataByType(type) {
      switch(type) {
        case 'list':
          // TODO:
        case 'board':
          // TODO:
      }
    }
  }
}
</script>

<style lang="scss">
</style>
