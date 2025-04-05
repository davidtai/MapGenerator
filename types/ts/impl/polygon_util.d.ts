import Vector from '../vector';
export default class PolygonUtil {
    private static geometryFactory;
    /**
     * Slices rectangle by line, returning smallest polygon
     */
    static sliceRectangle(origin: Vector, worldDimensions: Vector, p1: Vector, p2: Vector): Vector[];
    /**
     * Used to create sea polygon
     */
    static lineRectanglePolygonIntersection(origin: Vector, worldDimensions: Vector, line: Vector[]): Vector[];
    static calcPolygonArea(polygon: Vector[]): number;
    /**
     * Recursively divide a polygon by its longest side until the minArea stopping condition is met
     */
    static subdividePolygon(p: Vector[], minArea: number): Vector[][];
    /**
     * Shrink or expand polygon
     */
    static resizeGeometry(geometry: Vector[], spacing: number, isPolygon?: boolean): Vector[];
    static averagePoint(polygon: Vector[]): Vector;
    static insidePolygon(point: Vector, polygon: Vector[]): boolean;
    static pointInRectangle(point: Vector, origin: Vector, dimensions: Vector): boolean;
    private static lineToJts;
    private static polygonToJts;
    /**
     * [ v.x, v.y, v.x, v.y ]...
     */
    private static polygonToPolygonArray;
    /**
     * [ v.x, v.y, v.x, v.y ]...
     */
    private static polygonArrayToPolygon;
}
