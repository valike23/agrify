<script>
import Footer from "../../components/Footer.svelte";
import SignedNav from "../../components/SignedNav.svelte";

</script>
<div id="root">
  <div>
  <SignedNav/>
    <div class="mainContent">
      <div class="contentWrapper checkoutPage">
        <div class="paymentContainer">
          <div class="confirmationBox">
            <h4>Thank You Your order has been confirmed</h4>
            <p>✅</p>
            <p>We would start proccessing it, you’d hear from us soon</p>
            <a href="/products"><div class="buttonSmall">Take me Home</div></a>
          </div>
          <img class="rocket" src="./assets/rocket.svg" alt="" />
        </div>
      </div>
    </div>
  <Footer/>
  </div>
</div>
