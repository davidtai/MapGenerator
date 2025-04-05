import Vector from '../vector';
export default class Tensor {
    private r;
    private matrix;
    private oldTheta;
    private _theta;
    constructor(r: number, matrix: number[]);
    static fromAngle(angle: number): Tensor;
    static fromVector(vector: Vector): Tensor;
    static get zero(): Tensor;
    get theta(): number;
    add(tensor: Tensor, smooth: boolean): Tensor;
    scale(s: number): Tensor;
    rotate(theta: number): Tensor;
    getMajor(): Vector;
    getMinor(): Vector;
    private calculateTheta;
}
