import Vector from '../vector';
import { Node } from './graph';
import TensorField from './tensor_field';
export interface PolygonParams {
    maxLength: number;
    minArea: number;
    shrinkSpacing: number;
    chanceNoDivide: number;
}
/**
 * Finds polygons in a graph, used for finding lots and parks
 */
export default class PolygonFinder {
    private nodes;
    private params;
    private tensorField;
    private _polygons;
    private _shrunkPolygons;
    private _dividedPolygons;
    private toShrink;
    private resolveShrink;
    private toDivide;
    private resolveDivide;
    constructor(nodes: Node[], params: PolygonParams, tensorField: TensorField);
    get polygons(): Vector[][];
    reset(): void;
    update(): boolean;
    /**
     * Properly shrink polygon so the edges are all the same distance from the road
     */
    shrink(animate?: boolean): Promise<void>;
    private stepShrink;
    divide(animate?: boolean): Promise<void>;
    private stepDivide;
    findPolygons(): void;
    private filterPolygonsByWater;
    private removePolygonAdjacencies;
    private recursiveWalk;
    private getRightmostNode;
}
