import Vector from '../vector';
import GridStorage from './grid_storage';
import FieldIntegrator from './integrator';
interface StreamlineIntegration {
    seed: Vector;
    originalDir: Vector;
    streamline: Vector[];
    previousDirection: Vector;
    previousPoint: Vector;
    valid: boolean;
}
export interface StreamlineParams {
    [key: string]: any;
    dsep: number;
    dtest: number;
    dstep: number;
    dcirclejoin: number;
    dlookahead: number;
    joinangle: number;
    pathIterations: number;
    seedTries: number;
    simplifyTolerance: number;
    collideEarly: number;
}
/**
 * Creates polylines that make up the roads by integrating the tensor field
 * See the paper 'Interactive Procedural Street Modeling' for a thorough explanation
 */
export default class StreamlineGenerator {
    protected integrator: FieldIntegrator;
    protected origin: Vector;
    protected worldDimensions: Vector;
    protected params: StreamlineParams;
    protected readonly SEED_AT_ENDPOINTS = false;
    protected readonly NEAR_EDGE = 3;
    protected majorGrid: GridStorage;
    protected minorGrid: GridStorage;
    protected paramsSq: StreamlineParams;
    protected nStreamlineStep: number;
    protected nStreamlineLookBack: number;
    protected dcollideselfSq: number;
    protected candidateSeedsMajor: Vector[];
    protected candidateSeedsMinor: Vector[];
    protected streamlinesDone: boolean;
    protected resolve: (() => void) | undefined;
    protected lastStreamlineMajor: boolean;
    allStreamlines: Vector[][];
    streamlinesMajor: Vector[][];
    streamlinesMinor: Vector[][];
    allStreamlinesSimple: Vector[][];
    /**
     * Uses world-space coordinates
     */
    constructor(integrator: FieldIntegrator, origin: Vector, worldDimensions: Vector, params: StreamlineParams);
    clearStreamlines(): void;
    /**
     * Edits streamlines
     */
    joinDanglingStreamlines(): void;
    /**
     * Returns array of points from v1 to v2 such that they are separated by at most dsep
     * not including v1
     */
    pointsBetween(v1: Vector, v2: Vector, dstep: number): Vector[];
    /**
     * Gets next best point to join streamline
     * returns null if there are no good candidates
     */
    getBestNextPoint(point: Vector, previousPoint: Vector, streamline: Vector[]): Vector | null;
    /**
     * Assumes s has already generated
     */
    addExistingStreamlines(s: StreamlineGenerator): void;
    setGrid(s: StreamlineGenerator): void;
    /**
     * returns true if state updates
     */
    update(): boolean;
    /**
     * All at once - will freeze if dsep small
     */
    createAllStreamlines(animate?: boolean): Promise<void>;
    protected simplifyStreamline(streamline: Vector[]): Vector[];
    /**
     * Finds seed and creates a streamline from that point
     * Pushes new candidate seeds to queue
     * @return {Vector[]} returns false if seed isn't found within params.seedTries
     */
    protected createStreamline(major: boolean): boolean;
    protected validStreamline(s: Vector[]): boolean;
    protected setParamsSq(): void;
    protected samplePoint(): Vector;
    /**
     * Tries this.candidateSeeds first, then samples using this.samplePoint
     */
    protected getSeed(major: boolean): Vector | null;
    protected isValidSample(major: boolean, point: Vector, dSq: number, bothGrids?: boolean): boolean;
    protected candidateSeeds(major: boolean): Vector[];
    protected streamlines(major: boolean): Vector[][];
    protected grid(major: boolean): GridStorage;
    protected pointInBounds(v: Vector): boolean;
    /**
     * Didn't end up using - bit expensive, used streamlineTurned instead
     * Stops spirals from forming
     * uses 0.5 dcirclejoin so that circles are still joined up
     * testSample is candidate to pushed on end of streamlineForwards
     * returns true if streamline collides with itself
     */
    protected doesStreamlineCollideSelf(testSample: Vector, streamlineForwards: Vector[], streamlineBackwards: Vector[]): boolean;
    /**
     * Tests whether streamline has turned through greater than 180 degrees
     */
    protected streamlineTurned(seed: Vector, originalDir: Vector, point: Vector, direction: Vector): boolean;
    /**
     * // TODO this doesn't work well - consider something disallowing one direction (F/B) to turn more than 180 deg
     * One step of the streamline integration process
     */
    protected streamlineIntegrationStep(params: StreamlineIntegration, major: boolean, collideBoth: boolean): void;
    /**
     * By simultaneously integrating in both directions we reduce the impact of circles not joining
     * up as the error matches at the join
     */
    protected integrateStreamline(seed: Vector, major: boolean): Vector[];
}
export {};
