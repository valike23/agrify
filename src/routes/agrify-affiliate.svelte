<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<div id="root">
  <div>
    <Nav />
    <div class="mainContent">
      <div class="contentWrapper affliatePage">
        <div class="spacer" />
        <div class="Title">
          <img src="assets/agrify-affiliate/img-1.png" alt="" />
          <h1>Earn forex exporting agric produce Internationally</h1>
        </div>
        <p>
          With 65% of the worlds arable land, the destiny of African prosperity
          is rooted in Agriculture. Our mission is to vastly improve the
          likelihood of African youth to engage with Agriculture, by employing
          innovative technology like blockchain and gaming to make it more
          engaging, entertaining and interesting.
        </p>
        <img class="CTAImg" src="assets/agrify-affiliate/img-2.svg" alt="" />
        <div class="callToAction">
          <div class="heading">
            <h5>Ready to Start your</h5>
            <h5>Agrify Journey?</h5>
          </div>
          <div class="buttonContainer">
            <div class="buttonSmall purple">Get Started</div>
            <div class="buttonSmall white">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</div>

<style>
  @font-face {
  font-family: MonumentExtended;
  src: url(/static/media/monument-extended-ultrabold.9db16afe.otf);
  font-weight: bold;
  letter-spacing: 1px;
}

@font-face {
  font-family: MonumentExtended;
  src: url(/static/media/monument-extended-regular.db74f7a5.otf);
  font-weight: normal;
  letter-spacing: 1px;
}

@font-face {
  font-family: MasionNeueExtended;
  src: url(/static/media/maison-neue-black.58118763.otf);
  font-weight: 800;
  letter-spacing: 1px;
}

@font-face {
  font-family: MasionNeueExtended;
  src: url(/static/media/maison-neue-extrabold.8371046b.otf);
  font-weight: 700;
  letter-spacing: 1px;
}

@font-face {
  font-family: MasionNeueExtended;
  src: url(/static/media/maison-neue-demi.42819215.otf);
  font-weight: 600;
  letter-spacing: 1px;
}

@font-face {
  font-family: MasionNeueExtended;
  src: url(/static/media/maison-neue-medium.6728df49.otf);
  font-weight: 500;
  letter-spacing: 1px;
}

@font-face {
  font-family: MasionNeueExtended;
  src: url(/static/media/maison-neue-book.4bdf646a.otf);
  font-weight: 400;
  letter-spacing: 1px;
}

@font-face {
  font-family: MasionNeueExtended;
  src: url(/static/media/maison-neue-light.90c3a625.otf);
  font-weight: 300;
  letter-spacing: 1px;
}

@font-face {
  font-family: MasionNeueExtended;
  src: url(/static/media/maison-neue-thin.c5a624ad.otf);
  font-weight: 200;
  letter-spacing: 1px;
}

@font-face {
  font-family: MasionNeueExtended;
  src: url(/static/media/maison-neue-extrathin.995038d6.otf);
  font-weight: 100;
  letter-spacing: 1px;
}

@font-face {
  font-family: Kyiv;
  src: url(/static/media/kyiv-type-sans-bold.4af109a2.otf);
  font-weight: bold;
  letter-spacing: 1px;
}

@font-face {
  font-family: Kyiv;
  src: url(/static/media/kyiv-type-sans-medium.1e5a7d8d.otf);
  font-weight: medium;
  letter-spacing: 1px;
}

@font-face {
  font-family: Kyiv;
  src: url(/static/media/kyiv-type-sans-regular.728c3642.otf);
  font-weight: normal;
  letter-spacing: 1px;
}

@font-face {
  font-family: strawford;
  src: url(/static/media/strawford-regular.a4199a3a.ttf);
  font-weight: normal;
  letter-spacing: 1px;
}

@font-face {
  font-family: Monaco;
  src: url(/static/media/monaco.b55576c3.ttf);
  font-weight: normal;
  letter-spacing: 1px;
}

