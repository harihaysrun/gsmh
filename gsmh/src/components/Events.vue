<template>
  <div class="py-5">
    <h2 class="text-center">Hear From Our Current Residents & Alumni</h2>
    <div class="divider"></div>

    <div class="container events">

      <div class="position-relative mb-3">
        <img src="@/assets/images/events-1-mobile.png" class="d-block d-md-none">
        <img src="@/assets/images/events-1-big.png" class="d-none d-md-block">

        <div class="h-100 position-absolute top-0 start-0 p-4 p-md-5 d-flex flex-column justify-content-center align-items-start">
          <h2>We're hosting our annual month-long open house soon. Reserve your slots now!</h2>
          <div class="buttons mt-4">
            <button>Reserve Slot</button>
            <button>Brochure</button>
          </div>
        </div>
      </div>

      <div class="position-relative">
        <img src="@/assets/images/events-2-mobile.png" class="d-block d-md-none">
        <img src="@/assets/images/events-2-big.png" class="d-none d-md-block">

        <div class="h-100 position-absolute top-0 start-0 p-4 p-md-5 d-flex flex-column justify-content-center align-items-start">
          <h2>Have your heart set on a programme? Great! Applications open on August 20th.</h2>
          <div class="buttons mt-4">
            <button class="coming-soon-btn">Coming soon</button>
          </div>
        </div>
      </div>

    </div>
    

  </div>
</template>

<script>
export default {
  name: 'Events-Section'
}
</script>

<style scoped>

h2{
  color:#163665;
  font-weight:800;
}

.events h2{
  width:100%;
  color:white;
  font-weight:300;
}

h4{
  margin:0;
}

.divider{
  left:0;
  right:0;
  margin:50px auto;
  width:50px;
  height:3px;
  background-color:#0F2C56;
  z-index:-1;
  border-radius:10px;
}

img{
  width:100%;
}

.coming-soon-btn{
  opacity:0.5;
  pointer-events:none;
}

@media only screen and (min-width:768px){

  .events h2{
    width:80%;
  }

}

@media only screen and (min-width:1024px){

  .events h2{
    width:60%;
  }

}

</style>