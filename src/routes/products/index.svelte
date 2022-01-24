<script context="module">
	// the (optional) preload function takes a
	// `{ path, params, query }` object and turns it into
	// the data we need to render the page
	export async function preload(page, session) {
		
		const res = await this.fetch(`api/products`);
		const products = await res.json();

		return { products };
	}
</script>

<script lang="ts">
import Nav from "../../components/Nav.svelte";
import type { Iproduct } from "../../Model/application";
export let products: Iproduct[] ;
let activeProducts = products;
console.log(products);
let categories = ['All','Herbs and Spices','Roots','Fruits','Seeds','Nuts'];
let activeCategory = categories[0];
let currencies = [{
  name: 'USD', symbol: '$',rate: 1},
{name: 'GBP', symbol: '£',rate: 0.729753},
{name: 'ETH', symbol: 'ETH',rate: 0.000309405940594},
{name: 'BTC', symbol: '₿',rate: 0.0000236739}];
let activeCurrency = currencies[0];
const switchCurrency = (currency) => {
  activeCurrency = currency;
}
const switchCategory = (category) => {
  activeCategory = category;
  if(category == 'All'){
    console.log(category);
    activeProducts = products;
  }
  else{

 activeProducts = products.filter((e)=>{return e.category == category});
  }
 activeProducts = activeProducts;
}
</script>
<svelte:head>
  <title>All Products</title>
</svelte:head>
<div id="root">
    <div>
    <Nav/>
        <div class="mainContent">
            <div class="contentWrapper productsPage">
              <div class="noticesWrapper">
                <div class="currency">
                  {#each currencies as currency}
                  <p on:click="{()=>{switchCurrency(currency)}}" class:active={activeCurrency.name == currency.name}>{currency.name}</p>
                  {/each}
               
                </div>
                <div class="requestProduce">
                  <p>Can't find what you need?</p>
                  <a rel="external" href="/products/request"><button>Request for Produce</button></a>
                </div>
              </div>
              <div class="filter">
                {#each categories as item}
                <p on:click="{()=>{switchCategory(item)}}" class:active={item == activeCategory}>{item}</p>
                {/each}
                
              </div>
              <div class="productWrapper">
                <div class="products colunm4">
                {#each activeProducts as product}
                <div class="produceItemWrapper">
                    <a rel="external"  href="{'/products/' + product._id }"
                      ><div class="produceItem">
                        <div class="produceImg">
                          <img
                            src="{product.images.featured_image}"
                            alt=""
                          /><svg
                            xmlns="http://www.w3.org/2000/svg"
                            focusable="false"
                            class="produceIcon"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            style="transform: rotate(360deg); vertical-align: -0.125em;"
                            ><path
                              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05z"
                              fill="currentColor"
                            /></svg
                          >
                        </div>
                        <div class="produceTitle">{product.produce_name}</div>
                        <div class="produceDescription">
                          {product.description}
                        </div>
                        <div class="producePrice"> {activeCurrency.symbol} {(product.price * activeCurrency.rate).toFixed(3)} <span>per gram</span></div>
                      </div></a
                    >
                  </div>
                {/each}
                 
                </div>
                <div class="productFooter">
                  <p>
                    Can’t find your desired produce? <br /> You can
                    <span> <a rel="external" href="products/request">Request for produce</a>  </span>
                    here
                    <span class="icon"
                      ><svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        /></svg
                      ></span
                    >
                  </p>
                  <div class="Newsletter">
                    <p class="subheading">Join the Agrify Community</p>
                    <h4>Newsletter</h4>
                    <p>
                      Stay up to date with new products, promotions, and limited offers
                    </p>
                    <form action="">
                      <input type="text" placeholder="Your email address" /><input
                        type="submit"
                        value="I'm In"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
</div>
