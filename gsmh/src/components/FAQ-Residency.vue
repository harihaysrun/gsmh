<template>
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div v-for="(t, index) of test" v-bind:key="t.id" class="accordion-item">
        <h2 class="accordion-header" :id="t.headerId">
          <button class="accordion-button" :class="{collapsed: index != 0}" type="button" data-bs-toggle="collapse" :data-bs-target="t.target">
            {{t.title}}
          </button>
        </h2>
        <div :id="t.targetId" class="accordion-collapse" :class="{collapse: index === 0, show: index === 0, collapse: index != 0}">
          <div class="accordion-body">
            {{t.description}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'FAQ-Section',
  data:function(){
    return {
      'programme_type': 0,
      'search': '',
      'test': [
        {'title':'Nillili Mambo', 'description': 'lorem ipsum', 'target': '#panelsStayOpen-collapseOne', 'targetId': 'panelsStayOpen-collapseOne', 'headerId': 'panelsStayOpen-headingOne'},
        {'title':'No Joke', 'description': 'lorem ipsum', 'target': '#panelsStayOpen-collapseTwo', 'targetId': 'panelsStayOpen-collapseTwo', 'headerId': 'panelsStayOpen-headingTwo'},
        {'title':'Her', 'description': 'lorem ipsum', 'target': '#panelsStayOpen-collapseThree', 'targetId': 'panelsStayOpen-collapseThree', 'headerId': 'panelsStayOpen-headingThree'}
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