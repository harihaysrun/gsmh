<template>
  <div class="py-5">
    <h2 class="text-center">Events</h2>
    <div class="divider"></div>

    <div class="container p-md-0 events">

      <div class="position-relative mb-3">
        <img src="@/assets/images/events-1-small.png" class="d-block d-sm-none">
        <img src="@/assets/images/events-1-mobile.png" class="d-none d-sm-block d-md-none">
        <img src="@/assets/images/events-1-big.png" class="d-none d-md-block">

        <div class="h-100 position-absolute top-0 start-0 p-4 p-md-5 d-flex flex-column justify-content-center align-items-start">
          <h2>We're hosting our annual month-long open house soon. Reserve your slots now!</h2>
          <div class="mt-4">
            <button class="me-md-4">Reserve Slot</button>
            <button class="dl-btn"><i class="bi bi-download me-2"></i> Brochure</button>
          </div>
        </div>
      </div>

      <div class="position-relative">
        <img src="@/assets/images/events-2-small.png" class="d-block d-sm-none">
        <img src="@/assets/images/events-2-mobile.png" class="d-none d-sm-block d-md-none">
        <img src="@/assets/images/events-2-big.png" class="d-none d-md-block">

        <div class="h-100 position-absolute top-0 start-0 p-4 p-md-5 d-flex flex-column justify-content-center align-items-start">
          <h2>Have your heart set on a programme? Great! Applications open on August 20th.</h2>
          <!-- <div class="mt-4 w-100"> -->
            <button class="mt-4 coming-soon-btn">Coming Soon</button>
          <!-- </div> -->
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

button{
  width:100%;
  margin-bottom:15px;
  padding-top:20px;
  padding-bottom:20px;
  background-color:white;
  color:#163665;
}

.dl-btn{
  border:1px solid white;
  background-color:transparent;
  color:white;
}

.coming-soon-btn{
  opacity:0.5;
  pointer-events:none;
}

@media only screen and (min-width:768px){

  .events h2{
    width:80%;
  }

  button{
    width:auto;
    margin-bottom:0;
    padding:15px 60px;
  }

}

@media only screen and (min-width:1024px){

  .events h2{
    width:60%;
  }

}

</style>