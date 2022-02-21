<script lang="ts">
  import Footer from "../components/Footer.svelte";
import Nav from "../components/Nav.svelte";
</script>

<div id="root">
  <div>
    <Nav />
    <div class="mainContent">
      <div class="formSectionWrapper">
        <div class="contentWrapper">
          <div class="formSectionInnerWrapper">
            <div class="formHeader">
              <h2>
                Sign up as an <span class="primaryColor">Agrify Agric</span> Product
                or Service Partner
              </h2>
            </div>
            <form>
              <div class="row">
                <div class="col-md-12">
                  <label for="">Business Name</label><input
                    type="Text"
                    id="businessName"
                    placeholder="John Doe Agriculture"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label for="">Email</label><input
                    type="email"
                    id="Email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label for="">Contact Number</label><input
                    type="tel"
                    id="Number"
                  />
                </div>
                <div class="col-md-6">
                  <label for="">State</label><select id="inputState"
                    ><option>Business Location...</option><option>...</option
                    ></select
                  >
                </div>
              </div>
              <div>
                <div class="row">
                  <div class="produceSectionHeader">
                    <h4>Produce</h4>
                    <div class="buttons">
                      <div class="buttonSmall">
                        <p>Add Produce</p>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 12 16"
                          class="button"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                          ><path
                            fill-rule="evenodd"
                            d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"
                          /></svg
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="formProduceSection">
                  <div class="row">
                    <div class="col-md-12">
                      <label for="">Product Available for export</label><input
                        type="text"
                        name="produceName"
                        placeholder="Produce / Live Stock Provided"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label for="">Monthly Supply</label><input
                        type="text"
                        name="supply"
                        placeholder="Supply Timeline"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div />
              <div class="button row">
                <div class="col-md-3">
                  <button type="submit" class="btn">Join Agrify</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</div>
