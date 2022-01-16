<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<div id="root">
  <div>
    <Nav />
    <div class="mainContent">
      <div class="contentWrapper aboutPage">
        <div><img class="splashImage" src="assets/about.svg" alt="" /></div>
        <div class="paragraph">
          <h3>**The Situation**</h3>
          <p>
            With 65% of the world’s 🌐 arable land Africa has the potential to
            feed the world. However, Agriculture currently only contributes 1/4
            to Africa’s GDP. With 19 being the average age in Africa, how do we
            make Agriculture "cool" and appealing to its young population to
            ensure it delivers on its potential to reverse the $47bn imports of
            food into Africa?
          </p>
        </div>
        <div class="paragraph">
          <h3>**Our Solution**</h3>
          <p>
            Our platform rewards African youth for produce export with what they
            love the most, Crypto. We introduce a faster ⚡ way to get paid,
            which reduces time to receive funds and increases trade. Making a
            sector typically viewed as "unsexy" attractive to youth, reversing
            the $47bn food trade deficit in the long run. This is the future of
            the African Agric industry projected to reach $1trn by 2030 (world
            bank).
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</div>
