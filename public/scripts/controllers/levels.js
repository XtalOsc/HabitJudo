myApp.controller("level",["$scope","$http",function($scope,$http){
  console.log('in level controller');

  $scope.levels =[];
  $scope.viewLevels = function(){
    if(verbose){console.log('in viewLevels');};

    //get all levels from database
    $http({
      method:'GET',
      url: '/viewLevels'
    }).then(function(response){
      if(verbose){console.log("response from server:",response.data);};
      $scope.levels=response.data;
    })//end /viewLevels return
  };//end viewLevels function
  $scope.viewLevels();

}]);//end level controller
