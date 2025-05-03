import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements AfterViewInit {
  isOpen = false;

  @ViewChild('menuRef') menuRef!: ElementRef;

  ngAfterViewInit() {
    // optional: confirm reference loaded
    console.log('menuRef loaded:', this.menuRef);
  }

  toggleMenu(event: Event) {
    event.stopPropagation(); // prevent click from propagating
    this.isOpen = !this.isOpen;
  }

  // ✅ Close on scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }

  // ✅ Close on document click outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (
      this.isOpen &&
      this.menuRef &&
      !this.menuRef.nativeElement.contains(event.target)
    ) {
      this.isOpen = false;
    }
  }
}
