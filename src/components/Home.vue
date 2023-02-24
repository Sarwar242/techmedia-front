<template>
    <h1>Home Component</h1>
    <!-- <Child name2="Sarwar" :users="users" :getData="getData" /> -->
    <!-- <ul>
        <li v-for="item in users" :key="item.id">
            <User :user="item" :getName="getName"/>
        </li>
    </ul> -->
    <!-- <div v-html="text">
    </div>    
    <div v-html="text">
    </div> -->

    <h1 :class="applyClass" > This is dynamic class binding!</h1>
    <button v-on:click="apply()">Apply</button>
</template>
<script>
import Child from './Child.vue';
import User from './User.vue';

export default {
    name: "Home",
    components:{
        Child,
        User
    },
    data(){
        return {
            name: "Child",
            red:false,
            background:false,
            size:false,
            text: "<span>Sarwar</span>",
            users:[
                {   id:1,name:"Sarwar",
                    email: "sarwar@gmail.com",
                    phone: "0176584784212"
                },
                { id:2,name:"John",
                    email: "John@gmail.com",
                    phone: "0176584784332"
                },
                { id:3,name:"Jashon",
                    email: "Jashon@gmail.com",
                    phone: "0176584784335"
                }
            ]
        }
    },
    computed:{
        applyClass(){
            return {
                red:this.red,
                background:this.background,
                size:this.size
            }
        }
    }
    ,
      methods:{
        apply(){
            this.red=!this.red;
            this.background=!this.background;
            this.size=!this.size;
        },
        getData(){
            console.log("Child called!");
            alert("Child called!");
          },      
        getName(name){
            alert(name);
          }
      }
}
</script>

<style scoped>
h1{
    color: green;
}
h2{
    color: rgb(68, 71, 68);
}
.red{
    color: red;
}
.backgroud{
    background-color:tan;
}
.size{
    font-size: 60px;
    font-style: italic;
}
</style>