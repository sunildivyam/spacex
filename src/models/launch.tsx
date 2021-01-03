export interface ILaunch {
    id: string;
    flightNumber: number;
    name: string;
    thumbnailImage: string;
    missionIds: Array<string>;
    launchYear?: number;
    successfulLaunch?: boolean;
    SuccessfulLanding?: boolean;
}

export interface ILaunches {
    launches: Array<ILaunch>;
    totalCount: number;
}

export class Launch implements ILaunch {
    public id: string;
    public flightNumber: number;
    public name: string;
    public thumbnailImage: string;
    public missionIds: Array<string>;
    public launchYear?: number;
    public successfulLaunch?: boolean;
    public SuccessfulLanding?: boolean;

    constructor(launch: ILaunch | any) {
        this.id = launch.id || launch._id;
        this.flightNumber = launch.flightNumber || launch.flight_number;
        this.name = launch.name || launch.mission_name;
        this.thumbnailImage = launch.thumbnailImage || (launch.links && launch.links.mission_patch_small);
        this.missionIds = launch.missionIds || launch.mission_id;
        this.launchYear = launch.launchYear || launch.launch_year;
        this.successfulLaunch = launch.successfulLaunch || launch.launch_success;
        this.SuccessfulLanding = launch.SuccessfulLanding || 
        (launch.rocket && 
        launch.rocket.first_stage && 
        launch.rocket.first_stage.cores && 
        launch.rocket.first_stage.cores[0] && 
        launch.rocket.first_stage.cores[0].land_success);
    }
}
