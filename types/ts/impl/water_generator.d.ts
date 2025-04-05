import Vector from '../vector';
import FieldIntegrator from './integrator';
import StreamlineGenerator from './streamlines';
import { StreamlineParams } from './streamlines';
import TensorField from './tensor_field';
export interface WaterParams extends StreamlineParams {
    coastNoise: NoiseStreamlineParams;
    riverNoise: NoiseStreamlineParams;
    riverBankSize: number;
    riverSize: number;
}
export interface NoiseStreamlineParams {
    noiseEnabled: boolean;
    noiseSize: number;
    noiseAngle: number;
}
/**
 * Integrates polylines to create coastline and river, with controllable noise
 */
export default class WaterGenerator extends StreamlineGenerator {
    protected params: WaterParams;
    private tensorField;
    private readonly TRIES;
    private coastlineMajor;
    private _coastline;
    private _seaPolygon;
    private _riverPolygon;
    private _riverSecondaryRoad;
    constructor(integrator: FieldIntegrator, origin: Vector, worldDimensions: Vector, params: WaterParams, tensorField: TensorField);
    get coastline(): Vector[];
    get seaPolygon(): Vector[];
    get riverPolygon(): Vector[];
    get riverSecondaryRoad(): Vector[];
    createCoast(): void;
    createRiver(): void;
    /**
     * Assumes simplified
     * Used for adding river roads
     */
    private manuallyAddStreamline;
    /**
     * Might reverse input array
     */
    private getSeaPolygon;
    /**
     * Insert samples in streamline until separated by dstep
     */
    private complexifyStreamline;
    private complexifyStreamlineRecursive;
    /**
     * Mutates streamline
     */
    private extendStreamline;
    private reachesEdges;
    private vectorOffScreen;
}
