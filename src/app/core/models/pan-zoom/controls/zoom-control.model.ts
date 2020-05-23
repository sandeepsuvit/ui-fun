import { IMouseCoordinatesWithScale, IState, IZoomControls } from '../../../types';
import { getMatrix, getScale, getTranslate } from '../utils';

/**
 * Class to manage zooming in and zooming out
 *
 * @export
 * @class ZoomControl
 */
export class ZoomControl {

    /**
     * Enable zoom setting
     *
     * @param {IState} state
     * @returns {IZoomControls}
     * @memberof ZoomControl
     */
    canZoom(state: IState): IZoomControls {
        return {
            zoom: (coordinates: IMouseCoordinatesWithScale) => {
                const { left, top } = state.element.getBoundingClientRect();
                const { minScale, maxScale, scaleSensitivity } = state;

                // Get scale transforms
                const [scale, newScale] = getScale(
                    state.transformation.scale,
                    minScale,
                    maxScale,
                    scaleSensitivity,
                    coordinates.deltaScale,
                );

                // Get the origin
                const originX = coordinates.pageX - left;
                const originY = coordinates.pageY - top;

                // Form the new origin
                const newOriginX = originX / scale;
                const newOriginY = originY / scale;

                // Get the translate function with properties set
                const translate = getTranslate(minScale, maxScale, scale);

                const translateX = translate(originX, state.transformation.originX, state.transformation.translateX);
                const translateY = translate(originY, state.transformation.originY, state.transformation.translateY);

                state.element.style.transformOrigin = `${newOriginX}px ${newOriginY}px`;
                state.element.style.transform = getMatrix(newScale, translateX, translateY);

                // Updated transformation data
                state.transformation = {
                    originX: newOriginX,
                    originY: newOriginY,
                    translateX,
                    translateY,
                    scale: newScale
                };
            },
        };
    }
}
