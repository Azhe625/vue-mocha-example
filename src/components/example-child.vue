<template>
      <div @click="handleClick"></div>
</template>

<script>
export default {
  name: 'example-child',
  props: {},
  mixins: [],
  components: {
  },
  data () {
   return {}
  },
  mounted () {
  },
  computed: {},
  watch: {},
  methods: {
      handleClick() {
          this.$emit('custom')
      }
  },
  beforeDestroy () {
  },
}
</script> 

<style scoped lang='stylus'></style>
