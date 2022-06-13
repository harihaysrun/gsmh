<template>
    <div class="accordion mt-3 mt-md-0" id="accordionPanelsStayOpenExample">
      <div v-for="f in faq" v-bind:key="f.id" class="accordion-item">
        <div class="accordion-header" :id="f.headerId">
          <button class="accordion-button p-0 collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="f.target">
            <h5 class="py-4">{{f.title}}</h5>
          </button>
        </div>
        <div :id="f.targetId" class="accordion-collapse collapse">
          <div class="accordion-body p-0 py-4">
            {{f.description}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'FAQ-Residency',
  data:function(){
    return {
      'programme_type': 0,
      'search': '',
      'faq': this.$store.getters.faqResidency
    }
  }
}
</script>

<style scoped>

h2{
  color:#163665;
  font-weight:800;
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