<template>
  <div>
    <div class="tabs">
        <ul>
            <router-link tag="li" :to="{name:'home'}" active-class="active">
                <div>首页</div>
            </router-link>
            <router-link tag="li" :to="{name:'explorer'}" active-class="active">
                <div>分类</div>
            </router-link>
            <router-link tag="li" :to="{name:'cart'}" active-class="active">
                <div>购物车</div>
            </router-link>
            <router-link tag="li" :to="{name:'me'}" active-class="active">
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
export default {};
</script>

<style>
</style>
