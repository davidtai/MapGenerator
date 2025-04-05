import Vector from '../vector';
/**
 * Cartesian grid accelerated data structure
 * Grid of cells, each containing a list of vectors
 */
export default class GridStorage {
    private worldDimensions;
    private origin;
    private dsep;
    private gridDimensions;
    private grid;
    private dsepSq;
    /**
     * worldDimensions assumes origin of 0,0
     * @param {number} dsep Separation distance between samples
     */
    constructor(worldDimensions: Vector, origin: Vector, dsep: number);
    /**
     * Add all samples from another grid to this one
     */
    addAll(gridStorage: GridStorage): void;
    addPolyline(line: Vector[]): void;
    /**
     * Does not enforce separation
     * Does not clone
     */
    addSample(v: Vector, coords?: Vector): void;
    /**
     * Tests whether v is at least d away from samples
     * Performance very important - this is called at every integration step
     * @param dSq=this.dsepSq squared test distance
     * Could be dtest if we are integrating a streamline
     */
    isValidSample(v: Vector, dSq?: number): boolean;
    /**
     * Test whether v is at least d away from vectors
     * Performance very important - this is called at every integration step
     * @param {number}   dSq     squared test distance
     */
    vectorFarFromVectors(v: Vector, vectors: Vector[], dSq: number): boolean;
    /**
     * Returns points in cells surrounding v
     * Results include v, if it exists in the grid
     * @param {number} returns samples (kind of) closer than distance - returns all samples in
     * cells so approximation (square to approximate circle)
     */
    getNearbyPoints(v: Vector, distance: number): Vector[];
    private worldToGrid;
    private gridToWorld;
    private vectorOutOfBounds;
    /**
     * @return {Vector}   Cell coords corresponding to vector
     * Performance important - called at every integration step
     */
    private getSampleCoords;
}
