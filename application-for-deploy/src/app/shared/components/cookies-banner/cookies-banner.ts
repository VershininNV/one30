import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CookiesService } from '../../../core/services/cookies-service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-cookies-banner',
  imports: [AsyncPipe, TuiButton],
  templateUrl: './cookies-banner.html',
  styleUrl: './cookies-banner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookiesBanner {
  public isBannerShow$ = new BehaviorSubject(false)

  constructor(private _cookiesService: CookiesService) {}

  ngOnInit(): void {
    this._cookiesService.isBannerShow$.subscribe(res => {
      this.isBannerShow$.next(res)
    })
    this._cookiesService.showBanner()
  }

  public hideBanner(): void {
    this._cookiesService.hideBanner()
  }
}
