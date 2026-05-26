import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageSwitcher } from '../../../shared/components/language-switcher/language-switcher';
import { Menu } from "../../../shared/components/menu/menu";

@Component({
  selector: 'app-header',
  imports: [LanguageSwitcher, Menu],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
