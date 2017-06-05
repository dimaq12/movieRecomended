export default class chartController {
    constructor(storageService, chartService) {
        this.storageService = storageService;
        this.chartService = chartService;
        // this.favorite = this.favorite(self);
    }
    $onInit(){
		this.favorite(self);
    }
    favorite(self) {
        let data = this.chartService.getData();
        this.labels = [];
		this.chartdata = [];
		setTimeout(() => {})
        this.labels = data.titles;
        this.chartdata = data.values;
    }
};
