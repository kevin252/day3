import { Gif } from './gif.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GifService {
	gifUrl = 'https://yesno.wtf/api';
	constructor(private http: HttpClient) {}

	getGif() {
		return this.http.get<Gif>(this.gifUrl);
	}
}
