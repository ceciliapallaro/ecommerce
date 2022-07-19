<template>
  <div class="about">
    <h1>Post del Usuario</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'usuarios-app',
  components: {
    HelloWorld
  }
}
</script>