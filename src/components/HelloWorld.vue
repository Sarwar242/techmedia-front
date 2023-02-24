<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }} {{getName("Sarwar")}},</h1>

    <h3>
      You’ve successfully completed:
    </h3>
    <label for="laravel">Laravel</label>&nbsp;
    <input type="checkbox" value="laravel" id="laravel" name="laravel" v-model="technology">   <br> 
    <label for="django">Django</label>&nbsp;
    <input type="checkbox" value="django" id="django" name="django" v-model="technology">    <br> 
    <label for="vue">Vue Js</label> &nbsp;
    <input type="checkbox" value="vue" id="vue" name="vue" v-model="technology">    <br> 
    <label for="git">Git</label>&nbsp;
    <input type="checkbox" value="git" id="git" name="git" v-model="technology">   <br> 

    <br><br>
    <h1>Occupation: </h1>

    <label for="student">Student</label>
    <input type="radio" value="student" id="student" name="ocu" v-model="who">
    <label for="dev">Developer</label>
    <input type="radio" value="Developer" id="dev" name="ocu" v-model="who">
    <h6>Selected Technology: {{technology}}</h6>
    <h6>I am a : {{who}}</h6>
    <!-- <button v-on:click="test(1)">Click</button>
    <button v-on:dblclick="test(2)">DBL Click</button> -->
  </div>
</template>

<script>
export default{
  name: "Hello",
  data(){
      return {
        msg2: "Cool",
        phone: "123",
        num:0,
        technology:[],
        who: null,
        
      };
    },
    methods:{
      test(v){
        if(v==2)
          return this.num+=2;
        else
          return this.num+=1;
      },
      getName(name){
          return name;
        }
    }

};
</script>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
