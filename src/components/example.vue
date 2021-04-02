
<template>
     <div>
      <span class="count">{{ count }}</span>
      <button class="add" @click="handleAdd">add</button>
      <example-child @custom="onCustom"></example-child>
      <p v-if="isEmit">isemit</p>
    </div>
</template>

<script>
import ExampleChild from './example-child.vue'
export default {
  name: 'example',
  props:{
      foo: {
        type: String
      }
  },
  data () {
   return {
       count: 0,
       isEmit: false
   }
  },
  mounted () {
      console.log('生命周期被触发')
  },
  components:{
      ExampleChild
  },
  computed: {},
  watch: {},
  methods: {
    handleAdd() {
        console.log('数值+1')
      this.count++
    },
    onCustom() {
        this.isEmit = true
        console.log('触发custom',this.isEmit)
    }
  },
}
</script> 

<style></style>
