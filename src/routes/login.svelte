<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<svelte:head>
  <title>Agrify :: Login Page </title>
  <meta property="og:title" content="Agrify Login Page" />
<meta property="og:type" content="website" />
<meta property="og:image" content="assets/logo.svg" />
<meta property="og:site" content="https://agrify2.herokuapp.com">
<meta property="og:url" content="https://agrify2.herokuapp.com/login" />
</svelte:head>
<div id="root">
  <div>
    <Nav />
    <div class="mainContent">
      <div class="contentWrapper loginPage">
        <div class="signinContainer">
          <h1>Sign In</h1>
          <div class="spacer" />
          <label for="">Email address</label><input type="email" /><label for=""
            >Password</label
          ><input type="password" placeholder="**********" />
          <div class="passwordReset">Can't remeber your password?</div>
          <div class="footer">
            <div class="buttonSmall">Sign-in to your account</div>
            <div>
              New to Agrify? <span class="textGreen"
                ><a href="/sign-up"> Sign Up </a></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</div>
