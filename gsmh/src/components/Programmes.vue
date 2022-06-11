<template>
  <div class="py-5">
    <h2 class="text-center">Our Residency Programmes</h2>
    <div class="divider"></div>

    <div class="container p-0 position-relative mb-3">
      <img class="programme-pic" src="@/assets/images/programmes.png" alt="">
      <div class="programme-details col-12 col-sm-11col-md-10 col-lg-9 position-absolute bottom-0 start-50 translate-middle-x m-auto p-3 d-flex flex-row justify-content-around text-center text-md-start">
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
      <div class="bg-warning p-4"></div>
    </div>

    <div class="container px-md-0 d-flex flex-column flex-md-row">
      <div class="bg-warning col-12 col-md-6 mb-3 mb-md-0 pe-md-2">
        <select v-model="programme_type" v-on:change="changeType" name="" id="" class="w-100 h-100">
          <option value="0">All Programmes</option>
          <option value="1">Junior Residency Programmes</option>
          <option value="2">Senior Residency Programmes</option>
        </select>
      </div>
      <div class="bg-warning col-12 col-md-6 ps-md-2">
        <input v-model="search" v-on:input="showProg" type="text" class="w-100 h-100">
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div v-for="t in test" v-bind:key="t.id" class="col-12 col-md-6 p-2">
          <div class="card">
            <img class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{t.title}}</h5>
              <p class="card-text">{{t.description}}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  </div>
</template>

<script>
export default {
  name: 'Programmes-Section',
  data:function(){
    return {
      'programme_type': 0,
      'search': '',
      'test': [
        {'title':'Nillili Mambo', 'description': 'lorem ipsum', 'type':2},
        {'title':'No Joke', 'description': 'lorem ipsum', 'type':1},
        {'title':'Her', 'description': 'lorem ipsum', 'type':1},
        {'title':'Nanlina', 'description': 'lorem ipsum', 'type':2}
      ]
    }
  },
  methods:{
    changeType:function(){
      this.test = [
        {'title':'Nillili Mambo', 'description': 'lorem ipsum', 'type':2},
        {'title':'No Joke', 'description': 'lorem ipsum', 'type':1},
        {'title':'Her', 'description': 'lorem ipsum', 'type':1},
        {'title':'Nanlina', 'description': 'lorem ipsum', 'type':2}
      ]
      if(this.programme_type != 0){
        // let newArray = JSON.parse(JSON.stringify(this.test));
        this.test = this.test.filter(prog => prog.type === parseInt(this.programme_type))
      }
    },
    showProg:function(){
      console.log(this.search)
      this.test = [
        {'title':'Nillili Mambo', 'description': 'lorem ipsum', 'type':2},
        {'title':'No Joke', 'description': 'lorem ipsum', 'type':1},
        {'title':'Her', 'description': 'lorem ipsum', 'type':1},
        {'title':'Nanlina', 'description': 'lorem ipsum', 'type':2}
      ]
      if(this.search){
        this.test = this.test.filter(prog => prog.title.toLowerCase().includes(this.search.toLowerCase()))
      }
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


@media only screen and (min-width:576px){

  .programme-details{
    border-radius:10px;
  }

  .programme-pic{
    border-radius:10px;
  }

}

</style>
