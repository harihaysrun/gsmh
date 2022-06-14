<template>
  <footer>

    <div class="container pt-0 pb-5 px-sm-0 py-lg-5">
      
      <div class="accordion accordion-flush d-block d-lg-none" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              ABOUT
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body d-flex flex-column py-3">
              <div class="my-1"><a href="">About Us</a></div>
              <div class="my-1"><a href="">Our Values</a></div>
              <div class="my-1"><a href="">Departments</a></div>
              <div class="my-1"><a href="">Gallery</a></div>
              <div class="my-1"><a href="">Contact Us</a></div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              SERVICES
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body d-flex flex-column py-3">
              <div class="my-1"><a href="">Services We Offer</a></div>
              <div class="my-1"><a href="">Patients</a></div>
              <div class="my-1"><a href="">Healthcare Professionals</a></div>
              <div class="my-1"><a href="">Locations</a></div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              CAREERS
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body d-flex flex-column py-3">
              <div class="my-1"><a href="">Careers at GSMH</a></div>
              <div class="my-1"><a href="">Residency</a></div>
              <div class="my-1"><a href="">Events</a></div>
              <div class="my-1"><a href="">Volunteer</a></div>
              <div class="my-1"><a href="">Scholarships</a></div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFour">
            <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
              OTHERS
            </button>
          </h2>
          <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body d-flex flex-column py-3">
              <div class="my-1"><a href="">FAQ</a></div>
              <div class="my-1"><a href="">Support</a></div>
              <div class="my-1"><a href="">Feedback</a></div>
              <div class="my-1"><a href="">Blog</a></div>
              <div class="my-1"><a href="">Make A Donation</a></div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-none d-lg-flex text-white pb-5">
        <div class="d-flex flex-column col-3">
          <b class="mb-3">ABOUT</b>
          <div><a href="">About Us</a></div>
          <div><a href="">Our Values</a></div>
          <div><a href="">Departments</a></div>
          <div><a href="">Gallery</a></div>
          <div><a href="">Contact Us</a></div>
        </div>
        <div class="d-flex flex-column col-3">
          <b class="mb-3">SERVICES</b>
              <div><a href="">Services We Offer</a></div>
              <div><a href="">Patients</a></div>
              <div><a href="">Healthcare Professionals</a></div>
              <div><a href="">Locations</a></div>
        </div>
        <div class="d-flex flex-column col-3">
          <b class="mb-3">CAREERS</b>
              <div><a href="">Careers at GSMH</a></div>
              <div><a href="">Residency</a></div>
              <div><a href="">Events</a></div>
              <div><a href="">Volunteer</a></div>
              <div><a href="">Scholarships</a></div>
        </div>
        <div class="d-flex flex-column col-3">
          <b class="mb-3">OTHERS</b>
              <div><a href="">FAQ</a></div>
              <div><a href="">Support</a></div>
              <div><a href="">Feedback</a></div>
              <div><a href="">Blog</a></div>
              <div><a href="">Make A Donation</a></div>
        </div>
      </div>
      

    </div>

    <div class="below-footer text-center p-2">
      <a href="https://github.com/harihaysrun" target="_blank"><i class="bi bi-github me-1"></i> HARIHAYSRUN 2022</a>
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
  font-size:14px;
  background-color:#0F2C56;
  color:rgba(255,255,255,0.6);
}

a{
  text-decoration: none;
  color:white;
  opacity:0.6;
}

a:hover{
  opacity:1;
  cursor:pointer;
}

.accordion-button{
  font-weight:700;
  border-bottom: 0.5px solid white;
}

.collapsed{
  font-weight:400;
  border-bottom: 0.5px solid white;
}

.accordion-button, .accordion-body{
  padding:0;
}

.collapsed.accordion-button::after, .accordion-button::after{
  background-size:75%;
  background-position: center;
}

.collapsed.accordion-button::after{
  background-image: url(@/assets/images/expand.png);
}

.accordion-button::after{
  background-image: url(@/assets/images/collapse.png);
}

.accordion, .accordion-button, .accordion-body{
  background-color: #163665 !important;
  color:white;
}

</style>
