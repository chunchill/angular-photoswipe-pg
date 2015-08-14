var ngPhotoSwipePg = angular.module('ngPhotoSwipePg', ['ngPhotoSwipe']);


ngPhotoSwipePg
	.directive('photoSwipepg', ['$window', function($window) {

		var template = '<button ng-click="pervious()">pervious</button>' +
			'<button ng-click="next()">next</button>' +
			'<div id="photoswipe" photo-swipe images="images"></div>';

		return {
			restrict: 'EA',
			scope: {
				datasource: '=',
				pagesize:'@'
			},
			controller: function($scope) {
				var screenSize = function(width, height) {
					var x = width ? width : $window.innerWidth;
					var y = height ? height : $window.innerHeight;

					return x + 'x' + y;
				};
				$scope.images = [];
				$scope.pageSize = parseInt($scope.pagesize); //count of images for each screen page
				$scope.currentPageIndex = 1; //start from page 1
				$scope.totalItemsCount = $scope.datasource.length; //total count of images 
				$scope.startIndex = 0; //the start index of the image source

				//get the next page
				$scope.next = function() {

					if ($scope.currentPageIndex * $scope.pageSize < $scope.totalItemsCount) {
						$scope.startIndex = $scope.currentPageIndex * $scope.pageSize;
						$scope.currentPageIndex += 1;
					} else {
						$scope.currentPageIndex = 1;
						$scope.startIndex = 0;
					}
					setImageItems(false);
				}

				//get the previous page
				$scope.pervious = function() {
					if ($scope.currentPageIndex == 1) {
						$scope.currentPageIndex = Math.round($scope.totalItemsCount / $scope.pageSize);
						$scope.startIndex = ($scope.currentPageIndex - 1) * $scope.pageSize;
					} else {

						$scope.startIndex = ($scope.currentPageIndex - 2) * $scope.pageSize;
						$scope.currentPageIndex -= 1;
					}
					setImageItems(false);
				}

				function setImageItems(isInit) {
					$scope.images = [];
					var image;

					if (isInit) {
						$scope.startIndex = 0;
					}

					for (var i = $scope.startIndex; i < $scope.startIndex + $scope.pageSize; i++) {
						if (i < $scope.totalItemsCount) {
							image = {
								src: $scope.datasource[i].src,
								safeSrc: $scope.datasource[i].src,
								thumb: $scope.datasource[i].src,
								caption: $scope.datasource[i].caption,
								size: screenSize($scope.datasource[i].width, $scope.datasource[i].height),
								type: 'image'
							}
							$scope.images.push(image);
						}
					}
				}

				$scope.init = function() {
					$scope.currentPageIndex = 1;
					setImageItems(true);
				}

			},
			template: template,
			link: link
		};


		function link(scope, element, attrs) {
			scope.init();
		}
	}]);