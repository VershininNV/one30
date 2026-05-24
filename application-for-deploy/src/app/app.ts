import { TuiRoot } from "@taiga-ui/core";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer, Header } from "./core";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
