
const generateYearsFilters = (start: number = 2006, end: number = 2020): Array<number> => {
    return [...new Array((end + 1) - start)].map((it, i) => (i + start));
}

export interface IFilters {
    years: Array<number>;
    selectedYear?: number;
    successfulLaunch?: boolean;
    successfulLanding?: boolean;
}

export const defaultFilters: IFilters = {
    years: generateYearsFilters(),
    selectedYear: 0,
    successfulLaunch: false,
    successfulLanding: false
}
