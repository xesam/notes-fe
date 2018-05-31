<template>
<div>
<book-list :books="books" @onBookClick="preview($event)"></book-list>
<modal-dialog ref="dialog"
                @dialogClose="selected=undefined">
        <div slot="header">
            <div class="dismiss"
                @click.prevent="$refs.dialog.close()"></div>
        </div>
        <div>
            {{ selected ? selected.title : "" }}
        </div>
    </modal-dialog>
</div>
</template>

<script>
import Vue from "vue";
import VueResource from "vue-resource";
import Booklist from "./components/Booklist.vue";
import ModalDialog from "./components/dialog.vue";
Vue.use(VueResource);

export default {
    created() {
        this.$http.get("/").then(data => {
            console.log(data);
            this.$data.books = [
                {
                    title: "book 1",
                    id: "1"
                },
                {
                    title: "book 2",
                    id: "2"
                }
            ];
        });
    },
    data() {
        return {
            books: [],
            selected: undefined
        };
    },
    methods: {
        preview(book) {
            // alert("click book " + book.title);
            this.selected = book;
            this.$refs.dialog.open();
        }
    },
    components: {
        ModalDialog
    }
};
</script>

<style>
</style>
