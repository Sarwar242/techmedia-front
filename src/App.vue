<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Condition from './components/Condition.vue';
import Loop from './components/Loop.vue';
import Home from './components/Home.vue';
import Home2 from './components/Home2.vue';
import RefComponent from './components/RefComponent.vue';
import SimpleForm from './components/SimpleForm.vue';
</script>

<template>
  <div id="test">

    <div class="wrapper">
      <!-- <HelloWorld msg="Hello " /> -->
      <!-- <Condition/> -->
      <!-- <Loop/> -->
      <!-- <Home/> -->
      <Home2/>
      <!-- <RefComponent/> -->
      <!-- <SimpleForm/> -->
    </div>
    <!-- <h1>Phone: {{ phone=321 }}</h1> -->
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
<script>
export default{
  name: "App",
  data(){
    console.log("test");
      return {
        msg2: "Cool",
        phone: "123",
      };
    },
  mounted(){
    // alert("test");
    setTimeout(()=>{
      this.msg2="Changed!";
    }, 3000);
  }
};
</script>