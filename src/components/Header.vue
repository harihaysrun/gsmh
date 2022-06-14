<template>
  <div>
    <div class="header-image-text position-relative">
      <img class="w-100 d-block d-md-none" src="@/assets/images/banner-mobile.png" alt="mobile banner">
      <img class="w-100 d-block d-none d-md-block d-lg-none" src="@/assets/images/banner-tab.png" alt="tablet banner">
      <img class="w-100 d-block d-none d-lg-block" src="@/assets/images/banner-desktop.png" alt="desktop banner">
      <div class="header-text w-100 position-absolute top-50 start-0 translate-middle-y text-center text-lg-start">
        <div class="container">
          <h1>Training the next<br>generation of doctors<br>is what we do best.</h1>
        </div>
      </div>
    </div>
    <div class="upcoming-events text-center text-white">
      <div class="ue-title py-2 py-lg-3 d-block d-lg-none">Upcoming Events</div>
      <div class="container p-0 d-lg-flex flex-lg-row">
        <div class="ue-title py-2 py-lg-3 pe-4 d-none d-lg-block">Upcoming Events</div>
        <div class="ue-events py-2 py-lg-3 ps-lg-4 d-flex flex-row">
          <div class="col-6 col-lg-auto"><b>JUL 27</b><br class="d-block d-md-none"/><span class="d-none d-md-inline mx-2">|</span>Open House</div>
          <div class="divider d-none d-lg-block mx-lg-4"></div>
          <div class="col-6 col-lg-auto"><b>AUG 20</b><br class="d-block d-md-none"/><span class="d-none d-md-inline mx-2">|</span>Applications Open</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header-Img'
}
</script>

<style scoped>

h1{
  color:#163665;
}

.upcoming-events{
  background-color:#163665;
  position:relative;
  z-index:1;
}

.ue-title{
  background-color:#0F2C56;
}

.ue-events{
  position:relative;
}

.ue-events::after{
  content:'';
  position:absolute;
  top:10px;
  bottom:10px;
  right:0;
  left:0;
  margin:auto;
  width:1px;
  background-color:rgba(255,255,255,0.15);
}

.divider{
  width:1px;
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

  .ue-events::after{
    content:none;
  }


}

@media only screen and (min-width:1400px){

  .upcoming-events::before{
    width:18%;
  }

}

@media only screen and (min-width:2000px){

  .upcoming-events::before{
    width:25%;
  }

}

@media only screen and (min-width:2500px){

  .upcoming-events::before{
    width:30%;
  }

}

</style>
