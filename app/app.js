import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from 'movie.routes.js'
export default angular.module('movieRecomended.pokemons', [uirouter])
  .config(routes)