import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  standalone: false,
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  collapseContent() {
		document.getElementById('content')?.classList.toggle('layout-wrapper-collapse');
	}

  ngOnInit(): void {
  }

}
