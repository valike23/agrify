<script>
  import Footer from "../../components/Footer.svelte";
  import Nav from "../../components/Nav.svelte";
</script>

<div id="root">
  <div>
    <Nav />
    <div class="mainContent">
      <div class="contentWrapper requestPage">
        <h4>Request for Produce</h4>
        <p>
          If you can’t find your required produce, tell Agrify and we would
          help you out.
        </p>
        <form>
          <label for="">Name of Produce</label><input
            type="Text"
            id="businessName"
            placeholder="John Doe Agriculture"
          /><label for="">Category</label><select id="inputState"
            ><option>Select a category...</option><option>...</option></select
          ><label for="">Detailed description</label><input
            type="text"
            id="description"
          />
          <div class="row">
            <button type="submit" class="buttonNormal">Send Request</button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</div>
