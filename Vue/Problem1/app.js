Vue.component('app-hobby',{
	props: ['hobby'],
  template: '<li v-on:click="removeHobby">{{hobby}}</li>',
  methods: {
  
  	removeHobby: function() {
    	this.$emit('hobbyremoved', this.hobby)
    }
  }
});


new Vue({
	
  el: '#app',
  data: {
  
    hobbies: ['Sports', 'Gaming', 'Basket'],
    userHobby: '',
    hobbyWasDeleted: false
  
  },
  methods: {
  	addHobby: function(){
    	this.hobbyWasDeleted = false;
    	this.hobbies.push(this.userHobby);
      this.userHobby = '';
      
    },
    removeHobby: function(hobby){
    	var pos = this.hobbies.indexOf(hobby);
      this.hobbies.splice(pos, 1);
      this.hobbyWasDeleted = true;
      
      
    }
  }

});