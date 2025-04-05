import Vector from '../vector';
export interface RoughOptions {
    roughness?: number;
    bowing?: number;
    seed?: number;
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    fillStyle?: string;
    fillWeight?: number;
    hachureAngle?: number;
    hachureGap?: number;
    dashOffset?: number;
    dashGap?: number;
    zigzagOffset?: number;
}
/**
 * Thin wrapper around HTML canvas, abstracts drawing functions so we can use the RoughJS canvas or the default one
 */
export default abstract class CanvasWrapper {
    private canvas;
    protected _scale: number;
    protected svgNode: any;
    protected _width: number;
    protected _height: number;
    needsUpdate: boolean;
    constructor(canvas: HTMLCanvasElement, _scale?: number, resizeToWindow?: boolean);
    protected appendSvgNode(node: any): void;
    createSVG(svgElement: any): void;
    abstract drawFrame(left: number, right: number, up: number, down: number): void;
    setDimensions(): void;
    get width(): number;
    get height(): number;
    get canvasScale(): number;
    set canvasScale(s: number);
    protected zoomVectors(vs: Vector[]): Vector[];
    protected resizeCanvas(): void;
}
export declare class DefaultCanvasWrapper extends CanvasWrapper {
    private ctx;
    private svg;
    constructor(canvas: HTMLCanvasElement, scale?: number, resizeToWindow?: boolean);
    createSVG(svgElement: any): void;
    setFillStyle(colour: string): void;
    clearCanvas(): void;
    drawFrame(left: number, right: number, up: number, down: number): void;
    drawCityName(): void;
    drawRectangle(x: number, y: number, width: number, height: number): void;
    drawPolygon(polygon: Vector[]): void;
    drawCircle(centre: Vector, radius: number): void;
    drawSquare(centre: Vector, radius: number): void;
    setLineWidth(width: number): void;
    setStrokeStyle(colour: string): void;
    drawPolyline(line: Vector[]): void;
}
export declare class RoughCanvasWrapper extends CanvasWrapper {
    private r;
    private rc;
    private options;
    constructor(canvas: HTMLCanvasElement, scale?: number, resizeToWindow?: boolean);
    createSVG(svgElement: any): void;
    drawFrame(left: number, right: number, up: number, down: number): void;
    setOptions(options: RoughOptions): void;
    clearCanvas(): void;
    drawRectangle(x: number, y: number, width: number, height: number): void;
    drawPolygon(polygon: Vector[]): void;
    drawSquare(centre: Vector, radius: number): void;
    drawPolyline(line: Vector[]): void;
}
