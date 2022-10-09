import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, map, take } from 'rxjs';
import { StateService } from '@fe-mf/state';

@Component({
  selector: 'fe-mf-mailbox',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss'],
})
export class MailboxComponent implements OnInit {
  params$ = this.activatedRoute.queryParamMap.pipe(
    map((paramMap) => paramMap.get('page'))
  );
  stateService = inject(StateService);
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    fromEvent(window, 'reloadMailbox')
      .pipe(take(5))
      .subscribe((e) => {
        console.log('From Mailbox', e);
      });
  }
}
