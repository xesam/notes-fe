<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul>
        <li v-for="todo in todos" v-bind:key="todo.value">
           <label>{{ todo.value }}</label>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Vue todos",
      title: "Vue-todos",
      todos: [
        { value: "阅读一本关于前端开发的书", done: false },
        { value: "补充范例代码", done: true },
        { value: "写心得", done: false }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
