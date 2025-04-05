import DomainController from './domain_controller';
import FieldIntegrator from '../impl/integrator';
import { StreamlineParams } from '../impl/streamlines';
import StreamlineGenerator from '../impl/streamlines';
import Vector from '../vector';
/**
 * Handles creation of roads
 */
export default class RoadGUI {
    protected params: StreamlineParams;
    protected integrator: FieldIntegrator;
    protected guiFolder: dat.GUI;
    protected closeTensorFolder: () => void;
    protected folderName: string;
    protected redraw: () => void;
    protected _animate: boolean;
    protected streamlines: StreamlineGenerator;
    private existingStreamlines;
    protected domainController: DomainController;
    protected preGenerateCallback: () => any;
    protected postGenerateCallback: () => any;
    private streamlinesInProgress;
    constructor(params: StreamlineParams, integrator: FieldIntegrator, guiFolder: dat.GUI, closeTensorFolder: () => void, folderName: string, redraw: () => void, _animate?: boolean);
    initFolder(): RoadGUI;
    set animate(b: boolean);
    get allStreamlines(): Vector[][];
    get roads(): Vector[][];
    roadsEmpty(): boolean;
    setExistingStreamlines(existingStreamlines: RoadGUI[]): void;
    setPreGenerateCallback(callback: () => any): void;
    setPostGenerateCallback(callback: () => any): void;
    clearStreamlines(): void;
    generateRoads(animate?: boolean): Promise<unknown>;
    /**
     * Returns true if streamlines changes
     */
    update(): boolean;
    protected addDevParamsToFolder(params: StreamlineParams, folder: dat.GUI): void;
    /**
     * Sets path iterations so that a road can cover the screen
     */
    private setPathIterations;
}
