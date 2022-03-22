<script>
import Footer from "../../components/Footer.svelte";


</script>


<div id="root">
  <div>
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
              ><input
                class="search"
                type="text"
                placeholder="Search Agrify.."
              />
            </div>
            <div class="tabs">
              <a href="/products"><p>Explore</p></a><a href="/myitems"
                ><p>Orders</p></a
              ><a href="/cart"><p>Bag</p></a>
            </div>
          </div>
          <div class="buttons">
            <div class="User">
              <li>
                <div class="greeting">
                  Hello User<svg
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
                  <li>Sign Out</li>
                </ul>
              </li>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="mobileMenuIcon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
              /></svg
            >
          </div>
        </div>
      </div>
    </div>
    <div class="mainContent">
      <div class="contentWrapper myItemsPage">
        <div class="noticesWrapper">
          <div class="currency">
            <p class="active">USD</p>
            <p>GBP</p>
            <p>ETH</p>
            <p>BTC</p>
          </div>
        </div>
        <div class="productWrapper">
          <h3 class="title">Orders 📦</h3>
          <div class="ordersHeading">
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
            <ul class="Tabs">
              <li>All</li>
              <li>Completed</li>
              <li>Pending</li>
              <li>Cancelled</li>
            </ul>
          </div>
          <div class="orderItem">
            <div class="orderHeading">
              <table>
                <tr
                  ><td class="colHeading">Order Placed</td><td
                    class="colHeading">Total</td
                  ><td class="colHeading">Shipped to</td><td class="colHeading"
                    >Order no 4252-2627830Y7383-2I293P-8EOEO</td
                  ><td class="colHeading">Order Status</td></tr
                ><tr
                  ><td>Feb 27, 2020</td><td>$400</td><td
                    >42 Freemont street , Los Angeles
                  </td><td><a href="/order-details">View order details</a></td
                  ><td><div class="status">Out For Delivery</div></td></tr
                >
              </table>
            </div>
            <div class="orderBody">
              <div class="left">
                <img
                  class="img"
                  src="https://res.cloudinary.com/isaacoduh/image/upload/v1628011053/agrify/cashew-nuts.svg"
                  alt=""
                />
              </div>
              <div class="right">
                <div class="title">Cocoa</div>
                <div class="mobileViewLink">
                  <a href="/order-details"> View order details </a>
                </div>
                <div class="footer">
                  <div class="buttonNormal green">Buy Again</div>
                  <p class="textYellow">Oder Feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Footer/>
  </div>
</div>
