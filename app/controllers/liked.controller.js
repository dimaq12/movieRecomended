export default class likedController {
    constructor(dataService, localStorageService, storageService) {
    	this.localStorageService = localStorageService;
        this.dataService = dataService;
        this.storageService = storageService;
        this.data = this.returnValue();
    }
    returnValue() {
        return this.storageService.getAllFavorites();
    }
    favorite(self) {
        this.storageService.pushFavorite(self);
        this.data = this.storageService.getAllFavorites()
    }
};
