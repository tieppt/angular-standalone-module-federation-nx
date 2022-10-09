import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'fe-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class AppComponent {
  title = 'mailbox';
}
