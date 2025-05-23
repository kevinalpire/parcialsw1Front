import { Routes } from '@angular/router';
// import { FigmaEditorComponent } from './canvas/components/figma-editor/figma-editor.component';
import { authRoutes } from './auth/auth.routes';
import { homeRoutes } from './home/home.routes';
import { authGuard } from './auth/guard';
import { FigmaEditorComponent } from './canvas/components/figma-editor/figma-editor.component';
import { roomRoutes } from './room/room.routes';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "auth",
    children: authRoutes
  },
  {
    path: "home",
    children: homeRoutes,
    canActivate: [
      authGuard
    ]
  },
  {
    path: "canva/:code",
    component: FigmaEditorComponent,
    canActivate: [
      authGuard
    ]
  },
  {
    path: "room",
    children: roomRoutes,
    canActivate: [
      authGuard
    ]
  }
];
