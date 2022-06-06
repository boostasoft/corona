import {observable, action, runInAction, decorate} from 'mobx';
import {getAllCountriesStats, getCountryStats} from './../../api/requests';
import {
	CountriesStats,
	FilteredStats,
	FilteredStat,
	CountryStat,
} from './../../types/Stats';
import {translate} from './../../i18n';

class StatsStore {
	constructor() {
		//this.getStatsData();
		//.finally(() => {});
	}

	public countriesStats: CountriesStats = [];
	public filteredStats: FilteredStats = [];
	public countryStat: CountryStat | null = null;
	isLoading: boolean = true;
	hasError: boolean = false;
	cameroonIndex: number | null = null;
	filter: string = translate('statistics.filters.values.country');

	getStatsData = () => {
		this.hasError = false;
		this.isLoading = true;
		getAllCountriesStats()
			.then((response) => response.json())
			.then((json) => {
				runInAction(() => {
					this.countriesStats = json.data;
					this.filteredStats = this.filterCountryStats(this.countriesStats);
				});
				//console.log("date", json.data)
			})
			.then(() => {
				runInAction(() => {
					/*this.countriesStats.forEach((value: any, index: number) => {
						if (value.code == 'CM') {
				        	this.cameroonIndex = index;				      	}
					});*/
					if (this.filter == translate('statistics.filters.values.country')) {
						this.filterByName();
					} else if (
						this.filter == translate('statistics.filters.values.deaths')
					) {
						this.filterByDeaths();
					} else if (
						this.filter == translate('statistics.filters.values.recoveries')
					) {
						this.filterByRecoveries();
					} else if (
						this.filter == translate('statistics.filters.values.cases')
					) {
						this.filterByCases();
					}
				});
			})
			.catch((error) => {
				//console.log("json");
				runInAction(() => {
					this.hasError = true;
				});
			})
			.finally(() => {
				runInAction(() => {
					this.isLoading = false;
				});
			});

		//.finally(() => {});
	};

	getCountryStats = (code: string) => {
		this.countryStat = null;
		this.hasError = false;
		this.isLoading = true;
		getCountryStats(code)
			.then((response) => response.json())
			.then((json) => {
				runInAction(() => {
					this.countryStat = json.data;
					console.log(json.data.timeline)
				});
				//console.log("date", json.data)
			})
			.then(() => {})
			.catch((error) => {
				runInAction(() => {
					this.hasError = true;
				});
			})
			.finally(() => {
				runInAction(() => {
					this.isLoading = false;
				});
			});

		//.finally(() => {});
	};

	filterCountryStats = (array: CountriesStats) => {
		const filteredObjectArray: FilteredStats = [];
		array.forEach((value: any) => {
			const country = value.name;
			const totalCases = value.latest_data.confirmed;
			const deaths = value.latest_data.deaths;
			const recoveries = value.latest_data.recovered;
			const code = value.code;
			filteredObjectArray.push({
				country,
				totalCases,
				deaths,
				recoveries,
				code,
			});
		});
		return filteredObjectArray;
	};

	// Add
	reload() {
		this.filteredStats = [];
		this.getStatsData();
	}

	filterByName() {
		this.isLoading = true;
		const data = this.filteredStats;
		this.filteredStats = [];
		setTimeout(() => {
			this.filteredStats.replace(
				data.slice().sort((c1, c2) => {
					if (c1.country.toLowerCase() < c2.country.toLowerCase()) return -1;
					else if (c1.country.toLowerCase() > c2.country.toLowerCase())
						return 1;
					else return 0;
				}),
			);
			this.isLoading = false;
		}, 100);
	}
	filterByRecoveries() {
		this.isLoading = true;
		const data = this.filteredStats;
		this.filteredStats = [];
		setTimeout(() => {
			this.filteredStats.replace(
				data.slice().sort((c1, c2) => {
					if (c1.recoveries < c2.recoveries) return 1;
					else if (c1.recoveries > c2.recoveries) return -1;
					else return 0;
				}),
			);
			this.isLoading = false;
		}, 100);
	}
	filterByDeaths() {
		this.isLoading = true;
		const data = this.filteredStats;
		this.filteredStats = [];
		setTimeout(() => {
			this.filteredStats.replace(
				data.slice().sort((c1, c2) => {
					if (c1.deaths < c2.deaths) return 1;
					else if (c1.deaths > c2.deaths) return -1;
					else return 0;
				}),
			);
			this.isLoading = false;
		}, 100);
	}
	filterByCases() {
		this.isLoading = true;
		const data = this.filteredStats;
		this.filteredStats = [];
		setTimeout(() => {
			this.filteredStats.replace(
				data.slice().sort((c1, c2) => {
					if (c1.totalCases < c2.totalCases) return 1;
					else if (c1.totalCases > c2.totalCases) return -1;
					else return 0;
				}),
			);
			this.isLoading = false;
		}, 100);
	}

	setFilter(value: string) {
		this.filter = value;
	}

	setCountryStat(value: CountryStat | null) {
		this.countryStat = value;
	}
}

decorate(StatsStore, {
	countryStat: observable,
	countriesStats: observable,
	filteredStats: observable,
	hasError: observable,
	isLoading: observable,
	cameroonIndex: observable,
	getStatsData: action,
	getCountryStats: action,
});

export default new StatsStore();
