
export interface IPanControls {
    panTo(coordinates: ICoordinatesWithScale): any;
    panBy(coordinates: ICoordinates): any;
}

export interface IZoomControls {
    zoom(coordinates: IMouseCoordinatesWithScale): any;
}

export interface IUiControls extends IPanControls, IZoomControls { }

export interface IPanZoomOptions {
    minScale: number;
    maxScale: number;
    scaleSensitivity: number;
    element: HTMLElement;
}

export interface ITransformation {
    originX: number;
    originY: number;
    translateX: number;
    translateY: number;
    scale: number;
}

export interface IState extends IPanZoomOptions {
    transformation: ITransformation;
}

export interface IMouseCoordinatesWithScale {
    pageX: number;
    pageY: number;
    deltaScale: number;
}

export interface ICoordinates extends Pick<ITransformation, 'originX' | 'originY'> { }

export interface ICoordinatesWithScale extends Pick<ITransformation, 'originX' | 'originY' | 'scale'> { }
