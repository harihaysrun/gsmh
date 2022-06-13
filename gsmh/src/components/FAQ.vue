<template>
  <div class="py-5">
    <h2 class="text-center">FAQ</h2>
    <div class="divider"></div>

    <div class="container events">

      <div class="tabs d-flex flex-row text-center m-auto">
        <div @click="changeTab(1)" :class="{active: tab === 1}">Residency</div>
        <div @click="changeTab(2)" :class="{active: tab === 2}">Application</div>
        <div @click="changeTab(3)" :class="{active: tab === 3}">Open House</div>
      </div>

      <div class="faq-content p-0 p-md-5">

        <Residency v-if="tab === 1"></Residency>
        <Application v-if="tab === 2"></Application>
        <OpenHouse v-if="tab === 3"></OpenHouse>

      </div>

    </div>
    

  </div>
</template>

<script>

import Residency from './FAQ-Residency.vue';
import Application from './FAQ-Application.vue';
import OpenHouse from './FAQ-OpenHouse.vue';

export default {
  name: 'FAQ-Section',
  components: {
    Residency, Application, OpenHouse
  },
  data:function(){
    return {
      'tab': 1
    }
  },
  methods:{
    changeTab:function(slideNo){
      console.log(slideNo)
      this.tab = slideNo;
    }
  }
}
</script>


<style>

h5{
  margin:0;
  color:#163665;
  font-weight:800;
}

.accordion-item{
  border:none;
  border-bottom: 1px solid #F0F0F0;
}

.accordion-button{
  background-color: white !important;
}

.collapsed h5{
  color:black;
  font-weight:400;
}

.accordion-button:not(.collapsed)::after, .accordion-button::after{
  background-size:75%;
  background-position: center;
}

.accordion-button:not(.collapsed)::after{
  background-image: url(@/assets/images/collapse-blue.png);
}

.accordion-button::after{
  background-image: url(@/assets/images/expand-black.png);
}

</style>


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

.tabs div{
  flex:1;
  padding-bottom:15px;
}

.tabs div:hover{
  color:#0F2C56;
  cursor:pointer;
}

.active{
  font-weight:700;
  color:#163665;
  border-bottom: 5px solid #163665 !important;
  z-index:2;
}

.faq-content{
  border-top: 1px solid rgb(22, 54, 101, 0.2);
}

@media only screen and (min-width:768px){


  .tabs {
    width:500px;
  }

  .faq-content{
    border: 1px solid rgb(22, 54, 101, 0.2);
    border-radius:10px;
  }

}

@media only screen and (min-width:1024px){

}

</style>