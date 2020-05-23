import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoomPanWorkspaceComponent } from './components/zoom-pan-workspace/zoom-pan-workspace.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        { path: 'zoom-pan', component: ZoomPanWorkspaceComponent },
        { path: '', pathMatch: 'full', redirectTo: '/zoom-pan' }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
