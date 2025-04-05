import Tensor from './tensor';
import Vector from '../vector';
export declare const enum FIELD_TYPE {
    Radial = 0,
    Grid = 1
}
/**
 * Grid or Radial field to be combined with others to create the tensor field
 */
export declare abstract class BasisField {
    protected _size: number;
    protected _decay: number;
    abstract readonly FOLDER_NAME: string;
    abstract readonly FIELD_TYPE: number;
    protected static folderNameIndex: number;
    protected parentFolder: dat.GUI | undefined;
    protected folder: dat.GUI | undefined;
    protected _centre: Vector;
    constructor(centre: Vector, _size: number, _decay: number);
    set centre(centre: Vector);
    get centre(): Vector;
    set decay(decay: number);
    set size(size: number);
    dragStartListener(): void;
    dragMoveListener(delta: Vector): void;
    abstract getTensor(point: Vector): Tensor;
    getWeightedTensor(point: Vector, smooth: boolean): Tensor;
    setFolder(): void;
    removeFolderFromParent(): void;
    /**
     * Creates a folder and adds it to the GUI to control params
     */
    setGui(parent: dat.GUI, folder: dat.GUI): void;
    /**
     * Interpolates between (0 and 1)^decay
     */
    protected getTensorWeight(point: Vector, smooth: boolean): number;
}
export declare class Grid extends BasisField {
    private _theta;
    readonly FOLDER_NAME: string;
    readonly FIELD_TYPE = FIELD_TYPE.Grid;
    constructor(centre: Vector, size: number, decay: number, _theta: number);
    set theta(theta: number);
    setGui(parent: dat.GUI, folder: dat.GUI): void;
    getTensor(point: Vector): Tensor;
}
export declare class Radial extends BasisField {
    readonly FOLDER_NAME: string;
    readonly FIELD_TYPE = FIELD_TYPE.Radial;
    constructor(centre: Vector, size: number, decay: number);
    getTensor(point: Vector): Tensor;
}
