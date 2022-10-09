import { Routes } from '@angular/router';

export const MailboxRoutes: Routes = [
  {
    path: 'mailbox',
    loadComponent: () =>
      import('./mailbox.component').then((m) => m.MailboxComponent),
  },
];
