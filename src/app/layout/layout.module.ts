import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ZoomPanWorkspaceComponent } from './components/zoom-pan-workspace/zoom-pan-workspace.component';
import { CoreModule } from '../core/core.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ZoomPanWorkspaceComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
