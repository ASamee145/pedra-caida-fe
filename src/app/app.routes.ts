import { Routes } from '@angular/router';
import { Home } from './pages/components/home/home';
import { MainPage } from './pages/components/main-page/main-page';

export const routes: Routes = [
  { path: '', component: MainPage, children: [{ path: '', component: Home }] },
];
