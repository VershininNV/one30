import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { TuiBadge, TuiSkeleton } from '@taiga-ui/kit';
import { TuiCardMedium } from '@taiga-ui/layout';

@Component({
  selector: 'app-disciplines',
  imports: [TuiCardMedium, TuiSkeleton, TuiIcon, TuiBadge, TuiButton],
  templateUrl: './disciplines.html',
  styleUrl: './disciplines.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Disciplines {
  protected skeleton = true
}
