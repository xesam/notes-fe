<template>
  <div id="app">
    <div class="tabs">
        <ul>
            <router-link tag="li" :to="{name:'home'}" >
                <div>首页</div>
            </router-link>
            <router-link tag="li" :to="{name:'explorer'}" >
                <div>分类</div>
            </router-link>
            <router-link tag="li" :to="{name:'cart'}">
                <div>购物车</div>
            </router-link>
            <router-link tag="li" :to="{name:'me'}">
                <div>我</div>
            </router-link>
        </ul>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
</style>
