import {Routes ,RouterModule} from '@angular/router';
import {AboutComponent} from '../about/about.component'
import { AdminComponent } from '../admin/admin.component';

export const routes :Routes = [{
    path:'',
    redirectTo: 'admin/edu',
    pathMatch: 'full'

},
{
    path:'home',
    loadChildren: './website.module#WebsiteModule'
},
{
    path:'admin',
    loadChildren: './admin.module#AdminModule'
}
]