<template>
  <div class="py-5">

    <div class="container p-4 p-md-3 events">

      <div class="row">

        <div class="quote position-relative p-5 col-12 col-md-9 m-md-auto col-xl-6 order-xl-2">
          <small>A WORD FROM CHIEF BAILEY</small>
          <h3>We're always ready to welcome new talent. On behalf of the team at Grey Sloan, we hope to see you at the upcoming open house!</h3>
        </div>

        <div class="col-12 col-md-9 m-md-auto col-xl-6 order-xl-1 pe-xl-5 position-relative">
          <img src="@/assets/images/bailey.png" class="ms-5 ms-sm-4 ms-xl-0">
          <div class="title-name text-white p-3 px-4">
            <small>CHIEF GENERAL</small>
            <br>Dr. Miranda Bailey
          </div>
        </div>

      </div>

    </div>
    

  </div>
</template>

<script>
export default {
  name: 'Bailey-Section'
}
</script>

<style scoped>

.container{
  overflow:hidden;
}

h1{
  font-family: 'Times New Roman', Times, serif;
}

h2{
  color:#163665;
  font-weight:800;
}

.quote::before{
  /* content:url(@/assets/images/openq.png); */
  content:'';
  background-image: url(@/assets/images/openq.png);
  background-size:80%;
  background-repeat:no-repeat;
  position:absolute;
  top:0;
  left:-10px;
  width:60px;
  height:60px;
  transform:scale(0.7);
}

.quote::after{
  /* content:url(@/assets/images/closeq.png); */
  content:'';
  background-image: url(@/assets/images/closeq.png);
  background-size:80%;
  background-repeat:no-repeat;
  position:absolute;
  bottom:0;
  right:0px;
  width:60px;
  height:60px;
  transform:scale(0.7);
}

img{
  width:100%;
  position:relative;
  z-index:2;
  pointer-events:none;
}

.title-name{
  background-color:#163665;
  border-radius:10px;
  width:60%;
  height:80px;
  position:absolute;
  top:15%;
}

@media only screen and (min-width:768px){

  /* .title-name{
    width:75%;
  } */

}

@media only screen and (min-width:1200px){

  .title-name{
    right: -100px !important;
    top:calc(100% - 90px);
    right:0;
    text-align:right;
    z-index:1;
    width:75%;
  }

}

</style>