import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    },
    {
        path: 'works-list',
        loadChildren: () => import('./pages/works-list/works-list.module').then( m => m.WorksListPageModule)
    },
    {
      path: 'show/:id',
      loadChildren: () => import('./pages/show/show.module').then( m => m.ShowPageModule)
    },
    {
      path: 'favorites',
      loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
    },
    {
      path: 'add',
      loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
    },
    {
        path: 'not-found',
        loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
