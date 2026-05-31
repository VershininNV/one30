import { ChangeDetectionStrategy, Component, isDevMode } from '@angular/core';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-info',
  imports: [NgClass],
  templateUrl: './info.html',
  styleUrl: './info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Info {
  protected readonly isDevMode = isDevMode()
}
