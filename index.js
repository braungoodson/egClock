angular
	.module('egClock',[])
	.directive('egClock',[function(){
		return {
			restrict: 'A',
			transclude: false,
			template: '<div class="container clock tick"><center><h1><strong>{{date}}</strong></h1></center></div>',
			controller: 'ClockController'
		};
	}])
	.controller('ClockController',['$scope','$interval',function($scope,$interval){
		tick();
		$interval(tick,1000);
		function tick () {
			var date = new Date();
			var hours = date.getHours();
			var minutes = date.getMinutes();
			var seconds = date.getSeconds();
			var meridiem;
			switch (hours) {
				case 23: hours = "11"; meridiem = "PM"; break;
				case 22: hours = "10"; meridiem = "PM"; break;
				case 21: hours = "09"; meridiem = "PM"; break;
				case 20: hours = "08"; meridiem = "PM"; break;
				case 19: hours = "07"; meridiem = "PM"; break;
				case 18: hours = "06"; meridiem = "PM"; break;
				case 17: hours = "05"; meridiem = "PM"; break;
				case 16: hours = "04"; meridiem = "PM"; break;
				case 15: hours = "03"; meridiem = "PM"; break;
				case 14: hours = "02"; meridiem = "PM"; break;
				case 13: hours = "01"; meridiem = "PM"; break;
				case 12: hours = "12"; meridiem = "PM"; break;
				case 11: hours = "11"; meridiem = "AM"; break;
				case 10: hours = "10"; meridiem = "AM"; break;
				case 9: hours = "09"; meridiem = "AM"; break;
				case 8: hours = "08"; meridiem = "AM"; break;
				case 7: hours = "07"; meridiem = "AM"; break;
				case 6: hours = "06"; meridiem = "AM"; break;
				case 5: hours = "05"; meridiem = "AM"; break;
				case 4: hours = "04"; meridiem = "AM"; break;
				case 3: hours = "03"; meridiem = "AM"; break;
				case 2: hours = "02"; meridiem = "AM"; break;
				case 1: hours = "01"; meridiem = "AM"; break;
				case 0: hours = "12"; meridiem = "AM"; break;
				default: hours = undefined;
			}
			minutes = minutes < 10 ? '0' + minutes : minutes;
			seconds = seconds < 10 ? '0' + seconds : seconds;
			date = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
			$scope.date = date;
			angular.element('.clock').toggleClass('tick',false);
			angular.element('.clock').toggleClass('tick',true);
		}
	}])
;