import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiCheckbox, TuiExpand, TuiIcon, TuiLink, TuiTitle } from '@taiga-ui/core';
import { TuiBadge, TuiChevron, TuiChip } from '@taiga-ui/kit';
import { TuiCard, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-constructor',
  imports: [TuiButton, TuiCard, TuiChevron, TuiExpand, TuiHeader, TuiTitle, TuiCheckbox, TuiChip, ReactiveFormsModule, FormsModule, TuiBadge],
  templateUrl: './constructor.html',
  styleUrl: './constructor.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Constructor {
  public readonly collapsed = signal(true);

  public readonly total = signal(5000);

  protected readonly checked = [false, false, false, false, false];
  protected readonly names = ['Обруч', 'Мяч', 'Лента', 'Булавы', 'Без предмета'];

  protected form = new FormGroup({
    musicSelect: new FormControl(false),
    musicCut: new FormControl(false),
    scoreCount: new FormControl(false),
    rapidness: new FormControl(false),
  });
}
