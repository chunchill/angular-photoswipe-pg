# An angular directive of photoswipe with pagination functionality

this directive is developered based on [angular-photoswipe](https://github.com/jsnmgpnty/angular-photoswipe) project which is a angular directive of [photoswipe](https://github.com/dimsemenov/PhotoSwipe).

What I have done is add the pagination functionality.

## Usage: ##

- step 1: add the reference JavaScript lib files

		<script src="lib/angularjs/angular.js" type="text/javascript"></script>
		<script src="lib/photoswipe/js/photoswipe.min.js" type="text/javascript"></script>
		<script src="lib/photoswipe/js/photoswipe-ui-default.min.js" type="text/javascript"></script>
		<script src="lib/ngPhotoswipe/angular-photoswipe.js" type="text/javascript"></script>
		<script src="lib/ngPhotoswipe/angular-photoswipe-pg.js" type="text/javascript"></script>

- step 2: prepare the service data for the directive.

		var app = angular.module('app', ['ngPhotoSwipe','ngPhotoSwipePg']);
		app.controller('imageController', ['$scope', '$window', function($scope, $window) {
			//mock the image source
			var imagesDataSource = [{
				src: 'http://hello.tongji.edu.cn/themes/267/userfiles/images/2015/8/7/source/exrlkssolbqn4xg.jpg',
				width: 895,
				height: 731,
				caption: 'image 1'
			}, {
				src: 'http://hello.tongji.edu.cn/themes/267/userfiles/images/2015/8/7/source/ovdoyheoszqy0oq.jpg',
				width: 895,
				height: 731,
				caption: 'image 2'
		
			}, {
				src: 'http://hello.tongji.edu.cn/themes/267/userfiles/images/2015/8/7/source/y5mvdsu3izmknfn.jpg',
				width: 895,
				height: 731,
				caption: 'image 3'
			}];
		
			$scope.images = imagesDataSource;
		}]);
		
- step 3: add the directive in the html page.

		<!-- Dat gallery -->
		<div ng-controller="imageController">
			<h2>Image gallery:</h2>
	        <div photo-swipepg datasource='images' class="image-thumbs" pagesize='2'></div>
		</div>
		
	    <!-- Dem photoswipe -->
		<div photo-slider></div>
	

for more details, please see the sample in my repository.