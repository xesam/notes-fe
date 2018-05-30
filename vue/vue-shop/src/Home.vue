<template>
  <div>
   <book-list :books="books" @onBookClick="preview($event)"></book-list>
  </div>
</template>

<script>
import Booklist from "./components/Booklist.vue";
export default {
  data() {
    return {
      books: [
        {
          title: "book 1",
          id: "1"
        },
        {
          title: "book 2",
          id: "2"
        },
        {
          title: "book 3",
          id: "3"
        }
      ]
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