@font-face {
  font-family: NeueMachina;
  src: url(/static/media/neue-machina-light.e1fb3b25.otf);
  font-weight: lighter;
  letter-spacing: 1px;
}

@font-face {
  font-family: NeueMachina;
  src: url(/static/media/neue-machina-light.e1fb3b25.otf);
  font-weight: normal;
  letter-spacing: 1px;
}

@font-face {
  font-family: NeueMachina;
  src: url(/static/media/neue-machina-ultrabold.07d4eef9.otf);
  font-weight: bold;
  letter-spacing: 1px;
}

@font-face {
  font-family: Avenir;
  src: url(/static/media/avenir-roman.0bfb049d.otf);
  font-weight: lighter;
  letter-spacing: 1px;
}

@font-face {
  font-family: Avenir;
  src: url(/static/media/avenir-book.813557df.otf);
  font-weight: normal;
  letter-spacing: 1px;
}

@font-face {
  font-family: Avenir;
  src: url(/static/media/avenir-black.7ce894e1.otf);
  font-weight: bold;
  letter-spacing: 1px;
}

@font-face {
  font-family: Trap;
  src: url(/static/media/Trap-Light.74be2704.otf);
  font-weight: 300;
  letter-spacing: 1px;
}

@font-face {
  font-family: Trap;
  src: url(/static/media/Trap-Regular.89b9eb2b.otf);
  font-weight: 400;
  letter-spacing: 1px;
}

@font-face {
  font-family: Trap;
  src: url(/static/media/Trap-Medium.f90195fb.otf);
  font-weight: 500;
  letter-spacing: 1px;
}

@font-face {
  font-family: Trap;
  src: url(/static/media/Trap-SemiBold.18ac9f70.otf);
  font-weight: 600;
  letter-spacing: 1px;
}

@font-face {
  font-family: Trap;
  src: url(/static/media/Trap-Bold.a2602eb7.otf);
  font-weight: 700;
  letter-spacing: 1px;
}

@font-face {
  font-family: Trap;
  src: url(/static/media/Trap-ExtraBold.7a5d3bec.otf);
  font-weight: 800;
  letter-spacing: 1px;
}

@font-face {
  font-family: Trap;
  src: url(/static/media/Trap-Black.6fbd7417.otf);
  font-weight: 900;
  letter-spacing: 1px;
}

h1 {
  font-family: MonumentExtended;
  font-size: 40px;
  font-weight: bold;
  line-height: 50px;
}

h2 {
  font-family: MonumentExtended;
  font-size: 40px;
  font-weight: 600;
  line-height: 50px;
}

h3 {
  font-family: MonumentExtended;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
}

h4 {
  font-family: MonumentExtended;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}

h5 {
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}

p {
  font-family: Trap;
  font-weight: 400;
  font-size: 18px;
}

.stickySidebar {
  position: sticky;
  top: 0;
}

.textGreen {
  color: #0cc14c;
}

.textBlack {
  color: black;
}

.textPurple {
  color: purple;
}

.textYellow {
  color: #fdbc15;
}

.fillYellow {
  color: #fdbc15;
}

.buttonLarge {
  display: inline-block;
  padding: 10px 50px;
  border-radius: 100px;
  color: white;
  background-color: #0cc14c;
  cursor: pointer;
}

.buttonLarge.green {
  background-color: #0cc14c;
  color: white;
}

.buttonLarge.black {
  background-color: black;
  color: white;
}

.buttonLarge.outline {
  background-color: transparent;
  border: 2px solid black;
  color: black;
}

.buttonLarge.outlineGreen {
  border: #0cc14c;
  color: #0cc14c;
}

.buttonNormal {
  display: inline-flex;
  text-align: center;
  align-content: center;
  align-items: center;
  padding: 15px 50px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  border-radius: 100px;
  color: white;
  border: 2px solid #0cc14c;
  background-color: #0cc14c;
  cursor: pointer;
}

