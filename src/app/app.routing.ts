import { RouterModule, Routes } from '@angular/router';
// import { IaCompHeaderComponent } from './ia-comp-header/ia-comp-header.component';
// import { IaCompSidebarComponent } from './ia-comp-sidebar/src/ia-comp-sidebar.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
