import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryComponent } from './category/category.component';
import { ThreadComponent } from './thread/thread.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoriesListComponent
  },
  {
    path: 'category/:id',
    component: CategoryComponent
  },
  {
    path: 'category/:cId/thread/:tId',
    component: ThreadComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