.buttonNormal.green {
  background-color: #0cc14c;
  border: 2px solid #0cc14c;
  color: white;
}

.buttonNormal.light {
  background-color: #e8f6ed;
  border: 2px solid #e8f6ed;
  color: #0cc14c;
}

.buttonNormal.black {
  border: 2px solid black;
  background-color: black;
  color: white;
}

.buttonNormal.white {
  background-color: white;
  color: black;
  border-color: white;
}

.buttonNormal.white:hover {
  background-color: #0cc14c;
  color: white;
}

.buttonNormal.outline {
  background-color: transparent;
  border: 2px solid black;
  color: black;
  transition-duration: 0.5s;
}

.buttonNormal.outline:hover {
  transition-duration: 0.5s;
  background-color: black;
  color: white;
}

.buttonNormal.outlineGreen {
  border: #0cc14c;
  color: #0cc14c;
  transition-duration: 0.5s;
}

.buttonNormal.outlineGreen:hover {
  transition-duration: 0.5s;
  background-color: #0cc14c;
  color: white;
}

.buttonSmall {
  display: inline-flex;
  text-align: center;
  align-content: center;
  align-items: center;
  padding: 5px 20px;
  font-size: 14px;
  border-radius: 100px;
  color: white;
  background-color: #0cc14c;
  cursor: pointer;
}

.buttonSmall.green {
  background-color: #0cc14c;
  color: white;
}

.buttonSmall.black {
  background-color: black;
  color: white;
}

.buttonSmall.purple {
  background-color: #8d45cd;
  color: white;
}

.buttonSmall.purple:hover {
  background-color: white;
  color: #8d45cd;
}

.buttonSmall.white {
  background-color: white;
  color: black;
}

.buttonSmall.white:hover {
  background-color: #0cc14c;
  color: white;
}

.buttonSmall.outline {
  background-color: transparent;
  border: 2px solid black;
  color: black;
  transition-duration: 0.5s;
}

.buttonSmall.outline:hover {
  transition-duration: 0.5s;
  background-color: black;
  color: white;
}

.buttonSmall.outlineGreen {
  border: #0cc14c;
  color: #0cc14c;
  transition-duration: 0.5s;
}

.buttonSmall.outlineGreen:hover {
  transition-duration: 0.5s;
  background-color: #0cc14c;
  color: white;
}

.buttonWhite {
  color: #0cc14c;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
}

@media screen and (max-width: 1440px) {
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 32px;
  }
  p {
    font-size: 20px;
  }
}

@media screen and (max-width: 1024px) {
  h1 {
    font-size: 40px;
    line-height: 40px;
  }
  h2 {
    font-size: 26px;
    line-height: 32px;
  }
  p {
    font-size: 16px;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 40px;
    line-height: 60px;
  }
  h2 {
    font-size: 32px;
    line-height: 32px;
  }
  p {
    font-size: 16px;
  }
}

