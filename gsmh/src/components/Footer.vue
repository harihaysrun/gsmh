<template>
  <footer>

    <div class="container pt-0 pb-5 px-sm-0 py-lg-5">
      
      <div class="accordion accordion-flush d-block d-lg-none" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              ABOUT
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body d-flex flex-column">
              <span>About Us</span>
              <span>Our Values</span>
              <span>Departments</span>
              <span>Gallery</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              SERVICES
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body d-flex flex-column">
              <span>Services We Offer</span>
              <span>Patients</span>
              <span>Healthcare Professionals</span>
              <span>Locations</span>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              CAREERS
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body d-flex flex-column">
              <span>Careers at GSMH</span>
              <span>Residency</span>
              <span>Events</span>
              <span>Volunteer</span>
              <span>Scholarships</span>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
              OTHERS
            </button>
          </h2>
          <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body d-flex flex-column">
              <span>FAQ</span>
              <span>Support</span>
              <span>Feedback</span>
              <span>Blog</span>
              <span>Make A Donation</span>
            </div>
          </div>
        </div>
      </div>

      <div class="d-none d-lg-flex text-white pb-5">
        <div class="d-flex flex-column col-3">
          <b class="mb-3">ABOUT</b>
          <span>About Us</span>
          <span>Our Values</span>
          <span>Departments</span>
          <span>Gallery</span>
          <span>Contact Us</span>
        </div>
        <div class="d-flex flex-column col-3">
          <b class="mb-3">SERVICES</b>
              <span>Services We Offer</span>
              <span>Patients</span>
              <span>Healthcare Professionals</span>
              <span>Locations</span>
        </div>
        <div class="d-flex flex-column col-3">
          <b class="mb-3">CAREERS</b>
              <span>Careers at GSMH</span>
              <span>Residency</span>
              <span>Events</span>
              <span>Volunteer</span>
              <span>Scholarships</span>
        </div>
        <div class="d-flex flex-column col-3">
          <b class="mb-3">OTHERS</b>
              <span>FAQ</span>
              <span>Support</span>
              <span>Feedback</span>
              <span>Blog</span>
              <span>Make A Donation</span>
        </div>
      </div>
      

    </div>

    <div class="below-footer text-center p-2">
      GREY SLOAN MEMORIAL HOSPITAL 2022
    </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer-Section'
}
</script>

<style scoped>

footer{
  background-color:#163665;
  /* color:white; */
}

.about h2{
  color:black;
}

.about p{
  color:#D9D9D9;
}

.below-footer{
  background-color:#0F2C56;
  color:rgba(255,255,255,0.6);
}

span{
  opacity:0.6;
}

</style>
