<script>
import Footer from "../components/Footer.svelte";
import SignedNav from "../components/SignedNav.svelte";


</script>


<div id="root">
  <div>
   <SignedNav/>
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
              <li>All. </li>
              <li>Completed. </li>
              <li>Pending. </li>
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
