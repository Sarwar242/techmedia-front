<template>
<h1>Ref Component</h1>
<input type="text" ref="input">
<button v-on:click="getData">click</button>
<h2>{{ name }}</h2>
</template>

<script>
import Child from './Child.vue';
import User from './User.vue';

export default {
    name: "Home",
    components: {
        Child,
        User
    },
    data() {
        return {
            name:''
        }
    },
    methods: {
        getData() {
            this.$refs.input.focus();
            this.name=this.$refs.input.value;
        }
    }
}
</script>

<style scoped>
h1 {
    color: green;
}

h2 {
    color: rgb(68, 71, 68);
}

.red {
    color: red;
}

.backgroud {
    background-color: tan;
}

.size {
    font-size: 60px;
    font-style: italic;
}
</style>
