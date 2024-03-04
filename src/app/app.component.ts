import { Component, OnInit } from '@angular/core';
import { injectSpeedInsights } from '@vercel/speed-insights/*';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'portfolio-angular';
 
  ngOnInit(): void {
      injectSpeedInsights();
  }

}
