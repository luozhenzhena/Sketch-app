<template>

  <div id="app">

    <router-view>

    </router-view>
  </div>

</template>

<script>
  import "./Views/HOME.vue";
  import "./Views/Begin.vue";
  import Begin from "./Views/Begin";
  import HOME from "./Views/HOME";

export default {
  name: 'App',
  data () {
    return{ }
  },
  components: {//局部注册组件这里，可能会定义多个组件，所以component这个单词加上“s”
           "app-header": Begin,
          "app-footer": HOME,

      }


}

</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fffafa;
}

</style>


