<template>
  <div>
   <book-list :books="books" @onBookClick="preview($event)"></book-list>
  </div>
</template>

<script>
import Booklist from "./components/Booklist.vue";
import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);

export default {
  created() {
    this.$http.get('/').then(data => {
        console.log(data);
    });
  },
  data() {
    return {
      books: []
    };
  },
  methods: {
    preview(book) {
      alert("click book " + book.title);
    }
  }
};
</script>

<style>
</style>
