import FieldIntegrator from '../impl/integrator';
import { StreamlineParams } from '../impl/streamlines';
import { WaterParams } from '../impl/water_generator';
import WaterGenerator from '../impl/water_generator';
import Vector from '../vector';
import RoadGUI from './road_gui';
import TensorField from '../impl/tensor_field';
/**
 * Handles generation of river and coastline
 */
export default class WaterGUI extends RoadGUI {
    private tensorField;
    protected params: WaterParams;
    protected streamlines: WaterGenerator;
    constructor(tensorField: TensorField, params: WaterParams, integrator: FieldIntegrator, guiFolder: dat.GUI, closeTensorFolder: () => void, folderName: string, redraw: () => void);
    initFolder(): WaterGUI;
    generateRoads(): Promise<void>;
    /**
     * Secondary road runs along other side of river
     */
    get streamlinesWithSecondaryRoad(): Vector[][];
    get river(): Vector[];
    get secondaryRiver(): Vector[];
    get coastline(): Vector[];
    get seaPolygon(): Vector[];
    protected addDevParamsToFolder(params: StreamlineParams, folder: dat.GUI): void;
}
