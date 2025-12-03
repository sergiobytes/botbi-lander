import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private router = inject(Router);

  scrollToContact() {
    this.router.navigate(['home']).then(() => {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          const yOffset = 500;
          let y =
            element.getBoundingClientRect().top + window.pageYOffset - yOffset;

          if (y < 0) y = 0;

          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    });
  }
}
