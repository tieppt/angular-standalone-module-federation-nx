import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { StateService } from '@fe-mf/state';
import { AppComponent } from './app/app.component';
import { MailboxRoutes } from './app/mailbox/routes';

import { environment } from './environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mailbox',
    pathMatch: 'full',
  },
  ...MailboxRoutes,
];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), StateService],
});
