<template>
  <div class="py-5">
    <h2 class="text-center">Hear From Our Current<br class="d-block d-md-none"> Residents & Alumni</h2>
    <div class="divider"></div>

    <div class="container p-md-0">

      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

        <div class="carousel-inner overflow-visible position-relative">

          <div v-for="(t, index) in testimonials" v-bind:key="t.id" class="carousel-item d-flex flex-column flex-md-row p-md-5 p-lg-5 bg-white" :class="{active: index === 0}">
            <img v-bind:src="t.imgBig" class="d-none d-lg-block testi-img-big w-25 me-5" alt="...">
            <div class="d-flex flex-column">
              <div class="mb-4 mb-md-3">
                <small>{{t.number}}</small>
                <h3 class="mt-2">{{t.text}}</h3>
              </div>
              <div class="mt-auto d-flex flex-row">
                <img v-bind:src="t.imgSmall" class="d-block d-lg-none testi-img-mobile me-3" alt="...">
                <div>
                  <b>{{t.name}}</b>
                  <p class="m-0 p-0 pt-1" v-html="t.position"></p>
                </div>
              </div>
            </div>
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
      testimonials: this.$store.getters.testimonials
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

b{
  font-size:20px;
  line-height:22px;
  color:#163665;
}

p{
  font-size:14px;
  line-height:16px;
  color: rgba(0,0,0,0.35);
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
