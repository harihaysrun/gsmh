<template>

  <div class="app-container">
    <nav class="pri-nav">
      <div class="container d-flex justify-content-between">
        <img src="@/assets/images/logo.png" class="logo" alt="">
        <i class="fa-solid fa-bars d-block d-lg-none"></i>
      </div>
    </nav>
    <nav class="sec-nav">
      <div class="container p-0 d-flex flex-row flex-nowrap overflow-scroll text-center justify-content-lg-center">
        <div class="sec-nav-link py-3 px-4 col-md-auto text-nowrap" v-scroll-to="'#about'" @click="scrollToSection(1)" :class="{'sec-nav-link-active': section === 1}">About Us</div>
        <div class="sec-nav-link py-3 px-4 col-md-auto text-nowrap" v-scroll-to="'#programmes'" @click="scrollToSection(2)" :class="{'sec-nav-link-active': section === 2}">Programmes</div>
        <div class="sec-nav-link py-3 px-4 col-md-auto text-nowrap" v-scroll-to="'#testimonials'" @click="scrollToSection(3)" :class="{'sec-nav-link-active': section === 3}">Testimonials</div>
        <div class="sec-nav-link py-3 px-4 col-md-auto text-nowrap" v-scroll-to="'#events'" @click="scrollToSection(4)" :class="{'sec-nav-link-active': section === 4}">Events</div>
        <div class="sec-nav-link py-3 px-4 col-md-auto text-nowrap" v-scroll-to="'#faq'" @click="scrollToSection(5)" :class="{'sec-nav-link-active': section === 5}">FAQ</div>
        <div class="sec-nav-link py-3 px-4 col-md-auto text-nowrap" v-scroll-to="'#contact'" @click="scrollToSection(6)" :class="{'sec-nav-link-active': section === 6}">Contact Us</div>
      </div>
    </nav>

    <Header/>
    <About id="about"/>
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
  data(){
    return{
      'section': 0
    }
  },
  mounted(){
    window.addEventListener('scroll', this.onscroll)
  },
  methods:{
    onscroll:function(){
      if(window.scrollY > document.getElementById('about').offsetTop - 500){
        this.section = 1;
      } else{
        this.section = 0;
      }
      if(window.scrollY > document.getElementById('programmes').offsetTop - 500){
        this.section = 2;
      }
      if(window.scrollY > document.getElementById('testimonials').offsetTop - 500){
        this.section = 3;
      }
      if(window.scrollY > document.getElementById('events').offsetTop - 500){
        this.section = 4;
      }
      if(window.scrollY > document.getElementById('faq').offsetTop - 500 ){
        this.section = 5;
      }
      if(window.scrollY > document.getElementById('contact').offsetTop - 500 || window.scrollY >= document.body.scrollHeight - window.innerHeight){
        this.section = 6;
      }
    },
    scrollToSection:function(sectionNo){
      console.log(sectionNo)
      this.section = sectionNo;
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
  font-size:16px;
  line-height:20px;
}

h1, h2, h3, h4, h5{
  font-family: 'Archivo', sans-serif;
}

small{
  font-family: 'Roboto Condensed', sans-serif;
  color:#163665;
}

input, select, textarea{
  appearance: none;
  border:0;
  border-radius:0;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  /* height:35px; */
  background-color:white;
  color:black;
  padding:10px 0 15px 0;
}

input:focus, select:focus, textarea:focus{
  outline:0;
  border-bottom:1px solid #163665;
  color:#163665;
  font-weight:700;
}

select{
  background: url(@/assets/images/dropdown-arrow.png) no-repeat right;
  background-size:17px 10px;
}

button{
  appearance: none;
  background-color:#163665;
  border:0;
  border-radius:10px;
  padding:15px 60px;
  color:white;
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
  z-index:10;
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

.sec-nav-link{
  box-sizing: border-box;
  border-bottom:2px solid transparent;
  cursor:pointer;
}

.sec-nav-link:hover, .sec-nav-link-active{
  font-weight:700;
  border-bottom:2px solid white;
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
