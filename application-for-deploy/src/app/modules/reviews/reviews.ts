import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { TuiGroup, TuiIcon, TuiRadio, TuiScrollbar, TuiTitle } from '@taiga-ui/core';
import { TuiCardMedium, TuiSurface } from '@taiga-ui/layout';
import { Map } from '../../shared/components/map/map';
import { TuiBadge, TuiBlock, TuiFade, TuiSkeleton } from '@taiga-ui/kit';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-reviews',
  imports: [
    TuiCardMedium,
    TuiTitle,
    TuiSurface,
    Map,
    TuiBadge,
    TuiIcon,
    ReactiveFormsModule,
    TuiBlock,
    TuiGroup,
    TuiRadio,
    NgTemplateOutlet,
    TuiScrollbar,
    TuiSkeleton
  ],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reviews {
  protected cards = ['', '', '', '', ''];

  protected readonly switchForm = new FormGroup({ value: new FormControl('map') });

  get isMap(): boolean {
    return this.switchForm.get('value')!.value === 'map';
  }
}
