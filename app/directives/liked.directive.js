export default class likedDirective {
    constructor(storageService) {
        this.storageService = storageService;
        this.restrict = 'A';
        this.scope = {
            isLiked: '=liked'
        };
    }
    controller($scope, $state, storageService) {
        $scope.state = $state;
        $scope.service = storageService;
    }
    link(scope, element, attrs) {
        let liked = scope.service.getAllFavorites();
        if (liked.hasOwnProperty(scope.isLiked.idIMDB)) {
            element.addClass('liked');
        }
        element.bind('click', function() {
            if (element.hasClass('liked')) {
                return element.removeClass('liked');
            }
            element.addClass('liked');
        })
    }
};
