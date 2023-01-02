import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
 { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule), canActivate: [AuthGuard] },
 {
   path: '',
   redirectTo: 'tasks',
   pathMatch: 'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
