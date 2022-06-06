export type CountryStat = {
  coordinates: Coordinates;
  name: string;
  code: string;
  population: number;
  updated_at: string;
  latest_data: LatestData;
  today: TodayData;
  timeline: TimeLines;
};

export interface LatestData {
  confirmed: number;
  recovered: number;
  deaths: number;
  critical: number;
  calculated: CalculatedValues;
}

export interface Coordinaties {
  latitude: number;
  longitude: number;
}

export interface TodayData {
  deaths: number;
  confirmed: number;
}

export interface CalculatedValues {
  death_rate: number;
  recovery_rate: number;
  recovered_vs_death_ratio: number;
  cases_per_million_population: number;
}

export type TimeLines = Array<TimeLine>;

export interface TimeLine {
  updated_at: string;
  date: string;
  deaths: number;
  confirmed: number;
  active: number;
  recovered: number;
  new_confirmed: number;
  new_recovered: number;
  new_deaths: number;
  is_in_progress: boolean;
}

export type CountriesStats = Array<CountryStat>;

export interface FilteredStat {
  code: string;
  country: string;
  totalCases: number;
  deaths: number;
  recoveries: number;
}

export type FilteredStats = Array<FilteredStat>;