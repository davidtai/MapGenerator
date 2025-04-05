import TensorField from '../impl/tensor_field';
import Vector from '../vector';
import Style from './style';
import CanvasWrapper from './canvas_wrapper';
import { BuildingModel } from './buildings';
/**
 * Handles Map folder, glues together impl
 */
export default class MainGUI {
    private guiFolder;
    private tensorField;
    private closeTensorFolder;
    private numBigParks;
    private numSmallParks;
    private clusterBigParks;
    private domainController;
    private intersections;
    private bigParks;
    private smallParks;
    private animate;
    private animationSpeed;
    private coastline;
    private mainRoads;
    private majorRoads;
    private minorRoads;
    private buildings;
    private coastlineParams;
    private mainParams;
    private majorParams;
    private minorParams;
    private redraw;
    constructor(guiFolder: dat.GUI, tensorField: TensorField, closeTensorFolder: () => void);
    addParks(): void;
    generateEverything(): Promise<void>;
    update(): void;
    draw(style: Style, forceDraw?: boolean, customCanvas?: CanvasWrapper): void;
    roadsEmpty(): boolean;
    get seaPolygon(): Vector[];
    get riverPolygon(): Vector[];
    get buildingModels(): BuildingModel[];
    getBlocks(): Promise<Vector[][]>;
    get minorRoadPolygons(): Vector[][];
    get majorRoadPolygons(): Vector[][];
    get mainRoadPolygons(): Vector[][];
    get coastlinePolygon(): Vector[];
}
