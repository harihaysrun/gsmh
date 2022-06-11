<template>
  <div class="py-5">
    <h2 class="text-center">Our Residency Programmes</h2>
    <div class="divider"></div>

    <div class="container p-0 position-relative">
      <img class="programme-pic" src="@/assets/images/programmes.png" alt="">
      <div class="programme-details col-12 col-md-10 col-lg-9 position-absolute top-100 start-50 translate-middle m-auto p-3 d-flex flex-row justify-content-around text-center text-md-start">
        <div class="d-flex flex-column flex-md-row align-items-center">
          <h1 class="me-md-3">16</h1>
          Programmes<br class="d-none d-md-block"> in Total
        </div>
        <div class="d-flex flex-column flex-md-row align-items-center">
          <h1 class="me-md-3">10</h1>
          Junior Residency<br class="d-none d-md-block"> Programmes
        </div>
        <div class="d-flex flex-column flex-md-row align-items-center">
          <h1 class="me-md-3">6</h1>
          Senior Residency<br class="d-none d-md-block"> Programmes
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

h2{
  color:#163665;
  font-weight:800;
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
  /* position:relative; */
  width:100%;
}

.programme-details{
  background-color:#163665;
  color:white;
}


@media only screen and (min-width:576px){

  .programme-details{
    border-radius:10px;
  }

  .programme-pic{
    border-radius:10px;
  }

}

</style>
