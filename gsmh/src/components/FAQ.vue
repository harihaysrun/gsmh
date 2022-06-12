<template>
  <div class="py-5">
    <h2 class="text-center">FAQ</h2>
    <div class="divider"></div>

    <div class="container p-0 events">

      <div class="tabs d-flex flex-row text-center">
        <div v-if="tab === 1" class="active" @click="changeTab(1)">Residency</div>
        <div v-else @click="changeTab(1)">Residency</div>
        <div v-if="tab === 2" class="active" @click="changeTab(2)">Application</div>
        <div v-else @click="changeTab(2)">Application</div>
        <div v-if="tab === 3" class="active" @click="changeTab(3)">Open House</div>
        <div v-else @click="changeTab(3)">Open House</div>
      </div>

      <div class="faq-content p-3 p-md-5">

        <div v-if="tab === 1">
          <Residency></Residency>
        </div>

        <div v-if="tab === 2">
          <Application></Application>
        </div>

        <div v-if="tab === 3">
          <OpenHouse></OpenHouse>
        </div>

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
  /* border-bottom: 1px solid rgb(22, 54, 101, 0.2); */
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


  .faq-content{
    border: 1px solid rgb(22, 54, 101, 0.2);
    border-radius:10px;
  }

}

@media only screen and (min-width:1024px){

}

</style>