import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiDataList, TuiDropdown, TuiGroup } from '@taiga-ui/core';
import { TuiChevron } from '@taiga-ui/kit';

@Component({
  selector: 'app-language-switcher',
  imports: [TuiButton, TuiChevron, TuiGroup, TuiDataList, TuiDropdown, NgTemplateOutlet],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcher {
  protected readonly languages: Language[] = [
    {
      name: 'Русский',
      value: 'russian',
    },
    { name: 'Английский', value: 'english' },
    { name: 'Испанский', value: 'spanish' },
  ];
  protected open = false;
  protected selected = this.languages[0].value;

  protected changeLanguage(language: string): void {
    this.selected = language;
    this.open = false;
  }
}

export interface Language {
  name: string;
  value: string;
}
