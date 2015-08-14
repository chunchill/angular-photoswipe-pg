var app = angular.module('app', ['ngPhotoSwipe','ngPhotoSwipePg']);


//http://hello.tongji.edu.cn/themes/267/userfiles/images/2015/8/7/source/exrlkssolbqn4xg.jpg
//http://hello.tongji.edu.cn/themes/267/userfiles/images/2015/8/7/source/ovdoyheoszqy0oq.jpg
//http://hello.tongji.edu.cn/themes/267/userfiles/images/2015/8/7/source/y5mvdsu3izmknfn.jpg

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