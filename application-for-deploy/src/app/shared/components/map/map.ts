import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiDialog, TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'app-map',
  imports: [TuiButton, TuiDialog],
  templateUrl: './map.html',
  styleUrl: './map.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Map {
  protected open = false;
}
