import { DefaultCanvasWrapper } from './canvas_wrapper';
import DragController from './drag_controller';
import TensorField from '../impl/tensor_field';
import { NoiseParams } from '../impl/tensor_field';
import { BasisField } from '../impl/basis_field';
/**
 * Extension of TensorField that handles interaction with dat.GUI
 */
export default class TensorFieldGUI extends TensorField {
    private guiFolder;
    private dragController;
    drawCentre: boolean;
    private TENSOR_LINE_DIAMETER;
    private TENSOR_SPAWN_SCALE;
    private domainController;
    constructor(guiFolder: dat.GUI, dragController: DragController, drawCentre: boolean, noiseParams: NoiseParams);
    /**
     * 4 Grids, one radial
     */
    setRecommended(): void;
    addRadialRandom(): void;
    addGridRandom(): void;
    private addGridAtLocation;
    /**
     * World-space random location for tensor field spawn
     * Sampled from middle of screen (shrunk rectangle)
     */
    private randomLocation;
    private getCrossLocations;
    private getTensorLine;
    draw(canvas: DefaultCanvasWrapper): void;
    protected addField(field: BasisField): void;
    private removeFieldGUI;
    reset(): void;
}
