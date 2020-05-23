import { IPanZoomOptions, IUiControls } from '../../types';
import { PanControl } from './controls/pan-control.model';
import { ZoomControl } from './controls/zoom-control.model';

/**
 * UI controller
 *
 * @export
 * @class UiControls
 */
export class UiControls {
    private options: IPanZoomOptions;

    constructor(options: IPanZoomOptions) {
        this.options = options;
    }

    /**
     * Get the instance of the pan zoom control class
     *
     * @returns {IUiControls}
     * @memberof PanZoomControl
     */
    getInstance(): IUiControls {
        const {
            element,
            minScale,
            maxScale,
            scaleSensitivity = 10, // Default if not set
        } = this.options;

        const state = {
            element,
            minScale,
            maxScale,
            scaleSensitivity,
            transformation: {
                originX: 0,
                originY: 0,
                translateX: 0,
                translateY: 0,
                scale: 1
            }
        };

        // Returns a new object of the control
        return Object.assign(
            {},
            new ZoomControl().canZoom(state),
            new PanControl().canPan(state)
        );
    }
}
