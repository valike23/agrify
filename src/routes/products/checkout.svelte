<script lang="ts">
  import axios from "axios";
import {goto} from "@sapper/app";
  import { onMount } from "svelte";
  import type Stripe from 'stripe';
  import {loadStripe} from '@stripe/stripe-js';
  import Footer from "../../components/Footer.svelte";
  import type { Iproduct } from "../../Model/application";
  import { check_for_session, handleNotification } from "../../Model/browserFunctions";
  import Fluidcoins from "@fluidcoins/pay.js";
  import SignedNav from "../../components/SignedNav.svelte";
  import Nav from "../../components/Nav.svelte";
  let products: Iproduct[] = [];
  let subTotal = 0;
  let isLooggedin = false;
  let view = 'accounts';
  let paymentMethod = '';
  $: {
    products.forEach((e) => {
      subTotal = subTotal + e.quantity * e.price;
    });
    subTotal = Number(subTotal.toFixed(6));
    console.log(subTotal);
  }
  onMount(async () => {
    let data = sessionStorage.getItem("user");
    if (data) {
      isLooggedin = true;
      view = 'shipping';
     let rec = await check_for_session(location, false, JSON.parse(data));
      console.log(rec);
     
    } else {
      if (localStorage.getItem("cart")) {
        products = JSON.parse(localStorage.getItem("cart"));
        products = products;
      }
    }
  });
  const successMessage = () => {
      
    alert('successful');
    goto('/myitems');
  };
  const errorPay = (e) => {
    alert("error");
    console.log(e);
  };
  const payLoad = (e) => {
    console.log(e);

    alert('successful');
    goto('/order-confirmed');
  };
  const switchTab =(tab: string) =>{
    view = tab;
  }
  const cryptoPay = (amount: number) => {
    let fluid = new Fluidcoins({
      key: "pk_test_c7349cfd6f1f4babbb8a6e9dc5f23e40",
      amount: amount * 414.5 * 100,
      email: "ludike23@gmail.com",
      onSuccess: successMessage,
      callback_url: "https://agrify2.herokuapp.com/",
      onError: errorPay,
      onLoad: payLoad,
    });
    fluid.open();
  };
  const stripePay = async (amount: number) => {

const stripe = await loadStripe('pk_test_51Kg3K4BfVFkkKkMVzAiL40UUSbkO7YEWrbYWWgFsmEd1BdzLeMRgfarlqRG5WUAtRli4yRAK58U3ar3nQnIjNfgQ00JvJXoBOX');
let loadIntentResponse = await axios.put('api/products/stripe',{amount: 200});
let paymentIntent: Stripe.PaymentIntent = loadIntentResponse.data;

console.log(paymentIntent);
const client =paymentIntent.client_secret;
const appearance = {
    theme: 'stripe',
  };
  let opts: any = {
    appearance,
    clientSecret: client
  }
let elements = stripe.elements( opts);
//stripe.retrievePaymentIntent()
    
  const paymentElement = elements.create("payment");
  paymentElement.mount("#payment-element");
  };
  const managePay =() =>{
      console.log(paymentMethod);
    if(paymentMethod == ''){
        handleNotification('you have to choose a payment method to continue', window, 'error', 'payment error');
    }
    else if(paymentMethod == 'stripe'){
        handleNotification('payment screen for stripe is loading', window,'success','loading');
       
        stripePay(500);
    }
    else if(paymentMethod == 'crypto'){
        handleNotification('payment screen is loading', window,'success','loading');
        cryptoPay(500);
    }
  }
</script>

<svelte:head>
  <title>Agrify :: Cart</title>
</svelte:head>
<form id="payment-form">
    <div id="payment-element">
      <!--Stripe.js injects the Payment Element-->
    </div>
    <button id="submit">
      <div class="spinner hidden" id="spinner"></div>
      <span id="button-text">Pay now</span>
    </button>
    <div id="payment-message" class="hidden"></div>
  </form>
