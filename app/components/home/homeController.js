angular.module('mainApp').controller('homeController', function($scope, $location,TmdbService){
	$scope.pageClass = 'page-home';
	
	$scope.searchQuery;
	$scope.searchResult;

	$scope.searchMoviePlease = function(movienametosearch,page){
		TmdbService.searchMovie(movienametosearch,page).then(function success(response){

			var moviesToDisplay = [];
			angular.forEach(response.data.results, function(item) {
					  
				if(item.title && item.vote_average && item.poster_path && item.genre_ids && item.release_date && item.overview){
					var movieItem = {
						'title':item.title,
						'vote_average':item.vote_average,
						'poster_path': TmdbService.getPosterPath(item.poster_path),
						'genre_ids':item.genre_ids,
						'release_date':item.release_date,
						'overview':item.overview
					}

						moviesToDisplay.push(movieItem);
				}
			});


			$scope.searchResult = moviesToDisplay
		});
	};

});	