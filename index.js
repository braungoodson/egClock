app
	.module('egClock',[])
	.directive('egClock',[function(){
		return {
			restrict: 'A',
			transclude: false,
			template: '',
			controller: 'ClockController'
		};
	}])
	.controller('ClockController',['$scope','$interval',function($scope,$interval){
		tick();
		$interval(tick,1000);
		function tick () {
			var date = new Date();
			var hours = date.getHours() % 12;
			var minutes = date.getMinutes();
			var seconds = date.getSeconds();
			var meridiem = hours >= 12 ? 'AM' : 'PM';
			minutes = minutes < 10 ? '0' + minutes : minutes;
			seconds = seconds < 10 ? '0' + seconds : seconds;
			date = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
			$scope.date = date;
			angular.element('.clock').toggleClass('tick',false);
			angular.element('.clock').toggleClass('tick',true);
		}
	}])
;