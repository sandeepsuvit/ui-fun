import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoomPanWorkspaceComponent } from './components/zoom-pan-workspace/zoom-pan-workspace.component';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        { path: 'home', component: HomeComponent },
        { path: 'zoom-pan', component: ZoomPanWorkspaceComponent },
        { path: '', pathMatch: 'full', redirectTo: '/home' }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
