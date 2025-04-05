import Tensor from './tensor';
import Vector from '../vector';
import { BasisField } from './basis_field';
export interface NoiseParams {
    globalNoise: boolean;
    noiseSizePark: number;
    noiseAnglePark: number;
    noiseSizeGlobal: number;
    noiseAngleGlobal: number;
}
/**
 * Combines basis fields
 * Noise added when sampling a point in a park
 */
export default class TensorField {
    noiseParams: NoiseParams;
    private basisFields;
    private noise;
    parks: Vector[][];
    sea: Vector[];
    river: Vector[];
    ignoreRiver: boolean;
    smooth: boolean;
    constructor(noiseParams: NoiseParams);
    /**
     * Used when integrating coastline and river
     */
    enableGlobalNoise(angle: number, size: number): void;
    disableGlobalNoise(): void;
    addGrid(centre: Vector, size: number, decay: number, theta: number): void;
    addRadial(centre: Vector, size: number, decay: number): void;
    protected addField(field: BasisField): void;
    protected removeField(field: BasisField): void;
    reset(): void;
    getCentrePoints(): Vector[];
    getBasisFields(): BasisField[];
    samplePoint(point: Vector): Tensor;
    /**
     * Noise Angle is in degrees
     */
    getRotationalNoise(point: Vector, noiseSize: number, noiseAngle: number): number;
    onLand(point: Vector): boolean;
    inParks(point: Vector): boolean;
}
