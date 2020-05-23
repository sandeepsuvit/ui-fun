import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ZoomPanWorkspaceComponent } from './components/zoom-pan-workspace/zoom-pan-workspace.component';
import { HomeComponent } from './home/home.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ZoomPanWorkspaceComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
