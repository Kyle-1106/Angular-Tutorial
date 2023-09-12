import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import {MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //HeroサービスでmessageServiceを使用する
  constructor(private messageService:MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //HEROESをObservableオブジェクトに変換
    const heroes = of(HEROES);
    //messageServiceに文言追加
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
