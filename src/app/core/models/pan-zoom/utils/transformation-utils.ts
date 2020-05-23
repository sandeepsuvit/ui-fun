
/**
 * Utility class used by the ui controls implementations
 *
 * @export
 * @class TransformationUtils
 */
export class TransformationUtils {

    /**
     * Detect change in position
     *
     * @static
     * @param {number} pos
     * @param {number} prevPos
     * @returns
     * @memberof Utils
     */
    static hasPositionChanged(pos: number, prevPos: number) {
        return pos !== prevPos;
    }

    /**
     * Detect if the values are in range
     *
     * @static
     * @param {number} minScale
     * @param {number} maxScale
     * @param {number} scale
     * @returns
     * @memberof Utils
     */
    static valueInRange(minScale: number, maxScale: number, scale: number) {
        return scale <= maxScale && scale >= minScale;
    }

    /**
     * Get the new scale from the changed position
     *
     * @static
     * @param {number} scale
     * @param {number} minScale
     * @param {number} maxScale
     * @param {number} scaleSensitivity
     * @param {number} deltaScale
     * @returns
     * @memberof Utils
     */
    static getScale(
        scale: number,
        minScale: number,
        maxScale: number,
        scaleSensitivity: number,
        deltaScale: number,
    ) {
        let newScale = scale + (deltaScale / (scaleSensitivity / scale));
        newScale = Math.max(minScale, Math.min(newScale, maxScale));
        return [scale, newScale];
    }

    /**
     * Translates based on the scale parameters and returns a function
     *
     * @param {number} minScale
     * @param {number} maxScale
     * @param {number} scale
     * @returns
     * @memberof TransformationUtils
     */
    static getTranslate(minScale: number, maxScale: number, scale: number) {
        return (pos: number, prevPos: number, translate: number) => {
            return TransformationUtils.valueInRange(minScale, maxScale, scale) &&
                TransformationUtils.hasPositionChanged(pos, prevPos)
                ? translate + (pos - prevPos * scale) * (1 - 1 / scale)
                : translate;
        };
    }

    /**
     * Get the css matix value to be applied for the styles after
     * transformation has applied
     *
     * @static
     * @param {number} scale
     * @param {number} translateX
     * @param {number} translateY
     * @returns
     * @memberof TransformationUtils
     */
    static getMatrix(scale: number, translateX: number, translateY: number) {
        return `matrix(${scale}, 0, 0, ${scale}, ${translateX}, ${translateY})`;
    }
}
