<template>
    <div class="dialog-wrapper" :class="{'open':is_open}">
        <div class="overlay" @click="close"></div>
        <div class="dialog">
            <div class="heading">
                <slot name="heading"></slot>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<style>
</style>
<script>
import "./dialog.less";
export default {
    data() {
        return {
            is_open: false
        };
    },
    methods: {
        open() {
            if (!this.is_open) {
                this.$emit("dialogOpen");
            }
            this.is_open = true;
        },

        close() {
            if (this.is_open) {
                this.$emit("dialogClose");
            }
            this.is_open = false;
        }
    }
};
</script>