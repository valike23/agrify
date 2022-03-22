<script lang="ts">
import axios from "axios";

import { onMount } from "svelte";
import type { Iuser } from "../Model/application";
let toggle = false;
const toggleNav =()=>{
  toggle = !toggle;
}

  let showDrop = false;
  let toogleDrop = ()=>{
    showDrop = !showDrop;
  }
  let user: Iuser ={};
  onMount(()=>{
     user = JSON.parse(sessionStorage.getItem('user'));

  })
  let signout =async ()=>{
   try {
    let sign = await axios.patch(`api/accounts`);
    if(sign){
      sessionStorage.clear();
      location.href = '/';
      
    }
   } catch (error) {
    sessionStorage.clear();
      location.href = '/';
   }
   

  }
</script>
<div class="header">
  <div class="navContainer">
    <div class="contentWrapper navWrapper">
      <a href="/"><img src="../assets/logo.svg" alt="" /></a>
      <div class="navWrapperInner">
        <div class="searchContainer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            ><path
              fill-rule="evenodd"
              d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
              clip-rule="evenodd"
            /><path
              fill-rule="evenodd"
              d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              clip-rule="evenodd"
            /></svg
          ><input class="search" type="text" placeholder="Search Agrify.." />
        </div>
        <div class="tabs">
          <a href="/products"><p>Explore</p></a><a href="/myitems"
            ><p>Orders</p></a
          ><a href="/products/cart"><p>Bag</p></a>
        </div>
      </div>
      <div class="buttons">
        <div class="User">
          <li>
            <div class="greeting"  on:click="{toogleDrop}">
              Hello {user.userName}<svg
              on:click="{toogleDrop}"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                /></svg
              >
            </div>
           {#if showDrop}
           <ul class="menu">
            <li>
              0x5094...C15CF <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="copyicon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M20,2H10C8.897,2,8,2.897,8,4v4H4c-1.103,0-2,0.897-2,2v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2v-4h4 c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M4,20V10h10l0.002,10H4z M20,14h-4v-4c0-1.103-0.897-2-2-2h-4V4h10V14z"
                /></svg
              >
            </li>
            <li class="walletWidget">
              <div class="walletInfo">
                <div class="img" />
                <div class="infoText">
                  <p>Balance</p>
                  <p class="balance">1.34 ETH</p>
                </div>
              </div>
              <div class="footer">View in wallet</div>
            </li>
            <li><a href="/about">Account</a></li>
            <li><a href="/order">Orders</a></li>
            <li on:click="{signout}">Sign Out</li>
          </ul>
          
           {/if}
          </li>
        </div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          class="mobileMenuIcon"
          on:click={toggleNav}
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
          /></svg
        >
        <div class:active={toggle} class="mobileMenu ">
          <div class="mobileHeader">
            <a href="/"
              ><img class="mobileSiteLogo" src="../assets/logo.svg" alt="" /></a
            ><svg
              on:click={toggleNav}
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="mobileMenuIcon"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
              /></svg
            >
          </div>
          <div class="navMobileWrapperInner">
            <div class="searchContainer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                class="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                  clip-rule="evenodd"
                /><path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                  clip-rule="evenodd"
                /></svg
              ><input
                class="search"
                type="text"
                placeholder="Search Agrify.."
              />
            </div>
            <div class="tabs">
              <a href="/myitems"><p>my orders</p></a><a href="/myitems"
                ><p>Agrify Affliate</p></a
              ><a href="/products"><p>Shop Agrify</p></a>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a on:click="{signout}"><p>Sign Out</p></a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
