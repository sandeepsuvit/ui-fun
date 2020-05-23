import { ICoordinates, ICoordinatesWithScale, IPanControls, IState } from '../../../types';
import { TransformationUtils } from '../utils/transformation-utils';

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
    private pan(state: IState, originX: number, originY: number) {
        // Css translate position property
        state.transformation.translateX += originX;
        state.transformation.translateY += originY;

        // Transform css matrix property
        state.element.style.transform = TransformationUtils.getMatrix(
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
            panBy: (origin: ICoordinates) => this.pan(state, origin.originX, origin.originY),
            panTo: (position: ICoordinatesWithScale) => {
                // Reset the scale to the factor specified
                state.transformation.scale = position.scale;
                // Pan to the position specified
                this.pan(
                    state,
                    position.originX - state.transformation.translateX,
                    position.originY - state.transformation.translateY,
                );
            },
        };
    }
}
