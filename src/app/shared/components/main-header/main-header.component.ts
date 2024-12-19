import { Component,EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  standalone: false,
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  @Output() toggleContent = new EventEmitter<string>();

  isOnline: boolean = true;
	isMobile: boolean | null = null;
  constructor( ) {
   
  }

  ngOnInit() {
	
	}

  toggleMenu() {
		document.getElementById('side-bar')?.classList.toggle('collapse');
		this.toggleContent.emit('collapse');
	}

  toggleMenuIfMobile() {
		if (this.isMobile) this.toggleMenu();
	}

}