<template>

  <div class="app-container">
    <nav class="pri-nav">
      <div class="container d-flex justify-content-between">
        <img src="@/assets/images/logo.png" class="logo" alt="">
        <i class="fa-solid fa-bars d-block d-lg-none"></i>
      </div>
    </nav>
    <nav class="sec-nav">
      <div class="container d-flex flex-row flex-nowrap overflow-scroll text-center">
        <div class="sec-nav-link col-3 col-md-auto pe-md-5">About Us</div>
        <div class="sec-nav-link col-4 col-md-auto pe-md-5">Programmes</div>
        <div class="sec-nav-link col-4 col-md-auto pe-md-5">Testimonials</div>
        <div class="sec-nav-link col-2 col-md-auto pe-md-5">FAQ</div>
        <div class="sec-nav-link col-3 col-md-auto pe-md-5">Contact Us</div>
      </div>
    </nav>

    <Header/>
    <About/>
    <Programmes/>
    <Testimonials/>
    <Events/>
    <FAQ/>
    <Bailey/>
    <Contact/>
    <Footer/>

  </div>
  
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Programmes from './components/Programmes.vue';
import Testimonials from './components/Testimonials.vue';
import Events from './components/Events.vue';
import FAQ from './components/FAQ.vue';
import Bailey from './components/Bailey.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header, About, Programmes, Testimonials, Events, FAQ, Bailey, Contact, Footer
  }
}
</script>

<style>

body, html{
  margin:0;
  padding:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container{
  overflow:visible;
  /* height:200vh; */
}

nav{
  z-index:10;
}

.pri-nav{
  background-color:white;
  color:black;
}

.sec-nav{
  background-color:#0F2C56;
  color:white; 
  position: sticky;
  top:0;
}

.sec-nav .container::-webkit-scrollbar{
  display:none !important;
}

.container{
  background-color:rgba(255,255,0,0.5);
  width:100%;
  margin:0 auto;
  padding: 20px;
}

.logo{
  width:60px;
}

@media only screen and (min-width:768px){
  .container{
    width:720px;
  }
}

@media only screen and (min-width:992px){
  .container{
    width:768px;
  }
}

@media only screen and (min-width:1024px){
  .container{
    width:1000px;
  }
}

@media only screen and (min-width:1200px){
  .container{
    width:1024px;
  }
}

@media only screen and (min-width:1400px){
  .container{
    width:1200px;
  }
}



</style>
