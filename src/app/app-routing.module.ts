import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { LayoutModule } from './shopping/layout/layout.module';

const routes: Routes = [
  { path: 'to-do', loadChildren: () => import('./to-do-list/to-do-list.module').then(m => m.ToDoListModule) },
  {path:'',loadChildren:()=>import('./shopping/layout/layout.module').then((m)=>LayoutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
