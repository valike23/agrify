<script>
  let toggle = false;
  const toggleNav = () => {
    toggle = !toggle;
  };
</script>

<div class="header">
  <div class="navContainer">
    <div class="contentWrapper navWrapper">
      <a href="/"><img src="../assets/logo.svg" alt="" class="siteLogo" /></a>
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
          <a href="/about"><p>About</p></a><a href="/agrify-affiliate"
            ><p>Agrify Affliate</p></a
          ><a href="/products"><p>Shop Agrify</p></a>
        </div>
      </div>
      <div class="buttons">
        <a href="/login"><div class="signin">Sign In</div></a><a
          href="/sign-up  "><div class="buttonSmall">Sign Up</div></a
        ><svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          on:click={toggleNav}
          viewBox="0 0 1024 1024"
          class="mobileMenuIcon"
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
              <a href="/about"><p>About</p></a><a href="/agrify-affiliate"
                ><p>Agrify Affliate</p></a
              ><a href="/products"><p>Shop Agrify</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
