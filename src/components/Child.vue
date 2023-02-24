<template>
    <h1>Child Component</h1>
    <h2>{{ name2 }}</h2>
    <ul>
        <li v-for="user in users" :key="user.id">
            <h4> Name: {{user.name}}</h4>
            <h4> Email: {{user.email}}</h4>
            <h4> Phone: {{user.phone}}</h4>
        </li>
        <br>
        <button v-on:click="getData()">Home Function</button>
    </ul>
</template>

<script>
export default {
    name: "Child",
    props:{
        name2:String,
        users:Object,
        getData : Function
    }
}
</script>

<style scoped>
h1{
    color: orange;
}
h2{
    color: rebeccapurple;
}
</style>