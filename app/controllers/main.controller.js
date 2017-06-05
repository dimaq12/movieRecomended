export default class mainController {
    constructor($log, dataService, localStorageService, storageService) {
        this.$log = $log;
        this.localStorageService = localStorageService;
        this.dataService = dataService;
        this.storageService = storageService;
        this.ifLocal = this.storageService.storageCheck();
        this.data = this.returnValue();
        this.preload = true;
        this.error = false;
    }
    returnValue(store) {
        if (this.ifLocal) {
            this.preload = false;
            return this.data = this.storageService.getLocalData()
        } else {
            this.dataService.getData()
                .then(response => {
                    this.preload = false;
                    this.data = response.data.data.movies.slice(0, 21);
                    this.ifLocalEmpty = false;
                }, response => this.error = true)
        }
    }
    $onInit(){
       if (this.ifLocal) {
            this.preload = false;
        } 
    }
    favorite(self) {
        this.storageService.pushFavorite(self);
    }
    loadImage(image) {
        return require('../images/' + image);
    };
};
