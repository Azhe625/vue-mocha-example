<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Example></Example>
  </div>
</template>

<script>
// @ is an alias to /src
import Example from '@/components/example.vue'
export default {
  name: 'Home',
  components: {
    Example
  }
}
</script>
