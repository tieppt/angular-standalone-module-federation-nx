import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StateService } from '@fe-mf/state';

@Component({
  selector: 'fe-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, DatePipe, AsyncPipe],
})
export class AppComponent implements OnInit {
  title = 'shell';
  state = inject(StateService);
  ngOnInit() {
    window.addEventListener('reloadMailbox', (e) => {
      console.log('From Shell', (e as CustomEvent).detail);
    });
  }
  reloadMailbox() {
    const event = new CustomEvent('reloadMailbox', {
      detail: 'update something',
    });

    window.dispatchEvent(event);
    const d = new Date();
    d.setDate((Math.random() * 20) >> 0);
    this.state.data.next(d);
  }
}