.Newsletter {
  padding: 100px 30px;
  border: 2px solid #fdbc15;
  border-radius: 8px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Newsletter .subheading {
  font-size: 16px;
  margin-bottom: 15px;
}

.Newsletter h4 {
  font-weight: 24px;
  font-weight: 400;
  margin-bottom: 15px;
}

.Newsletter p {
  width: 50%;
}

.Newsletter form {
  margin-top: 40px;
  width: 70%;
  display: flex;
  padding: 8px;
  align-content: center;
  border-radius: 100px;
  background: #e2e8f0;
}

.Newsletter form input[type="submit"] {
  border-radius: 100px;
  padding: 0px;
  font-weight: 300;
  background: black;
  cursor: pointer;
  color: white;
  width: 30%;
  display: flex;
  justify-content: center;
}

.Newsletter form input[type="submit"]:hover {
  background: #0cc14c;
  color: white;
}

.Newsletter form input[type="submit"]:hover {
  background: #0cc14c;
  color: white;
}

.Newsletter form input {
  border-radius: 100px;
  margin: 0px;
}

.Newsletter form input:focus {
  border: none;
  box-shadow: none;
  background: #e2e8f0;
  outline: 0px;
}

@media screen and (max-width: 780px) {
  .Newsletter {
    padding: 80px 30px;
    border: 2px solid #fdbc15;
    border-radius: 8px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .Newsletter .subheading {
    font-size: 16px;
    margin-bottom: 25px;
  }
  .Newsletter h4 {
    font-weight: 24px;
    font-weight: 400;
    margin-bottom: 25px;
  }
  .Newsletter p {
    width: 100%;
  }
  .Newsletter form {
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px;
    align-content: center;
    border-radius: 100px;
    background: transparent;
    justify-content: center;
    align-items: center;
  }
  .Newsletter form input[type="submit"] {
    margin-top: 10px;
    width: 50%;
  }
  .Newsletter form input[type="submit"]:hover {
    background: #0cc14c;
    color: white;
  }
  .Newsletter form input[type="submit"]:hover {
    background: #0cc14c;
    color: white;
  }
  .Newsletter form input {
    border-radius: 100px;
    margin: 0px;
  }
  .Newsletter form input:focus {
    border: none;
    box-shadow: none;
    background: #e2e8f0;
    outline: 0px;
  }
}
/*# sourceMappingURL=components.css.map */
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvY29tcG9uZW50L2Nzcy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly9zcmMvY29tcG9uZW50L2Nzcy9Db21wb25lbnRzLmNzcyIsIndlYnBhY2s6Ly9zcmMvY29tcG9uZW50L2Nzcy9jb21wb25lbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDRSw2QkFBNkI7RUFDN0IsNENBQW1EO0VBQ25ELGlCQUFpQjtFQUNqQixtQkFBbUI7QUNackI7O0FEZUE7RUFDRSw2QkFBNkI7RUFDN0IsNENBQWlEO0VBQ2pELG1CQUFtQjtFQUNuQixtQkFBbUI7QUNackI7O0FEZUE7RUFDRSwrQkFBK0I7RUFDL0IsNENBQXFEO0VBQ3JELGdCQUFnQjtFQUNoQixtQkFBbUI7QUNackI7O0FEZUE7RUFDRSwrQkFBK0I7RUFDL0IsNENBQXlEO0VBQ3pELGdCQUFnQjtFQUNoQixtQkFBbUI7QUNackI7O0FEZUE7RUFDRSwrQkFBK0I7RUFDL0IsNENBQW9EO0VBQ3BELGdCQUFnQjtFQUNoQixtQkFBbUI7QUNackI7O0FEZUE7RUFDRSwrQkFBK0I7RUFDL0IsNENBQXNEO0VBQ3RELGdCQUFnQjtFQUNoQixtQkFBbUI7QUNackI7O0FEZUE7RUFDRSwrQkFBK0I7RUFDL0IsNENBQW9EO0VBQ3BELGdCQUFnQjtFQUNoQixtQkFBbUI7QUNackI7O0FEZUE7RUFDRSwrQkFBK0I7RUFDL0IsNENBQXFEO0VBQ3JELGdCQUFnQjtFQUNoQixtQkFBbUI7QUNackI7O0FEZUE7RUFDRSwrQkFBK0I7RUFDL0IsNENBQW9EO0VBQ3BELGdCQUFnQjtFQUNoQixtQkFBbUI7QUNackI7O0FEZUE7RUFDRSwrQkFBK0I7RUFDL0IsNENBQXlEO0VBQ3pELGdCQUFnQjtFQUNoQixtQkFBbUI7QUNackI7O0FEZUE7RUFDRSxpQkFBaUI7RUFDakIsNkNBQWdEO0VBQ2hELGlCQUFpQjtFQUNqQixtQkFBbUI7QUNackI7O0FEZUE7RUFDRSxpQkFBaUI7RUFDakIs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 */
</style>
