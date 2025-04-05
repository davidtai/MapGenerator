import Vector from '../vector';
/**
* Register multiple centre points
* Closest one to mouse click will be selected to drag
* Up to caller to actually move their centre point via callback
*/
export default class DragController {
    private gui;
    private readonly MIN_DRAG_DISTANCE;
    private draggables;
    private currentlyDragging;
    private _isDragging;
    private disabled;
    private domainController;
    constructor(gui: dat.GUI);
    setDragDisabled(disable: boolean): void;
    /**
     * Change cursor style
     */
    getCursor(action: any, interactable: any, element: any, interacting: boolean): string;
    dragStart(event: any): void;
    dragMove(event: any): void;
    dragEnd(): void;
    get isDragging(): boolean;
    /**
     * @param {(() => Vector)} Gets centre point
     * @param {((v: Vector) => void)} Called on move with delta vector
     * @param {(() => void)} Called on start
     * @returns {(() => void)} Function to deregister callback
     */
    register(getCentre: (() => Vector), onMove: ((v: Vector) => void), onStart: (() => void)): (() => void);
}
