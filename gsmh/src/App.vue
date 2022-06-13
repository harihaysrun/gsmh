<template>

  <div class="app-container">
    <nav class="pri-nav">
      <div class="container d-flex justify-content-between">
        <img src="@/assets/images/logo.png" class="logo" alt="">
        <i class="fa-solid fa-bars d-block d-lg-none"></i>
      </div>
    </nav>
    <nav class="sec-nav">
      <div class="container py-3 d-flex flex-row flex-nowrap overflow-scroll text-center justify-content-lg-center">
        <div class="sec-nav-link col-3 col-md-auto pe-md-5" v-scroll-to="'#test'">About Us</div>
        <div class="sec-nav-link col-4 col-md-auto pe-md-5" v-scroll-to="'#programmes'">Programmes</div>
        <div class="sec-nav-link col-4 col-md-auto pe-md-5" v-scroll-to="'#testimonials'">Testimonials</div>
        <div class="sec-nav-link col-2 col-md-auto pe-md-5" v-scroll-to="'#events'">Events</div>
        <div class="sec-nav-link col-2 col-md-auto pe-md-5" v-scroll-to="'#faq'">FAQ</div>
        <div class="sec-nav-link col-3 col-md-auto pe-md-5" v-scroll-to="'#contact'">Contact Us</div>
      </div>
    </nav>

    <Header/>
    <About id="test"/>
    <Programmes id="programmes"/>
    <Testimonials id="testimonials"/>
    <Events id="events"/>
    <FAQ id="faq"/>
    <Bailey/>
    <Contact id="contact"/>
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
  },
  methods:{
    scrollToElement:function(){
      // console.log(this.About.getBoundingClientRect().width)
      // console.log(document.getElementById('test'))
      // console.log(this.$refs.aboutSection)
      // this.$refs.aboutSection.scrollIntoView()
      // window.scrollTo({
      //   top: 100,
      //   left: 100,
      //   behavior: 'smooth'
      // });
      // this.$refs.aboutSection.scrollIntoView({behavior: 'smooth'});
    }
  }
}
</script>

<style>

body, html{
  margin:0;
  padding:0;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5{
  font-family: 'Archivo', sans-serif;
}

small{
  font-family: 'Roboto Condensed', sans-serif;
  color:#163665;
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
  background-color:rgba(255,255,0,0.3);
  width:100%;
  margin:0 auto;
  padding: 20px;
}

.logo{
  width:60px;
}

img{
  /* pointer-events:none; */
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

@media only screen and (min-width:768px){
  .container{
    width:720px;
    padding: 20px 0;
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
