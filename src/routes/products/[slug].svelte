<script context="module">
  // the (optional) preload function takes a
  // `{ path, params, query }` object and turns it into
  // the data we need to render the page
  export async function preload(page, session) {
    // the `slug` parameter is available because this file
    // is called [slug].svelte
    const { slug } = page.params;

    // `this.fetch` is a wrapper around `fetch` that allows
    // you to make credentialled requests on both
    // server and client
    const res = await this.fetch(`api/products?_id=${slug}`, { method: "PUT" });
    const product = await res.json();

    return { product };
  }
</script>

<script lang="ts">
  import BagNav from "../../components/BagNav.svelte";
  import Footer from "../../components/Footer.svelte";
  import type { Iproduct } from "../../Model/application";

  export let product: Iproduct;
  let quantity = 1;
  
  let reviewStars = 0;
  product.reviews.forEach((e) => {
    reviewStars = (reviewStars + e.stars) as unknown as number;
  });
  reviewStars = reviewStars / product.reviews.length;
  let reviewArray = [];
  for (let index = 0; index < reviewStars; index++) {
    reviewArray.push({});
  }
  console.log(reviewStars);
  let reviewOpen = true;
  const toogleReview = () => {
    console.log("twist", reviewOpen);
    reviewOpen = !reviewOpen;
    reviewOpen = reviewOpen;
  };
  let farmOpen = true;
  const toogleFarm = () => {
    console.log("twist", farmOpen);
    farmOpen = !farmOpen;
    farmOpen = farmOpen;
  };
</script>

<svelte:head>
  <title>{product.produce_name}</title>
  <meta property="og:title" content="{product.produce_name} Page" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="{product.images.featured_image}" />
  <meta property="og:site" content="https://agrify2.herokuapp.com" />
  <meta name="description" content="{product.description}">
  <meta property="og:description" content="{product.description}">
  <meta property="og:url" content="https://agrify2.herokuapp.com/product/{product._id}" />
</svelte:head>
<div id="root">
  <div>
    <BagNav />
    <div class="mainContent">
      <div class="contentWrapper categoryPage">
        <div class="sectionTop">
          <a class="backButton" href="/products">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="40"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                clip-rule="evenodd"
              /><path
                fill-rule="evenodd"
                d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                clip-rule="evenodd"
              /></svg
            >
            <p>Back to Products</p></a
          >
          <div class="categoryWrapper">
            <div class="categoryItem">
              <div class="leftColunm">
                <div class="categoryImg">
                  <img src={product.images.featured_image} alt="" />
                </div>
              </div>
              <div class="rightColunm">
                <div class="categoryTitle">{product.produce_name}</div>
                <div class="categoryDescription">
                  {product.description}
                </div>
                <div class="row">
                  <div class="review">
                    <div class="rating">
                      {#each reviewArray as item}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 1024 1024"
                          class="fillYellow"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                          ><path
                            d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
                          /></svg
                        >
                      {/each}
                    </div>
                    <div>({product.reviews.length} customer(s) review)</div>
                  </div>
                  <div class="imageLink">View Product Images</div>
                </div>
                <div class="imageLightBox">
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
                      d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                    /></svg
                  >
                  <div class="imageSlider">
                    <img
                      src={product.images.featured_image}
                      alt="Product"
                    /><img src={product.images.image_1} alt="Product" />
                  </div>
                </div>
                <div class="row">
                  <div class="price">${product.price}<span>per gram</span></div>
                </div>
                <div class="row">
                  <input type="number" bind:value="{quantity}" class="quantity" />
                </div>
                <div class="buttonRow">
                  <div class="buttonNormal green">Add to Bag</div>
                  <div class="discountPrice" />
                  <a href="/contact-suplier/61097cca701a2600158278f4"
                    ><div class="buttonNormal light">Make Enquiry</div></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sectionBottom">
          <div class="colunmLeft">
            <div class="categoryColunmWrapperInner stickySidebar">
              <div class="categoryInfo">
                <h5>Product Specifications</h5>
                <table>
                  <tbody
                    ><tr
                      ><td class="categoryBuyBy">SKU</td><td
                        class="categoryBuyByInfo">756645</td
                      ></tr
                    ><tr
                      ><td class="categoryBuyBy">Freshness</td><td
                        class="categoryBuyByInfo">Not Available</td
                      ></tr
                    ><tr
                      ><td class="categoryCategory">Category :</td><td
                        class="categoryCategoryInfo">{product.category}</td
                      ></tr
                    ><tr
                      ><td class="categoryBuyBy">Buy by</td><td
                        class="categoryBuyByInfo">pcs, kgs, box, pack</td
                      ></tr
                    ></tbody
                  >
                </table>
              </div>
            </div>
          </div>
          <div class="colunmRight">
            <div class="categoryColunmWrapperInner">
              <div class="categoryDropdownWrapper">
                <div class="categoryDropdownContainer">
                  <div class="categoryFarmsTitle">
                    <h1>Supplying Farms 🚜</h1>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      class:active={farmOpen}
                      on:click={toogleFarm}
                      class="dropdownIcon "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      ><path
                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                      /></svg
                    >
                  </div>
                  <div
                    class:active={farmOpen}
                    on:click={toogleFarm}
                    class="categoryFarmItem "
                  >
                    <div class="notice">* information not avaliable *</div>
                  </div>
                </div>
              </div>
              <div class="categoryDropdownWrapper">
                <div class="categoryDropdownContainer">
                  <div class="categoryFarmsTitle">
                    <h1>Reviews</h1>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      class:active={reviewOpen}
                      on:click={toogleReview}
                      class="dropdownIcon "
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      ><path
                        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                      /></svg
                    >
                  </div>
                  <div class:active={reviewOpen} class="categoryReviewItem ">
                    {#each product.reviews as item}
                      <div>
                        <div class="rating">
                          <div>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 1024 1024"
                              class="fillYellow"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              ><path
                                d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
                              /></svg
                            ><svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 1024 1024"
                              class="fillYellow"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              ><path
                                d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
                              /></svg
                            >
                          </div>
                        </div>
                        <div class="name">{item.name}</div>
                        <div class="reviewTitle">{item.title}</div>
                        <div class="reviewContent">
                          {item.description}
                        </div>
                      </div>
                    {/each}
                    <div class="viewMore">
                      <a href="/reviews">view more</a>
                    </div>
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

<style>
 
  /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
