import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { UiControls } from './../../../core/models/pan-zoom/ui-controls.model';
import { IUiControls } from './../../../core/types';

@Component({
  selector: 'app-zoom-pan-workspace',
  templateUrl: './zoom-pan-workspace.component.html',
  styleUrls: ['./zoom-pan-workspace.component.scss']
})
export class ZoomPanWorkspaceComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { read: ElementRef }) canvas: ElementRef;

  // Workspace properties
  canvasEl: HTMLElement;

  // Controller instance
  panzoomController: IUiControls;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.canvasEl = this.canvas.nativeElement;

    const panZoomControl = new UiControls({
      minScale: 0.1,
      maxScale: 30,
      scaleSensitivity: 25,
      element: this.canvasEl,
    });

    // Get the instance of fhe controller
    this.panzoomController = panZoomControl.getInstance();
  }

  /**
   * Register mouse wheel event for zooming the canvas
   *
   * @param {WheelEvent} event
   * @returns
   * @memberof ZoomPanWorkspaceComponent
   */
  @HostListener('wheel', ['$event'])
  registerWheelEvent(event: WheelEvent) {
    event.preventDefault();

    // Control is pressed
    if (!event.ctrlKey) {
      return;
    }

    // Trigger zoom event
    this.panzoomController.zoom({
      pageX: event.pageX,
      pageY: event.pageY,
      deltaScale: Math.sign(event.deltaY) > 0 ? -1 : 1,
    });
  }

  /**
   * Register double click event for resetting the layout
   *
   * @memberof ZoomPanWorkspaceComponent
   */
  @HostListener('dblclick', ['$event'])
  resetViewEvent() {
    // Trigger pan event
    this.panzoomController.panTo({
      originX: 0,
      originY: 0,
      scale: 1,
    });
  }

  /**
   * Register mouse move event for registring the pan event
   *
   * @param {MouseEvent} event
   * @returns
   * @memberof ZoomPanWorkspaceComponent
   */
  @HostListener('mousemove', ['$event'])
  registerPanEvent(event: MouseEvent) {
    event.preventDefault();

    // Shift is pressed
    if (!event.shiftKey) {
      return;
    }

    // Trigger pan event
    this.panzoomController.panBy({
      originX: event.movementX,
      originY: event.movementY,
    });
  }

}
