export default class dataService {
    constructor($http, localStorageService) {
        this.$http = $http;
        this.localStorageService = localStorageService;
    }
    getData() {
    	let dataPromise = this.$http.jsonp('http://www.myapifilms.com/imdb/top?start=1970&end=2017&token=402d441c-2a55-481f-bad9-b430b294d27c&format=json&data=1');
    	dataPromise
    		.then(response => {
    			this.localStorageService.set('data', response.data.data);
    		});
        return dataPromise;
    }
}
