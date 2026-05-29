import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiCardMedium } from '@taiga-ui/layout';

@Component({
  selector: 'app-disciplines',
  imports: [TuiCardMedium],
  templateUrl: './disciplines.html',
  styleUrl: './disciplines.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Disciplines {}
