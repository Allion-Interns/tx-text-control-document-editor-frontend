import { Component } from '@angular/core';
declare const saveDocument: any;
declare const loadDocument: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'document-editor';

  onClickSave() {
    saveDocument();
}

onClickLoad() {
    loadDocument();
}
}
