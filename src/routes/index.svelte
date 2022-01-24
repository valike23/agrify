<script lang="ts" context="module">
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
		const res = await this.fetch(`api/products`);
		let products: Iproduct[] = await res.json();
		let myProduct: Iproduct[] = [];
		const assign = () =>{
			let i = Math.floor(Math.random() * products.length);
			let temp = products[i];
			let test = false;
			myProduct.forEach((e)=>{
				if(temp.images.featured_image == e.images.featured_image &&
				temp.produce_name == e.produce_name) test = true;
				
			})
			if(test){
				assign()
			}
			else{
				myProduct.push(temp)
			}
		}
		for (let index = 0; index < 4; index++) {
			assign();
			
		}
		products = myProduct;
		console.log(products);


		return { products };
	}
</script>
<script lang="ts">
import Nav from "../components/Nav.svelte";
import type { Iproduct } from "../Model/application";
export let products: Iproduct[];
</script>
<div id="root">
	<div>
	<Nav/>
		<div class="mainContent">
			<div class="fpSection S1">
				<div class="contentWrapper frontpage">
					<h1>The Future of <br>Agriculture is now </h1>
					<div class="callToAction">
						<p>Shop a variaty of organic produce</p><a href="/join">
							<buttton class="buttonNormal white">Shop Agrify</buttton>
						</a>
					</div>
				</div><img class="splashImage" src="https://www.agrify.africa/assets/landing.svg" alt="">
				<div class="animatedTextDivider">
					<div class="scroll-left">
						<div class="text-scroller">
							<div class="scroller-left">
								<div class="text"><span class="icon"><svg stroke="currentColor" fill="currentColor"
											stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M324.52 191.715a97.542 97.542 0 0 0-4.228-4.229L256 22.303l-64.291 165.183a93.225 93.225 0 0 0-4.222 4.224L22.301 255.998l165.179 64.291a97.542 97.542 0 0 0 4.229 4.229L256 489.697l64.284-165.174a95.208 95.208 0 0 0 4.237-4.233l165.178-64.287zM256 297.773c-23.067 0-41.77-18.705-41.77-41.775 0-23.067 18.703-41.767 41.77-41.767 23.068 0 41.767 18.7 41.767 41.767 0 23.07-18.7 41.775-41.767 41.775z">
											</path>
										</svg></span>AN INCLUSIVE WAY TO PARTICIPATE IN THE AGRICULTURAL SECTOR<span
										class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
											viewBox="0 0 512 512" height="1em" width="1em"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M324.52 191.715a97.542 97.542 0 0 0-4.228-4.229L256 22.303l-64.291 165.183a93.225 93.225 0 0 0-4.222 4.224L22.301 255.998l165.179 64.291a97.542 97.542 0 0 0 4.229 4.229L256 489.697l64.284-165.174a95.208 95.208 0 0 0 4.237-4.233l165.178-64.287zM256 297.773c-23.067 0-41.77-18.705-41.77-41.775 0-23.067 18.703-41.767 41.77-41.767 23.068 0 41.767 18.7 41.767 41.767 0 23.07-18.7 41.775-41.767 41.775z">
											</path>
										</svg></span>THE AGRICULTURAL SECTOR<span class="icon"><svg
											stroke="currentColor" fill="currentColor" stroke-width="0"
											viewBox="0 0 512 512" height="1em" width="1em"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M324.52 191.715a97.542 97.542 0 0 0-4.228-4.229L256 22.303l-64.291 165.183a93.225 93.225 0 0 0-4.222 4.224L22.301 255.998l165.179 64.291a97.542 97.542 0 0 0 4.229 4.229L256 489.697l64.284-165.174a95.208 95.208 0 0 0 4.237-4.233l165.178-64.287zM256 297.773c-23.067 0-41.77-18.705-41.77-41.775 0-23.067 18.703-41.767 41.77-41.767 23.068 0 41.767 18.7 41.767 41.767 0 23.07-18.7 41.775-41.767 41.775z">
											</path>
										</svg></span>AN INCLUSIVE WAY TO PARTICIPATE IN THE AGRICULTURAL SECTOR
								</div>
							</div>
							<div class="scroller-right">
								<div class="text"><span class="icon"><svg stroke="currentColor"
											fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
											width="1em" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M324.52 191.715a97.542 97.542 0 0 0-4.228-4.229L256 22.303l-64.291 165.183a93.225 93.225 0 0 0-4.222 4.224L22.301 255.998l165.179 64.291a97.542 97.542 0 0 0 4.229 4.229L256 489.697l64.284-165.174a95.208 95.208 0 0 0 4.237-4.233l165.178-64.287zM256 297.773c-23.067 0-41.77-18.705-41.77-41.775 0-23.067 18.703-41.767 41.77-41.767 23.068 0 41.767 18.7 41.767 41.767 0 23.07-18.7 41.775-41.767 41.775z">
											</path>
										</svg></span>AN INCLUSIVE WAY TO PARTICIPATE IN THE AGRICULTURAL SECTOR<span
										class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
											viewBox="0 0 512 512" height="1em" width="1em"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M324.52 191.715a97.542 97.542 0 0 0-4.228-4.229L256 22.303l-64.291 165.183a93.225 93.225 0 0 0-4.222 4.224L22.301 255.998l165.179 64.291a97.542 97.542 0 0 0 4.229 4.229L256 489.697l64.284-165.174a95.208 95.208 0 0 0 4.237-4.233l165.178-64.287zM256 297.773c-23.067 0-41.77-18.705-41.77-41.775 0-23.067 18.703-41.767 41.77-41.767 23.068 0 41.767 18.7 41.767 41.767 0 23.07-18.7 41.775-41.767 41.775z">
											</path>
										</svg></span>THE AGRICULTURAL SECTOR<span class="icon"><svg
											stroke="currentColor" fill="currentColor" stroke-width="0"
											viewBox="0 0 512 512" height="1em" width="1em"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M324.52 191.715a97.542 97.542 0 0 0-4.228-4.229L256 22.303l-64.291 165.183a93.225 93.225 0 0 0-4.222 4.224L22.301 255.998l165.179 64.291a97.542 97.542 0 0 0 4.229 4.229L256 489.697l64.284-165.174a95.208 95.208 0 0 0 4.237-4.233l165.178-64.287zM256 297.773c-23.067 0-41.77-18.705-41.77-41.775 0-23.067 18.703-41.767 41.77-41.767 23.068 0 41.767 18.7 41.767 41.767 0 23.07-18.7 41.775-41.767 41.775z">
											</path>
										</svg></span>AN INCLUSIVE WAY TO PARTICIPATE IN THE AGRICULTURAL SECTOR
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="fpSection S1b">
				<div class="contentWrapper frontpage">
					<h1><span class="fillYellow">What</span> is Agrify?</h1>
					<p>Agrify is the fastest way to buy and sell organic agric produce from Africa. We employ
						decentralised technology to make international trade safe, secure and seamless. </p>
					<div class="trendingProducts">
						<h5>Trending Products</h5>
						<div class="productWrapper">
							<div class="products colunm4">
								<div class="produceItemWrapper"><a
										href="/products/{products[0]._id}">
										<div class="produceItem">
											<div class="produceImg"><img
													src="{products[0].images.featured_image}"
													alt=""><svg xmlns="http://www.w3.org/2000/svg" focusable="false"
													class="produceIcon" width="1em" height="1em"
													preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
													style="transform: rotate(360deg); vertical-align: -0.125em;">
													<path
														d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05z"
														fill="currentColor"></path>
												</svg></div>
											<div class="produceTitle"> {products[0].produce_name}</div>
											<div class="produceDescription">{products[0].description}
											</div>
											<div class="producePrice">$ {products[0].price} <span>per gram</span></div>
										</div>
									</a></div>
								<div class="produceItemWrapper"><a 
										href="/products/{products[1]._id}">
										<div class="produceItem">
											<div class="produceImg"><img
													src="{products[1].images.featured_image}"
													alt=""><svg xmlns="http://www.w3.org/2000/svg" focusable="false"
													class="produceIcon" width="1em" height="1em"
													preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
													style="transform: rotate(360deg); vertical-align: -0.125em;">
													<path
														d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05z"
														fill="currentColor"></path>
												</svg></div>
											<div class="produceTitle">{products[1].produce_name} </div>
											<div class="produceDescription">{products[1].description}
											</div>
											<div class="producePrice">$ {products[1].price}<span>per gram</span></div>
										</div>
									</a></div>
								<div class="produceItemWrapper"><a
										href="/products/{products[2]._id}">
										<div class="produceItem">
											<div class="produceImg"><img
													src="{products[2].images.featured_image}"
													alt=""><svg xmlns="http://www.w3.org/2000/svg" focusable="false"
													class="produceIcon" width="1em" height="1em"
													preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
													style="transform: rotate(360deg); vertical-align: -0.125em;">
													<path
														d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05z"
														fill="currentColor"></path>
												</svg></div>
											<div class="produceTitle">{products[2].produce_name}</div>
											<div class="produceDescription">{products[2].description}
											</div>
											<div class="producePrice">$ {products[2].price}<span>per gram</span></div>
										</div>
									</a></div>
								<div class="produceItemWrapper"><a 
										href="/products/{products[3]._id}">
										<div class="produceItem">
											<div class="produceImg"><img
													src="{products[3].images.featured_image}"
													alt=""><svg xmlns="http://www.w3.org/2000/svg" focusable="false"
													class="produceIcon" width="1em" height="1em"
													preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"
													style="transform: rotate(360deg); vertical-align: -0.125em;">
													<path
														d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05z"
														fill="currentColor"></path>
												</svg></div>
											<div class="produceTitle">{products[3].produce_name} </div>
											<div class="produceDescription">{products[3].description}
											</div>
											<div class="producePrice">$ {products[3].price}<span>per gram</span></div>
										</div>
									</a></div>
							</div>
						</div>
					</div><a href="/products">
						<buttton class="buttonNormal green">See all Produce</buttton>
					</a>
				</div>
			</div>
			<div class="fpSection S2">
				<div class="contentWrapper frontpage">
					<h1>Sourced from the best farms </h1>
					<p>All produce are sourced from vetted and certified suppliers, so you can trust that you’re
						getting the cream of the crops. If you’d like to sell your produce on Agrify, you can get in
						touch with us.</p><img class="splashImage" src="https://www.agrify.africa/assets/landing2.svg" alt="">
				</div>
			</div>
			<div class="fpSection S3">
				<div class="contentWrapper frontpage">
					<h1>Send and Receive payments in fiat or crypto </h1>
					<p>We use crypto to ensure that payments are processed and delivered speedily. You can then
						decide to convert your payment to a cryptocurrency or fiat currency of your choice.</p><img
						class="splashImage" src="https://www.agrify.africa/assets/landing3.svg" alt="">
				</div>
			</div>
			<div class="fpSection S4">
				<div class="contentWrapper frontpage">
					<div class="text">
						<h1>Become a local partner, with or without a farm</h1>
						<p>With 65% of the worlds arable land, the destiny of African prosperity is rooted in
							Agriculture. Our mission is to vastly improve the likelihood of African youth to engage
							with Agriculture, by employing innovative technology like blockchain and gaming to make
							it more engaging, entertaining and interesting.</p>
						<div class="buttonLarge buttonWhite" href="#section">Agrify Affliate</div>
					</div><img class="splashImage" src="https://www.agrify.africa/assets/landing4.svg" alt="">
				</div>
			</div>
			<div class="fpSection S5">
				<div class="contentWrapper frontpage">
					<h1>Get started in 3 easy steps</h1>
					<div class="step-list">
						<ul>
							<li><span class="list-number">1</span> Search for produce</li>
							<li><span class="list-number">2</span> Pay into supplier’s secure wallet</li>
							<li><span class="list-number">3</span> Receive produce :)</li>
						</ul>
					</div>
					<div class="box1"></div>
					<div class="box2"></div><img class="splashImage" src="https://www.agrify.africa/assets/landing5.svg" alt="">
				</div>
			</div>
			<div class="fpSection S6">
				<div class="contentWrapper frontpage">
					<h3>We’re on a mission to boost exports by connecting <br> <span class="textBlack">certified
							Agric product and service providers in Africa,</span><br> with the World.</h3><img
						class="splashImage" src="https://www.agrify.africa/assets/landing6.svg" alt="">
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="footerContainer">
				<div class="contentWrapper footerWrapper">
					<div class="footerLogo"><img src="https://www.agrify.africa/assets/logo.svg" alt=""></div>
					<div class="colunm 1">
						<h5 class="textGreen">Products</h5><a class="menuItem" href="/">
							<p>Agrify</p>
						</a><a class="menuItem" href="/agrify-affiliate">
							<p>Agrify Affiliate</p>
						</a>
					</div>
					<div class="colunm 2">
						<h5 class="textGreen">Company</h5><a class="menuItem" href="/about">
							<p>About</p>
						</a><a class="menuItem" href="">
							<p>Privacy Policy</p>
						</a><a class="menuItem" href="">
							<p>Terms and Services</p>
						</a>
					</div>
					<div class="colunm 3">
						<h5 class="textGreen">Support</h5><a class="menuItem" href="/faq">
							<p>How does it work</p>
						</a><a class="menuItem" href="">
							<p>Contact Us</p>
						</a>
					</div>
					<div class="colunm 4">
						<h5 class="textGreen">Follow Us</h5><a class="menuItem" href="">
							<p>Facebook</p>
						</a><a class="menuItem" href="">
							<p>Twitter</p>
						</a><a class="menuItem" href="">
							<p>Instagram</p>
						</a>
					</div>
				</div>
				<p class="copywright">Copyright © 2021. Agrify Africa. All rights reserved.</p>
			</div>
		</div>
	</div>
</div>