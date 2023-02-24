
<template>
    <div class="greetings">
        <h1>Loops:</h1>
        <ul>
            <li v-for="item in technologies" :key="item">{{item}}</li>
        </ul>
        <br>
        <ul>
            <li v-for="user in users" :key="user.id">
                <h4> Name: {{user.name}}</h4>
                <h4> Email: {{user.email}}</h4>
                <h4> Phone: {{user.phone}}</h4>
            </li>
            <br>
        </ul>
    </div>
  </template>
  
  <script>
  export default{
    name: "Hello",
    data(){
        return {
          technologies:["PHP", "Java", "Python", "C++"],
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
        };
      },
      methods:{
        getName(name){
            return name;
          }
      }
  
  };
  </script>
  <style scoped>
  ul{
    list-style-type: lower-alpha;
  }
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
  