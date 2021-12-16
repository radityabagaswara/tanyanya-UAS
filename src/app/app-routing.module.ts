import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailpostComponent } from './components/detailpost/detailpost.component';
import { EditpostComponent } from './components/editpost/editpost.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'app',
    component: AppComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'detailpost/:id',
    component: DetailpostComponent,
    // loadChildren: () =>
    //   import('./detailpost/detailpost.module').then(
    //     (m) => m.DetailpostPageModule
    //   ),
  },
  {
    path: 'editpost/:id',
    component: EditpostComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
