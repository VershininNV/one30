import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiDataList, TuiDropdown, TuiDropdownOpen } from '@taiga-ui/core';

@Component({
  selector: 'app-menu',
  imports: [TuiButton, TuiDropdown, TuiDropdownOpen, TuiDataList],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  protected readonly sections: Section[] = [
      { name: 'О нас', value: 'info' },
      { name: 'Дисциплины', value: 'disciplines' },
      { name: 'Постановки', value: 'productions' },
      { name: 'Отзывы', value: 'reviews' },
      { name: 'О зале', value: 'gym' },
      { name: 'Контакты', value: 'contacts' },
    ];

  protected scrollToSection(name: string): void {}
}

export interface Section {
  name: string;
  value: string;
}
