import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  public isBannerShow$ = new BehaviorSubject(false)

  public showBanner(): void {
    const isShow = JSON.parse(localStorage.getItem('cookiesBanner')!)

    if (isShow === null) {
      this.isBannerShow$.next(true)
    }
  }

  public hideBanner(): void {
    this.isBannerShow$.next(false)
    localStorage.setItem('cookiesBanner',  JSON.stringify(false))
  }
}
