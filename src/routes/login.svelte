<script lang="ts">
import axios from "axios";

  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
  import type { Iuser } from "../Model/application";
  import {goto} from '@sapper/app';
import { onMount } from "svelte";
  let user: Iuser = {};
  let textContent = "Sign-in";
  let win: any = {};
  const submit = async () => {
    console.log(user);

   
    let form = new FormData();
    form.append("body", JSON.stringify(user));
    try {
      textContent = "Signing In...";
      win.iziToast.info({
        message: "Signing In...",
        position: "topRight",
        title: "Login",
      });
      let data = await axios.put("api/accounts", form);
      let res = data.data;
      if (res.message != "success") {
       textContent = "Sign-in";
        win.Sweetalert2({
          text: "Email or Password Incorrect",
          
          type: "error",
          title: "Error!!!",
        });
      } else {
        textContent = "Sign-in"
        win
          .Sweetalert2({
            text: "Sign In was successful",
            type: "success",
            title: "OK",
          })
          .then(() => {
            sessionStorage.setItem('user', JSON.stringify(res.data))
            goto("/");
          });
      }
      console.log(res);
    } catch (error) {
      textContent = "Sign-in";
      console.log(error);
      win.Sweetalert2({
        text: "Something went wrong",
        type: "error",
        title: "Error!!!",
      });
    }
  };
  onMount(()=>{
    win = window;
  })
</script>

<svelte:head>
  <title>Agrify :: Login Page</title>
  <meta property="og:title" content="Agrify Login Page" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="assets/logo.svg" />
  <meta property="og:site" content="https://agrify2.herokuapp.com" />
  <meta property="og:url" content="https://agrify2.herokuapp.com/login" />
</svelte:head>
<div id="root">
  <div>
    <Nav />
    <div class="mainContent">
      <form on:submit|preventDefault={submit} class="contentWrapper loginPage">
        <div class="signinContainer">
          <h1>Sign In</h1>
          <div class="spacer" />
          <label for="">Email address</label><input required bind:value="{user.email}" type="email" /><label for=""
            >Password</label
          ><input type="password" required bind:value="{user.password}" placeholder="**********" />
          <div class="passwordReset">Can't remeber your password?</div>
          <div class="footer">
            <div class="">
              <input
                disabled={textContent != "Sign-in"}
                class="buttonSmall"
                id="btn"
                type="submit"
                value={textContent}
                style="text-align: center;"
              />
            </div>
            <div>
              New to Agrify? <span class="textGreen"
                ><a href="/sign-up"> Sign Up </a></span
              >
            </div>
          </div>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</div>
