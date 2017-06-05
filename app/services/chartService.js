export default class chartService {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
    }
    getData() {
    	let primaryData = this.localStorageService.get('data').movies;
    	let values = [];
    	let titles = [];
    	for (var i = 2010; i >= 1970;  i = i - 10 ) {
    		values.push(primaryData.filter(elem => parseInt(elem.year) >= i && parseInt(elem.year) <= i + 9).length)
    		titles.push(i + "'s");
    	}
		return {
			values,
			titles
		}
    }
}