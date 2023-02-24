<template>
<h1>Simple Form</h1>

Data: {{ form }} <br>
<ul v-if="errors.length">
    Errors: {{ errors.length }} <br>
    <li v-for="error in errors" v-bind:key="error">
        <h4> {{error}} is not a valid</h4>
    </li>
    <br>
</ul>
<form action="">
<label for="email">Email : </label>
<input type="text" id="email" name="email" v-model="form.email" placeholder="Enter email ..."> 
<br><br>
<label for="password">Password : </label>
<input type="password" id="password" name="password"  v-model="form.password" placeholder="Enter password ..."> 
<br><br>
<label for="country">Country : </label>
<select name="country" id="country" v-model="form.country">
    <option value="Bangladesh">Bangladesh</option>
    <option value="India">India</option>
    <option value="USA">USA</option>
</select>
<br><br>
<h4>Gender</h4>

<input type="radio" id="male" name="gender" value="Male"  v-model="form.gender">&nbsp; <label for="male">Male </label> &nbsp;  &nbsp;
<input type="radio" id="female" name="gender" value="Female" v-model="form.gender">&nbsp;  <label for="female">Female </label>&nbsp; 
<br><br>
<h3>Tecnologies</h3>
<label for="laravel">Laravel</label>&nbsp;
<input type="checkbox" value="laravel" id="laravel" name="laravel" v-model="form.technologies">   <br> 
<label for="django">Django</label>&nbsp;
<input type="checkbox" value="django" id="django" name="django" v-model="form.technologies">    <br> 
<label for="vue">Vue Js</label> &nbsp;
<input type="checkbox" value="vue" id="vue" name="vue" v-model="form.technologies">    <br> 
<label for="git">Git</label>&nbsp;
<input type="checkbox" value="git" id="git" name="git" v-model="form.technologies">   <br> 
<label for="HTML">HTML</label>&nbsp;
<input type="checkbox" value="HTML" id="HTML" name="HTML" v-model="form.technologies">   <br> 

<br><br>

<button type="button" v-on:click="login">signup</button>
</form>
</template>

    
<script>

export default {
    name: "Simple Form",
    data() {
        return {
            form: {
                email: "",
                password: "",
                country: "",
                gender : "",
                technologies : []
            },
            errors:[]

        }
    },
    methods: {
        login() {
            this.errors = [];
            for(const key in this.form){
                if(this.form[key] ==="" || this.form[key].length===0)
                this.errors.push(key);
            }
            if(this.errors.length===0){
                alert("Ok!");
            }
            console.warn(this.form, this.errors);
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
