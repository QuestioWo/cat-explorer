import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blob-img',
  templateUrl: './blob-img.component.html',
  styleUrls: ['./blob-img.component.scss']
})
export class BlobImgComponent {
  @Input() blob$?: Observable<Blob>;
  @Input() style?: string;

  srcString: string = "";

  getURL(blob: Blob): string {
    return URL.createObjectURL(blob);
  }
}
