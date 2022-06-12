<template>
  <div class="py-5">
    <h2 class="text-center">Hear From Our Current Residents & Alumni</h2>
    <div class="divider"></div>

    <div class="container p-md-0 position-relative">

      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

        <div class="carousel-inner">
          <!-- <div class="carousel-item d-flex flex-column flex-md-row active p-md-4 p-lg-5">
            <img src="@/assets/images/jo.png" class="d-none d-md-block testi-img-big me-5" alt="...">
            <div>
              <div class="mb-5">
                <small>RESIDENT TESTIMONIAL 1</small>
                <h3>I had already completed my 4-year residency in General Surgery when I had the strong calling to switch over to OB/GYN. Chief Bailey and my superior attendings were very supportive of my decision. I basically had to restart from square one but if I had to do it all over again, I will.</h3>
              </div>
              <div class="d-flex flex-row">
                <img src="@/assets/images/jo-mobile.png" class="d-block d-md-none testi-img-mobile me-3" alt="...">
                <div>
                  <b>Dr. Josephine Wilson</b>
                  <p class="m-0 p-0">First year resident in Obstretics & Gynaecology, Former Attending General Surgeon</p>
                </div>
              </div>
            </div>
          </div> -->
          
          <div v-for="(t, index) in test" v-bind:key="t.id" class="carousel-item d-flex flex-column flex-md-row p-md-4 p-lg-5 bg-white" :class="{active: index === 0}">
            <img v-bind:src="t.imgBig" class="d-none d-md-block testi-img-big me-5" alt="...">
            <div>
              <div class="mb-5">
                <small>{{t.number}}</small>
                <h3>{{t.text}}</h3>
              </div>
              <div class="d-flex flex-row">
                <img v-bind:src="t.imgSmall" class="d-block d-md-none testi-img-mobile me-3" alt="...">
                <div>
                  <b>{{t.name}}</b>
                  <p class="m-0 p-0">{{t.position}}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="container px-0 carousel-buttons">
          <div class="d-flex justify-content-between d-lg-none">
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="d-none d-lg-block">
            <button class="carousel-control-prev position-absolute top-50 start-0 translate-middle" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next position-absolute top-50 start-100 translate-middle" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="carousel-indicators m-lg-0 d-flex align-items-center">
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
      
      </div>

    </div>
    

  </div>
</template>

<script>
export default {
  name: 'Testimonials-Section',
  data:function(){
    return {
      'test': [
        {'number':'RESIDENT TESTIMONIAL 1',
        'text':'I had already completed my 4-year residency in General Surgery when I had the strong calling to switch over to OB/GYN. Chief Bailey and my superior attendings were very supportive of my decision. I basically had to restart from square one but if I had to do it all over again, I will.',
        'name': 'Dr. Josephine Wilson',
        'position': 'First year resident in Obstretics & Gynaecology, Former Attending General Surgeon',
        'imgBig': require('@/assets/images/jo.png'),
        'imgSmall': require('@/assets/images/jo-mobile.png'),
        'active': true
        },
        {'number':'RESIDENT TESTIMONIAL 1',
        'text':'Suspendisse vehicula diam in velit sagittis sagittis. Phasellus ut tempus libero, eget dignissim ipsum. Nulla facilisi. Nam nec eros risus. Aenean id gravida ante. Phasellus posuere, libero et lacinia cursus, odio nisi vulputate mauris, in dictum lorem mi at velit. Phasellus molestie pulvinar orci.',
        'name': 'Dr. Levi Schmitt',
        'position': 'First year resident in Obstretics & Gynaecology, Former Attending General Surgeon',
        'imgBig': require('@/assets/images/jo.png'),
        'imgSmall': require('@/assets/images/jo-mobile.png'),
        }
      ]
    }
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

.testi-img-mobile{
  width:75px;
  height:100%;
}

.carousel-buttons{
  z-index:2;
}

.carousel-control-prev, .carousel-control-next{
  width:50px;
  height:50px;
  opacity:1;
  background-color:#163665;
  border-radius:10px;
  position:relative;
}

.carousel-indicators{
  /* background-color:white; */
  height:50px;
}

.carousel-indicators button{
  width: 10px;
  height:10px;
  background-color:#D9D9D9;
  border-radius:50%;
}

.carousel-indicators button.active{
  background-color:#163665;
}

.active{
  display:block;
}


@media only screen and (min-width:576px){

  .programme-details{
    border-radius:10px;
  }

  .programme-pic{
    border-radius:10px;
  }

  .testi-img-big{
    width:35%;
    height:100%;
  }

}


@media only screen and (min-width:768px){

  .carousel-inner{
    border-radius:10px;
    border:1px solid rgba(0,0,0,0.15);
  }

  /* .carousel-buttons{
    opacity:0.5;
    position:absolute;
    top:0;
    height:100%;
    pointer-events:none;
  }

  .carousel-buttons button{
    pointer-events:visible;
  } */

  .carousel-indicators{
    height:auto;
  }

}


</style>
