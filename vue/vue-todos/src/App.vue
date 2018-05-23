<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul class="todos">
        <li v-for="(todo, index) in todos" v-bind:key="todo.value" :class="{'checked': todo.done}">
           <label>{{ index+1 }}.{{ todo.value }}</label>
           <time>{{ todo.created | date }}</time>
        </li>
    </ul>
  </div>
</template>

<script>
import "./assets/todos.less";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
export default {
  name: "app",
  filters: {
    date(val) {
      return moment(val).calendar();
    }
  },
  data() {
    return {
      msg: "Vue todos",
      title: "Vue-todos",
      todos: [
        { value: "阅读一本关于前端开发的书", done: false, created: Date.now() },
        { value: "补充范例代码", done: true, created: Date.now() },
        { value: "写心得", done: false, created: Date.now() }
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
