import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { TuiCarousel, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiBadge, TuiPager, TuiProgress } from '@taiga-ui/kit';
import { WA_IS_E2E } from '@ng-web-apis/platform';

@Component({
  selector: 'app-gym',
  imports: [TuiTitle, TuiCarousel, TuiPager, TuiProgress, TuiBadge, TuiIcon],
  templateUrl: './gym.html',
  styleUrl: './gym.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gym {
  protected readonly isE2E = inject(WA_IS_E2E);
  protected readonly index = signal(0);

  protected readonly images = [
    'assets/images/gym1.jpg',
    'assets/images/gym2.jpg',
    'assets/images/gym3.jpg',
    'assets/images/gym4.jpg',
    'assets/images/gym5.jpg',
  ];

  protected readonly clamped = computed(
    () => ((this.index() % this.images.length) + this.images.length) % this.images.length,
  );
}
