import CanvasWrapper from './canvas_wrapper';
import { DefaultCanvasWrapper, RoughCanvasWrapper } from './canvas_wrapper';
import DragController from './drag_controller';
import DomainController from './domain_controller';
import Vector from '../vector';
import { BuildingModel } from './buildings';
export interface ColourScheme {
    bgColour: string;
    bgColourIn?: string;
    buildingColour?: string;
    buildingSideColour?: string;
    buildingStroke?: string;
    seaColour: string;
    grassColour?: string;
    minorRoadColour: string;
    minorRoadOutline?: string;
    majorRoadColour?: string;
    majorRoadOutline?: string;
    mainRoadColour?: string;
    mainRoadOutline?: string;
    outlineSize?: number;
    minorWidth?: number;
    majorWidth?: number;
    mainWidth?: number;
    zoomBuildings?: boolean;
    buildingModels?: boolean;
    frameColour?: string;
    frameTextColour?: string;
}
/**
 * Controls how screen-space data is drawn
 */
export default abstract class Style {
    protected dragController: DragController;
    protected colourScheme: ColourScheme;
    protected canvas: CanvasWrapper | undefined;
    protected domainController: DomainController;
    abstract createCanvasWrapper(c: HTMLCanvasElement, scale: number, resizeToWindow: boolean): CanvasWrapper;
    abstract draw(canvas?: CanvasWrapper): void;
    update(): void;
    seaPolygon: Vector[];
    lots: Vector[][];
    buildingModels: BuildingModel[];
    parks: Vector[][];
    coastline: Vector[];
    river: Vector[];
    secondaryRiver: Vector[];
    minorRoads: Vector[][];
    majorRoads: Vector[][];
    mainRoads: Vector[][];
    coastlineRoads: Vector[][];
    showFrame: boolean | undefined;
    constructor(dragController: DragController, colourScheme: ColourScheme);
    set zoomBuildings(b: boolean);
    set showBuildingModels(b: boolean);
    get showBuildingModels(): boolean;
    set canvasScale(scale: number);
    get needsUpdate(): boolean;
    set needsUpdate(n: boolean);
}
export declare class DefaultStyle extends Style {
    private heightmap;
    constructor(c: HTMLCanvasElement, dragController: DragController, colourScheme: ColourScheme, heightmap?: boolean);
    createCanvasWrapper(c: HTMLCanvasElement, scale?: number, resizeToWindow?: boolean): CanvasWrapper;
    draw(canvas?: DefaultCanvasWrapper): void;
}
export declare class RoughStyle extends Style {
    private dragging;
    constructor(c: HTMLCanvasElement, dragController: DragController, colourScheme: ColourScheme);
    createCanvasWrapper(c: HTMLCanvasElement, scale?: number, resizeToWindow?: boolean): CanvasWrapper;
    update(): void;
    draw(canvas?: RoughCanvasWrapper): void;
}
