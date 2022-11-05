import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  done:boolean=false
  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/js/bootstrap.min.js',
      "assets/js/jQuery.style.switcher.js",
      "assets/js/custom.js",
      "assets/js/jquery.min.js",
      "assets/css/slick.js",
      "assets/js/popper.min.js",
      "assets/css/slider.js",
      "assets/css/slider-bg.js",
      "assets/css/smoothproducts.js",
      "assets/css/snackbar.min.js",
      "assets/css/plugins",
      "assets/css/style.css",
      "assets/js",
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('body')[0].appendChild(node);
    }
    this.done = true
  }
  constructor() { }

  ngOnInit(): void {
    this.loadScripts()
    
  }

}
