<script>
    export default {
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            increaseCounter() {
                this.counter += 1;
            }
        }
    }
</script>
<template>
    <h1>{{counter}}</h1>
    <button class="" @click="increaseCounter()">Increase Counter</button>
</template>

<style scoped>
    
</style>