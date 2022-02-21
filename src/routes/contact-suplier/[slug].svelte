
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
      console.log(slug);
      const res = await this.fetch(`api/products?_id=${slug}`, { method: "PUT" });
      const product = await res.json();
  
      return { product };
    }
  </script>
  

<script lang="ts">
  import Nav from "../../components/Nav.svelte";
import type { Iproduct } from "../../Model/application";
  export let  product:Iproduct;
</script>



<div id="root">
  <div>
    <Nav />
    <div class="mainContent">
      <div class="contentWrapper contactSupplierPage">
        <h4>Contact Supplier</h4>
        <div class="contentInnerWrraper">
          <div class="contentInner">
            <div class="item">
              <div class="image">
                <img
                  src="{product.images.featured_image}"
                  alt=""
                />
              </div>
              <div class="content">
                <h4>{product.produce_name}</h4>
                <p>
                 {product.description}
                </p>
                <a class="link" href="/products/{product._id}">View Product</a>
              </div>
            </div>
            <label for="subject">Subject</label><input
              type="text"
              id="subject"
            />
            <div class="row">
              <label for="message">Message</label>
              <div class="help">
                help <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    d="M12 6C9.831 6 8.066 7.765 8.066 9.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626-.255.207-.496.404-.691.599C11.029 13.156 11 14.215 11 14.333V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182C15.934 7.765 14.169 6 12 6zM11 16H13V18H11z"
                  /><path
                    d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"
                  /></svg
                >
              </div>
              <div class="helpBox">
                <div class="title">How to post Inquiries:</div>
                <ul>
                  <li>Introduce yourself.</li>
                  <li>Indicate your requirements.</li>
                  <li>
                    Provide as much information as possible to receive a
                    detailed response. For example Quantity and Size.
                  </li>
                  <li>Ask for any other information you find appropriate.</li>
                  <li>
                    If you still need any help, you can <a
                      class="link"
                      href="/"
                    >
                      Contact us
                    </a> for assistance.
                  </li>
                </ul>
              </div>
            </div>
            <textarea type="textarea" id="message" />
            <div class="policy">Agrify’s contact policy</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
