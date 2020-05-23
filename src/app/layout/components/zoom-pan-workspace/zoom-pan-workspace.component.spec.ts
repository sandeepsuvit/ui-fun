import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomPanWorkspaceComponent } from './zoom-pan-workspace.component';

describe('ZoomPanWorkspaceComponent', () => {
  let component: ZoomPanWorkspaceComponent;
  let fixture: ComponentFixture<ZoomPanWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomPanWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomPanWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
