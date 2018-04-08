import { Gif } from './gif.interface';
import { GifService } from './gif.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	gif: Gif;

	constructor(private gifService: GifService) {
		this.gifService.getGif().subscribe((content) => {
			this.gif = content;
		});
	}

	loadGif() {
		this.gifService.getGif().subscribe((content) => {
			this.gif = content;
		});
	}
}
