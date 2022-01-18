<script lang="ts">
import axios from "axios";

import { onMount } from "svelte";

    import BagNav from "../../components/BagNav.svelte";
    import Footer from "../../components/Footer.svelte";
import type { Iproduct } from "../../Model/application";
import { check_for_session } from "../../Model/browserFunctions";
import Fluidcoins from '@fluidcoins/pay.js';
    let products: Iproduct[] = [];
    let subTotal = 0;
    $: {
        products.forEach((e)=>{
            subTotal = subTotal + e.quantity * e.price;
        })
        subTotal = Number(subTotal.toFixed(6)) ;
        console.log(subTotal);
    }
    onMount(async ()=>{
        let data = await check_for_session(location, false);
      if(data) {
          //retrieve cart from the server
          let data = await axios.get('api/products/cart');
          let res = data.data;
          if(res.status){
              //if some error happens when retrieving  cart
          }
          else {
              //handle server cart here
              console.log(res);
              products = res;
          }
      }
      else {
       if(localStorage.getItem('cart')) {
        products = JSON.parse(localStorage.getItem('cart'));
        products = products;
       } 
       ;
      } ;
    })
    const successMessage = () => {
        alert();
    }
    const errorPay = (e) => {
        alert("error");
        console.log(e);
    }
    const payLoad = (e) => {
        alert('loaded');
        console.log(e);
    }
    const pay = () => {
        alert();
      let fluid = new Fluidcoins({key: 'pk_test_c7349cfd6f1f4babbb8a6e9dc5f23e40', amount: subTotal * 414.50 * 100, 
      email: 'ludike23@gmail.com', onSuccess: successMessage,
       callback_url: 'https://agrify2.herokuapp.com/', onError: errorPay, onLoad: payLoad});
      fluid.open();
    }
</script>
<svelte:head>
    <title>Agrify :: Cart</title>
</svelte:head>

<div id="root">
    <div>
        <BagNav />

        <div class="mainContent">
            <div class="contentWrapper cartPage">
                <div class="noticesWrapper">
                    <div class="header">
                        <h4>Notice</h4>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="icon"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            ><g
                                ><path fill="none" d="M0 0h24v24H0z" /><path
                                    d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                                /></g
                            ></svg
                        >
                    </div>
                </div>
                <h1>Bag 🛍️</h1>
                <p>
                    Not ready to checkout? <a href="/products"
                        >Continue Shopping
                    </a>
                </p>
                <div class="row">
                    <div class="colunmLeft">
                        {#each products as item}
                        <div class="cartContainer">
                          
                           <div class="cartItem">
                            <div class="productImage">
                                <img
                                    src="{item.images.featured_image}"
                                    alt=""
                                />
                            </div>
                            <div class="floatRight">
                                <div class="productTitle">
                                    {item.produce_name} <svg
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
                                    <input type="number" bind:value="{item.quantity}" name="cars" id="cars"
                                        />
                                </div>
                                <div class="row">
                                    <div class="price">${item.price}</div>
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
                                            ><path
                                                fill="none"
                                                d="M0 0h24v24H0z"
                                            /><path
                                                d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z"
                                            /></g
                                        ></svg
                                    >
                                </div>
                            </div>
                        </div>
                          
                        </div>
                        {/each}
                    </div>
                    <div class="colunmRight">
                        <h4>Order Summary</h4>
                        <div class="row">
                            <p>Subtotal</p>
                            <p>${subTotal}</p>
                        </div>
                        <div class="row">
                            <p>Shipping</p>
                            <p class="smallText">Calculated at the next step</p>
                        </div>
                        <div class="row">
                            <p>Total</p>
                            <p>${subTotal}</p>
                        </div>
                        <div class="buttonrow">
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <a on:click="{pay}"
                                ><div  class="buttonNormal">
                                    Continue to Checkout
                                </div></a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</div>
