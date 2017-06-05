export default class chartController {
    constructor(storageService, chartService) {
        this.storageService = storageService;
        this.chartService = chartService;
    }
    $onInit(){
		this.favorite();
    }
    favorite() {
        let data = this.chartService.getData();
        this.labels = data.titles;
        this.chartdata = data.values;
    }
};
