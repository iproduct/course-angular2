import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {ComponentTen} from '../component-ten';
import {ComponentEleven} from '../component-eleven';
import { ToggleClassService } from '../../toggle-class.service';

@Component({
  selector: 'cmp-five',
  template: `
    <a class="on-push">Cmp5</a>

    <ul>
      <li><cmp-ten></cmp-ten></li>
      <li><cmp-eleven></cmp-eleven></li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentFive {

  constructor(private el: ElementRef, private toggleClassService: ToggleClassService) {}

  ngAfterViewChecked() {
    this.toggleClassService.toggleElementClass(this.el);
  }
}

