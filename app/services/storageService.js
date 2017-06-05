export default class storageService{
    constructor(localStorageService) {
    	this.localStorageService = localStorageService;
    	this.temp = {};
    }
    storageCheck() {
        if (this.localStorageService.get('data') != null) {
            return true;
        }
        return false;
    }
    getLocalData() {
        return this.localStorageService.get('data').movies.slice(0, 19);
    }
    pushFavorite(data){
    	if(this.temp.hasOwnProperty(data.item.idIMDB)){
    		 delete this.temp[data.item.idIMDB];
    		 return this.localStorageService.set('liked', this.temp);
    	}
    	this.temp[data.item.idIMDB] = data.item;
    	this.localStorageService.set('liked', this.temp);
    }
    getAllFavorites(){
    	if (this.localStorageService.get('liked') != null) {
            this.temp = this.localStorageService.get('liked');
        }
        return this.temp;
    }
}
