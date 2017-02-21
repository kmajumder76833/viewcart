var myApp= angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http,$window){

	console.log("hello world from Cart");
     $scope.tr=false;
	$scope.cartlist=[];
	/*$scope.cartList;*/

    $scope.refresh = function(){
     $http.get('/cartlist').then(function(response){
     	console.log(response.data);
     	$scope.cartlist=response.data;
     	
     },function(){
     	console.log("ERROR");
     });
 
};

$scope.refresh();
 

    /* $scope.show = function(){
          $http.get('/cartlist').then(function(response){
          console.log("here1");    
                      $scope.tr=true;  
          console.log(response.data);
          $scope.cartlist=response.data;
          
     },function(){
          console.log("ERROR");
     });

     	
};*/

$scope.addtoCart = function(){
     console.log($scope.cartlist);
               $http.post('/cartlist',$scope.cartlist).then(function(response){
                    console.log(response);
                    $window.alert("you have submitted successfully");
               },function(){
                    console.log("Error in adding");
               });
    }


$scope.viewCart = function(){
     console.log("here");
               if($scope.tr==false){
                    
                    $http.get('/cartlist').then(function(response){
                    console.log($scope.tr);
                    $scope.cartlist=response.data;  
                    $scope.tr=true;        
                    },function(){
                         console.log("Error");
                         });
               }
               else{
                    $scope.tr=false;
               }
     
    }
	
}]);
