//Name of app
angular.module('firstApp', [])

.controller('mainController', function() {
  
  //Bind this this View Model
  var vm = this;
  vm.message = "Hey There";
  vm.computers = [
    { name: 'Macbook Pro', color: 'Silver', nedness: 7}
    { name: 'Yoga 2 Pro', color: 'Gray', nedness: 6},
    { name: 'Chromebook', color: 'Black', nedness: 5}
  ]
  
  
});