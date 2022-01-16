<script lang="ts">
import { onMount } from "svelte";

  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
import type { Iuser } from "../Model/application";
import axios from 'axios';
//import Swal from 'sweetalert2';
//import Sweetalert2 from 'sweetalert2';
import {goto} from '@sapper/app';
  let user: Iuser = {};
  let password = '';
  let textContent = 'Create your Account';
  let win: any = {};
  onMount(()=>{
    win = window;
    console.log(win);
  })
const submit = async () => {
    console.log(user);
   
    if(user.password != password ) return win.iziToast.error({message:"password don't match", position: "topRight"}) ;
    let form = new FormData();
    form.append('body', JSON.stringify(user));
    try {
      textContent = "Creating..."
      win.iziToast.info({message:"Signing Up...", position: "topRight", title: "Register"}) ;
     let data = await axios.post('api/accounts', form);
     let res = data.data;
     if(res.status == 'error') {
      textContent = 'Create your Account';
       win.Sweetalert2({text: 'Email already Exist', type: 'error', title: 'Error!!!'});
     }
     else {
      textContent = 'Create your Account';
      win.Sweetalert2({text: 'Sign up was successful', type: 'success', title: 'OK'}).then(()=>{
        goto('login');
      });
     }
     console.log(res);
    } catch (error) {
      textContent = 'Create your Account';
      console.log(error);
      win.Sweetalert2({text: 'Something went wrong', type: 'error', title: 'Error!!!'});
    }

}

</script>
<svelte:head>
  <title>Agrify :: Register Page </title>
  <meta property="og:title" content="Agrify Registration Page" />
<meta property="og:type" content="website" />
<meta property="og:image" content="assets/logo.svg" />
<meta property="og:site" content="https://agrify2.herokuapp.com">
<meta property="og:url" content="https://agrify2.herokuapp.com/sign-up" />
</svelte:head>
<div id="root">
  <div>
    <Nav />
    <div class="mainContent">
      <div class="contentWrapper loginPage">
        <form on:submit|preventDefault="{submit}" class="signinContainer">
          <h1>Sign Up</h1>
          <div class="spacer" />
          <label for="email">Email address</label><input type="email" required bind:value="{user.email}" /><label
            for="password">Password</label
          ><input required type="password" bind:value="{user.password}" placeholder="**********" /><label
            for="confirm password">Confirm Password</label
          ><input required type="password" bind:value="{password}" placeholder="**********" />
          <div class="footer">
            <div class=""> <input disabled={textContent != 'Create your Account'} class="buttonSmall" id="btn" type="submit" value="{textContent}"  style="text-align: center;"/> </div>
           
            <div>
              Already have an account? <a href="/login" class="textGreen"> Sign In</a>
            </div>
            <div class="policy">
              By creating an accont , you agree to the Terms and <a href="/">
                Conditions
              </a>
              and <a href="/">Privacy Policy </a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</div>
<style>
  #btn {
    width: 100%;
    color: white;
  }
  
  .buttonSmall {
    width: 400px;
    height: 50px;
    margin: auto;
    background-color: green;
  }
</style>
