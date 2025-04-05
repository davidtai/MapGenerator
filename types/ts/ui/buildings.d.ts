import TensorField from '../impl/tensor_field';
import Vector from '../vector';
export interface BuildingModel {
    height: number;
    lotWorld: Vector[];
    lotScreen: Vector[];
    roof: Vector[];
    sides: Vector[][];
}
/**
 * Finds building lots and optionally pseudo3D buildings
 */
export default class Buildings {
    private tensorField;
    private redraw;
    private dstep;
    private _animate;
    private polygonFinder;
    private allStreamlines;
    private domainController;
    private preGenerateCallback;
    private postGenerateCallback;
    private _models;
    private _blocks;
    private buildingParams;
    constructor(tensorField: TensorField, folder: dat.GUI, redraw: () => void, dstep: number, _animate: boolean);
    set animate(v: boolean);
    get lots(): Vector[][];
    /**
     * Only used when creating the 3D model to 'fake' the roads
     */
    getBlocks(): Promise<Vector[][]>;
    get models(): BuildingModel[];
    setAllStreamlines(s: Vector[][]): void;
    reset(): void;
    update(): boolean;
    /**
     * Finds blocks, shrinks and divides them to create building lots
     */
    generate(animate: boolean): Promise<void>;
    setPreGenerateCallback(callback: () => any): void;
    setPostGenerateCallback(callback: () => any): void;
}
