<template>
  <div>
    <div class="header-image-text position-relative">
      <img class="w-100 d-block d-md-none" src="@/assets/images/banner-mobile.png" alt="mobile banner">
      <img class="w-100 d-block d-none d-md-block d-lg-none" src="@/assets/images/banner-tab.png" alt="tablet banner">
      <img class="w-100 d-block d-none d-lg-block" src="@/assets/images/banner-desktop.png" alt="desktop banner">
      <div class="header-text w-100 position-absolute top-50 start-0 translate-middle-y bg-warning text-center text-lg-start">
        <div class="container">
          <h1>Training the next<br>generation of doctors<br>is what we do best.</h1>
        </div>
      </div>
    </div>
    <div class="upcoming-events text-center text-white">
      <div class="ue-title py-2 d-block d-lg-none">Upcoming Events</div>
      <div class="container py-0 d-lg-flex flex-lg-row">
        <div class="ue-title py-2 pe-5 d-none d-lg-block">Upcoming Events</div>
        <div class="ue-events py-2 ps-lg-5 d-flex flex-row justify-content-around">
          <div><b>JUL 27</b><br class="d-block d-md-none"/><span class="d-none d-md-inline mx-2">|</span>Open House</div>
          <div class="divider my-2 my-md-0 mx-lg-4"></div>
          <div><b>AUG 20</b><br class="d-block d-md-none"/><span class="d-none d-md-inline mx-2">|</span>Applications Open</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.upcoming-events{
  background-color:#163665;
  position:relative;
  z-index:1;
}

.ue-title{
  background-color:#0F2C56;
}

.divider{
  width:2px;
  background-color:rgba(255,255,255,0.15);
}

@media only screen and (min-width:992px){

  .upcoming-events::before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:15%;
    height:100%;
    background-color:#0F2C56;
    z-index:-1;
  }

}

@media only screen and (min-width:1400px){

  .upcoming-events::before{
    width:20%;
  }

}

@media only screen and (min-width:2000px){

  .upcoming-events::before{
    width:30%;
  }

}

</style>
