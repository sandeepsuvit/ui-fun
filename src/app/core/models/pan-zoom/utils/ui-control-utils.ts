
/**
 * Utility class used by the ui controls implementations
 *
 * @export
 * @param {number} pos
 * @param {number} prevPos
 * @returns
 */
export function hasPositionChanged(pos: number, prevPos: number) {
    return pos !== prevPos;
}

/**
 * Detect if the values are in range
 *
 * @export
 * @param {number} minScale
 * @param {number} maxScale
 * @param {number} scale
 * @returns
 */
export function valueInRange(minScale: number, maxScale: number, scale: number) {
    return scale <= maxScale && scale >= minScale;
}

/**
 * Get the new scale from the changed position
 *
 * @export
 * @param {number} scale
 * @param {number} minScale
 * @param {number} maxScale
 * @param {number} scaleSensitivity
 * @param {number} deltaScale
 * @returns
 */
export function getScale(
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
 * Note: This method has a higher order function call that returns a function
 *
 * @export
 * @param {number} minScale
 * @param {number} maxScale
 * @param {number} scale
 * @returns
 */
export function getTranslate(minScale: number, maxScale: number, scale: number) {
    return (pos: number, prevPos: number, translate: number) => {
        return valueInRange(minScale, maxScale, scale) &&
            hasPositionChanged(pos, prevPos)
            ? translate + (pos - prevPos * scale) * (1 - 1 / scale)
            : translate;
    };
}

/**
 * Get the css matix value to be applied for the styles after
 * transformation has applied
 *
 * @export
 * @param {number} scale
 * @param {number} translateX
 * @param {number} translateY
 * @returns
 */
export function getMatrix(scale: number, translateX: number, translateY: number) {
    return `matrix(${scale}, 0, 0, ${scale}, ${translateX}, ${translateY})`;
}
