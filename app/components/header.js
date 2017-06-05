import templateUrl from './header.html';

export const movieHeader = {
    template: templateUrl,
    controllerAs: 'headerCtrl',
    controller: class headerController {
        constructor($location) {
            this.$location = $location;
        }
        getClass(path) {
            return (this.$location.path().substr(0, path.length) === path) ? 'active' : '';
        }
    }
}

