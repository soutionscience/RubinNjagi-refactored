import {Routes ,RouterModule} from '@angular/router';
import {AboutComponent} from '../about/about.component'

export const routes :Routes = [{
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'

},
{
    path:'home',
    component: AboutComponent
}]