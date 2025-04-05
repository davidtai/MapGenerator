import Vector from '../vector';
declare module 'isect' {
    function bush(lines: Segment[]): DetectIntersections;
}
interface DetectIntersections {
    run: () => Intersection[];
}
interface Segment {
    from: Vector;
    to: Vector;
}
interface Intersection {
    point: Vector;
    segments: Segment[];
}
/**
 * Node located along any intersection or point along the simplified road polylines
 */
export declare class Node {
    value: Vector;
    neighbors: Set<Node>;
    segments: Set<Segment>;
    adj: Node[];
    constructor(value: Vector, neighbors?: Set<Node>);
    addSegment(segment: Segment): void;
    addNeighbor(node: Node): void;
}
export default class Graph {
    nodes: Node[];
    intersections: Vector[];
    /**
     * Create a graph from a set of streamlines
     * Finds all intersections, and creates a list of Nodes
     */
    constructor(streamlines: Vector[][], dstep: number, deleteDangling?: boolean);
    /**
     * Remove dangling edges from graph to facilitate polygon finding
     */
    private deleteDanglingNodes;
    /**
     * Given a segment, step along segment and find all nodes along it
     */
    private getNodesAlongSegment;
    private fuzzySegmentsEqual;
    private dotProductToSegment;
    private fuzzyAddToQuadtree;
    private streamlinesToSegment;
    private vectorsToSegment;
}
export {};