<div id="root">
  <div>
    {#if isLooggedin}
      <SignedNav />
    {:else}
      <Nav />
    {/if}

    <div class="mainContent">
      <div class="contentWrapper checkoutPage">
        <h1>Checkout 🛒</h1>
        <div class="row">
          <div class="colunmLeft">
            <ul class="tabMenu">
             {#if !isLooggedin}
             <li on:click={()=>{
                switchTab('accounts')
               }} class:active={view == 'accounts'}>Account</li>
              <span class="divider"
                ><div class="line" />
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  class="icon active"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                  /></svg
                >
                <div class="line" /></span
              >
             {/if}
              <li on:click={()=>{
                switchTab('shipping')
               }} class:active={view == 'shipping'}>Shipping</li>
              <span class="divider"
                ><div class="line" />
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  class="icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                  /></svg
                >
                <div class="line" /></span
              >
              <li on:click={()=>{
               switchTab('payment')
              }} class:active={view == 'payment'}>Payment</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="colunmLeft ">
            <div class:active={view == 'accounts'} class="stickySidebar account">
              <form action="">
                <p class="formHeading">Account details</p>
                <label for="checkout-login-email">Email address</label><input
                  type="email"
                  id="checkout-login-email"
                  placeholder="myemail@email.com"
                /><label for="checkout-login-password">Password</label><input
                  type="password"
                  id="checkout-login-password"
                  placeholder="********"
                />
                <div class="buttonRow">
                  <div class="buttonNormal outline">Sing Up</div>
                  <div class="buttonNormal">Sing In</div>
                </div>
              </form>
            </div>
            <div class:active={view == 'shipping'} class="stickySidebar shipping ">
              <form action="">
                <p class="formHeading">Shipping details</p>
                <div class="row">
                  <label for="shipping-saved-address">use saved address</label
                  ><select name="cars" id="cars"
                    ><option value="volvo">123, Electric avenue</option><option
                      value="saab">Saab</option
                    ><option value="mercedes">Mercedes</option><option
                      value="audi">Audi</option
                    ></select
                  >
                </div>
                <label for="shipping-address">Address</label><input
                  type="text"
                  id="shipping-address"
                /><input type="text" id="shipping-address-2" /><label
                  for="shipping-address">Select Shipping</label
                >
                <div class="row">
                  <select name="" id=""
                    ><option value="volvo">Free Shipping</option><option
                      value="saab">Saab</option
                    ><option value="mercedes">Mercedes</option><option
                      value="audi">Audi</option
                    ></select
                  >
                </div>
                <div class="buttonRow">
                  <div>cancel order</div>
                  <a on:click="{()=>{ switchTab('payment')}}"
                    ><div class="buttonNormal PL">Proceed to Payment</div></a
                  >
                </div>
              </form>
            </div>
            <div class:active={view == 'payment'} class="stickySidebar payment">
              <form>
                <p class="formHeading">Payment</p>
                <input bind:group="{paymentMethod}" value="crypto" type="radio" id="crypto" /><label
                  class="paymentOption"
                  for="crypto"
                  ><div class="radioButton"><div class="circle" /></div>
                  <div class="info">
                    <h4>Pay with crypto</h4>
                    <p>
                      We have partnered with Fluicoins to make payments quick,
                      and easy.
                    </p>
                  </div></label
                ><input bind:group="{paymentMethod}" value="stripe" type="radio" id="card" /><label
                  class="paymentOption"
                  for="card"
                  ><div class="radioButton"><div class="circle" /></div>
                  <div class="info">
                    <h4>Pay with card</h4>
                    <p>pay using your credit or debit card</p>
                  </div></label
                >
                <div class="buttonRow">
                  <div>Cancel Order</div>
                
                  <a disabled="{paymentMethod == ''}" class="link" on:click="{managePay}"
                    ><div class="buttonNormal PL">Pay</div></a
                  >
                </div>
              </form>
            </div>
          </div>
          <div class="colunmRight">
            <h4>Order Summary</h4>
            <div class="cartContainer">
              <div class="cartItem">
                <div class="productImage">
                  <img
                    src="https://res.cloudinary.com/isaacoduh/image/upload/v1628011053/agrify/cashew-nuts.svg"
                    alt=""
                  />
                </div>
                <div class="floatRight">
                  <div class="productTitle">
                    <h4>Cashew Nuts</h4>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      ><path
                        d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"
                      /></svg
                    >
                  </div>
                  <div class="productQuantity">
                    <select name="cars" id="cars"
                      ><option value="2341"> 2341 | Pcs </option><option
                        value="2342"
                      >
                        2342 | Pcs
                      </option></select
                    >
                  </div>
                  <div class="row">
                    <div class="price">$18.3</div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="trashIcon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      ><g
                        ><path fill="none" d="M0 0h24v24H0z" /><path
                          d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z"
                        /></g
                      ></svg
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</div>
