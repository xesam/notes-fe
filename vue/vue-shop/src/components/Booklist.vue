<template>
  <div class="book-list">
    <ul>
    <li class="book" v-for="book in books" v-bind:key="book.id" @click="$emit('onBookClick', book)">
        {{book.title}}
    </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
let Booklist = {
  props: ["books"],
  filters: {
    join(args) {
      return args.json(",");
    }
  }
};
Vue.component("book-list", Booklist);
export default Booklist;
</script>
