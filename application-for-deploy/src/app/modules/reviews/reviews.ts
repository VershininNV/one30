import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { TuiCardMedium, TuiSurface } from '@taiga-ui/layout';

@Component({
  selector: 'app-reviews',
  imports: [TuiCardMedium, TuiTitle, TuiSurface],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reviews {}
