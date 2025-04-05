import Vector from '../vector';
/**
 * Singleton
 * Controls panning and zooming
 */
export default class DomainController {
    private static instance;
    private readonly ZOOM_SPEED;
    private readonly SCROLL_DELAY;
    private _origin;
    private _screenDimensions;
    private _zoom;
    private zoomCallback;
    private lastScrolltime;
    private refreshedAfterScroll;
    private _cameraDirection;
    private _orthographic;
    moved: boolean;
    private constructor();
    /**
     * Used to stop drawing buildings while scrolling for certain styles
     * to keep the framerate up
     */
    get isScrolling(): boolean;
    private setScreenDimensions;
    static getInstance(): DomainController;
    /**
     * @param {Vector} delta in world space
     */
    pan(delta: Vector): void;
    /**
     * Screen origin in world space
     */
    get origin(): Vector;
    get zoom(): number;
    get screenDimensions(): Vector;
    /**
     * @return {Vector} world-space w/h visible on screen
     */
    get worldDimensions(): Vector;
    set screenDimensions(v: Vector);
    set zoom(z: number);
    onScreen(v: Vector): boolean;
    set orthographic(v: boolean);
    get orthographic(): boolean;
    set cameraDirection(v: Vector);
    get cameraDirection(): Vector;
    getCameraPosition(): Vector;
    setZoomUpdate(callback: () => any): void;
    /**
     * Edits vector
     */
    zoomToWorld(v: Vector): Vector;
    /**
     * Edits vector
     */
    zoomToScreen(v: Vector): Vector;
    /**
     * Edits vector
     */
    screenToWorld(v: Vector): Vector;
    /**
     * Edits vector
     */
    worldToScreen(v: Vector): Vector;
}
