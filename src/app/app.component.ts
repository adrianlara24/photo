import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="btn">
    <input type="file" (change)="upload($event)">
  </div>
  <div class="images">
    <img *ngFor="let item of images"  [src]="item" />
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  images: any[] = [];

  upload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.images.push(reader.result);

      reader.readAsDataURL(file);
    }

  }
}
