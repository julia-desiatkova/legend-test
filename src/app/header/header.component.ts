import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input() image: string = '';
    @Input() name: string = 'name';
    @Input() space: string = 'space';
    @Input() description: string = 'description';
}
