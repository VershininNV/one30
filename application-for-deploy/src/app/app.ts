import { TuiRoot } from "@taiga-ui/core";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer, Header } from "./core";
import { CookiesBanner } from "./shared/components/cookies-banner/cookies-banner";
import { Gym } from "./modules/gym/gym";
import { Reviews } from "./modules/reviews/reviews";
import { Disciplines } from "./modules/disciplines/disciplines";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, Header, Footer, CookiesBanner, Gym, Reviews, Disciplines],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
