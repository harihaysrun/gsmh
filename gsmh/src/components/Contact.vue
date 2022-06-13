<template>
  <div class="py-5 bg">

    <div class="container p-4 p-md-3 events">
    
      <div class="row">
        <div class="text text-center text-lg-start col-12 col-lg-5 mb-4">
          <h2>For further enquiries,<br>please contact us.</h2>
          <p class="col-12 col-md-6 col-lg-10 m-auto my-4 m-lg-0 my-lg-4">Enquiries will be answered within two business days, excluding eve and public holidays.</p>
          <div class="d-flex flex-column flex-md-row justify-content-center justify-content-lg-start">
            <p class="me-md-4"><i class="bi bi-telephone me-2"></i> 99999999</p>
            <p><i class="bi bi-envelope me-2"></i> residency@greysloan.com</p>
          </div>
        </div>

        <div class="form bg-white p-4 p-md-5 col-12 col-lg-7">
          <div class="d-flex flex-column mb-4">
            <small>NAME</small>
            <input type="text" placeholder="Name">
          </div>

          <div class="d-flex flex-column mb-4">
            <small>EMAIL</small>
            <input type="email" placeholder="Email Address">
          </div>

          <div class="d-flex flex-column mb-4">
            <small>REASON FOR ENQUIRY</small>
            <select>
              <option value="-1" selected disabled>Select a reason</option>
              <option value="0">Residency</option>
              <option value="1">Application</option>
              <option value="2">Open House</option>
            </select>
          </div>

          <div class="d-flex flex-column">
            <small>NAME</small>
            <textarea placeholder="Your message"></textarea>
          </div>

        </div>
      </div>

    </div>
    

  </div>
</template>

<script>
export default {
  name: 'Contact-Section'
}
</script>

<style scoped>

.bg{
  position:relative;
}

.bg::before{
  content:'';
  background-image: url(@/assets/images/triangle-small.png);
  background-size:100% 100%;
  background-repeat:no-repeat;
  position:absolute;
  top:35%;
  width:100%;
  height:65%;
  z-index:-1;
}

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
  height:80px;
  position:absolute;
  top:15%;
}

.form{
  border-radius:10px;
  border:1px solid rgba(0,0,0,0.15);
}

textarea{
  height: 200px;
}

@media only screen and (min-width:768px){


}

@media only screen and (min-width:1024px){

  .bg::before{
    background-image: url(@/assets/images/triangle.png);
    background-size:100% 100%;
    top:50px;
    height:100%;
  }

}

</style>