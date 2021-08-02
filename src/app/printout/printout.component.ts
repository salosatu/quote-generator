import { Component, OnInit } from '@angular/core';
import * as moviestable from '../../data/movies.json'; 
import { title } from 'process';

@Component({
  selector: 'app-printout',
  templateUrl: './printout.component.html',
  styleUrls: ['./printout.component.css']
})
export class PrintoutComponent implements OnInit {

  quote;
  title;
  movies: any = (moviestable as any).default;
  randomIntForMovie;
  randomIntForQuote;
  randomIntForTitle;
  //randomQuote;

  constructor() { }

  ngOnInit(): void {
   this.giveQuote()
  }
  
  giveQuote(){
    this.randomIntForMovie = getRandomInt(this.movies.length)
    this.randomIntForQuote = getRandomInt(this.movies[this.randomIntForMovie].quotes.length)
    this.quote = this.movies[this.randomIntForMovie].quotes[this.randomIntForQuote];
    this.title = this.movies[this.randomIntForMovie].title
  }
}

//from MDN
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

