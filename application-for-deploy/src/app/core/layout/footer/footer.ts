import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiLink } from '@taiga-ui/core';

@Component({
  selector: 'app-footer',
  imports: [TuiLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  public employer = ''
  public inn1 = '000000000000'
  public inn2 = '000000000000000'
  public city = 'г. Москва'
}
