angular.module('mainApp').service('TmdbService', ['$http',function($http){

	var apikey = 'f6094e71e9a97c166acb01948bcf9dfb';

	var baseUrl = 'https://api.themoviedb.org/3';


	var baseUrlImage = "http://image.tmdb.org/t/p/w300";


	this.searchMovie = function(movieName,page){

		return $http.get(baseUrl + '/search/movie',{params: {'api_key': apikey, 'include_adult': true, 'query': movieName,'page':page}});

	    // return $http.get('assets/json_mocks/userinfo/mockDataNaruto.json');

	};

	this.getPosterPath = function(imageFileName){

		return baseUrlImage + imageFileName;

	};

}]);