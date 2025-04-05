import TensorField from './tensor_field';
import Vector from '../vector';
import { StreamlineParams } from './streamlines';
export default abstract class FieldIntegrator {
    protected field: TensorField;
    constructor(field: TensorField);
    abstract integrate(point: Vector, major: boolean): Vector;
    protected sampleFieldVector(point: Vector, major: boolean): Vector;
    onLand(point: Vector): boolean;
}
export declare class EulerIntegrator extends FieldIntegrator {
    private params;
    constructor(field: TensorField, params: StreamlineParams);
    integrate(point: Vector, major: boolean): Vector;
}
export declare class RK4Integrator extends FieldIntegrator {
    private params;
    constructor(field: TensorField, params: StreamlineParams);
    integrate(point: Vector, major: boolean): Vector;
}
