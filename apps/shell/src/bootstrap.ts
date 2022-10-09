import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { StateService } from '@fe-mf/state';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {
    path: 'mailbox',
    loadComponent: () =>
      import('mailbox/MailboxComponent').then((m) => m.MailboxComponent),
  },
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), StateService],
});
