import { ICoordinates, ICoordinatesWithScale, IPanControls, IState } from '../../../types';
import { getMatrix } from '../utils';

/**
 * Class to manage panning
 *
 * @export
 * @class PanControl
 */
export class PanControl {

    /**
     * Enable panning
     *
     * @private
     * @param {IState} state
     * @param {number} originX
     * @param {number} originY
     * @memberof Pan
     */
    private _pan(state: IState, originX: number, originY: number) {
        // Css translate position property
        state.transformation.translateX += originX;
        state.transformation.translateY += originY;

        // Transform css matrix property
        state.element.style.transform = getMatrix(
             state.transformation.scale,
             state.transformation.translateX,
             state.transformation.translateY
        );
    }

    /**
     * Enable pan options
     *
     * @param {IState} state
     * @returns {IPanControls}
     * @memberof PanControl
     */
    canPan(state: IState): IPanControls {
        return {
            // Pan by coordinates
            panBy: (origin: ICoordinates) => this._pan(
                state,
                origin.originX,
                origin.originY,
            ),
            // Pan by coordinates and scale
            panTo: (position: ICoordinatesWithScale) => {
                // Reset the scale to the factor specified
                state.transformation.scale = position.scale;
                // Pan to the position specified
                this._pan(
                    state,
                    position.originX - state.transformation.translateX,
                    position.originY - state.transformation.translateY,
                );
            },
        };
    }
}
