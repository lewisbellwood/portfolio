import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../instagram.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  picture: Object;

  constructor(private data: InstagramService) { }

  ngOnInit() {
    this.data.getInstagram().subscribe(
      data => {
          this.picture = data['data'];
          console.log(this.picture)
        }
    )
  }

}
