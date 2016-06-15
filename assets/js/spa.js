  angular.module('Platzi', [] );
  angular.module('Platzi').controller( 'BaseCtrl', ['$scope', '$http', function ($scope, $http){
  

  // using socket.io
  io.socket.get('/emoji', function (data) {
     $scope.emojis = data;
     $scope.$apply();

  });

  io.socket.on('emoji', function (event) {
  	switch(event.verb) {
  		case 'created' : 
  			$scope.emojis.push(event.data);
  			$scope.$apply();
  			break;

  	}
  });


  // Just using http request  
  /*
  $http.get('/emoji').then(function (response) {
  	$scope.emojis = response.data;
  });
  */




	// Fake emojis
	/*
    $scope.emojis = [
      {
        id: 1,
        text : '=)'
      }, 
      {
        id: 2,
        text : '=('
      },
      {
        id: 3,
        text : '-)'
      },
      {
        id: 4,
        text : ':-)'
      },
    ];
    */


  }]);
