import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input()
  article!: Article;

  // title: string;
  // link: string;
  // votes: number;

  // article: Article;

  constructor() {
    // article is populated by the Input now,
    // so we don't need anything here

    // this.title = 'Angular';
    // this.link = 'http://angular.io';
    // this.votes = 10;

    // this.article = new Article(
    //   'Angular',
    //   'http://angular.io',
    //   10
    // );
  }

  // voteUp(): boolean {
  //   this.votes += 1;
  //   return false;
  // }

  // voteDown(): boolean {
  //   this.votes -= 1;
  //   return false;
  // }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
