import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Letter, Word } from 'src/app/models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  letters: Letter[] = [
    {id: 1, value: 'A', active: false},
    {id: 2, value: 'B', active: false},
    {id: 3, value: 'C', active: false},
    {id: 4, value: 'D', active: false},
    {id: 5, value: 'E', active: false},
    {id: 6, value: 'F', active: false},
    {id: 7, value: 'G', active: false},
    {id: 8, value: 'H', active: false},
    {id: 9, value: 'I', active: false},
    {id: 10, value: 'J', active: false},
    {id: 11, value: 'K', active: false},
    {id: 12, value: 'L', active: false},
    {id: 13, value: 'M', active: false},
    {id: 14, value: 'N', active: false},
    {id: 15, value: 'O', active: false},
    {id: 16, value: 'P', active: false},
    {id: 17, value: 'Q', active: false},
    {id: 18, value: 'R', active: false},
    {id: 19, value: 'S', active: false},
    {id: 20, value: 'T', active: false},
    {id: 21, value: 'Y', active: false},
    {id: 22, value: 'V', active: false},
    {id: 23, value: 'W', active: false},
    {id: 24, value: 'X', active: false},
    {id: 25, value: 'Y', active: false},
    {id: 26, value: 'Z', active: false},
  ]
  cities: Word[] = [
    {id: 1, value: 'V', hint: 'The name', category: 'Country'},
    {id: 2, value: 'VI', hint: 'The name', category: 'Country'},
    {id: 3, value: 'VIG', hint: 'The name', category: 'Country'},
    {id: 4, value: 'VIGE', hint: 'The name', category: 'Country'},
    {id: 5, value: 'VIGEN', hint: 'The name', category: 'Country'},
  ]
  selectedOption!: Word[]
  choosed!: Word;
  clickedLetter!: string
  visibleLetter = false;
  constructor(
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res)=>{
      switch(res.option.toLowerCase()){
        case 'cities':
          this.selectedOption = this.cities
          this.choosed = this.getRandomQuestion(this.selectedOption)
          break
      }
      console.log(res);
    })
  }
  clickLetter(value: Letter): void{
    this.clickedLetter = value.value
  }

  getRandomQuestion(param: Word[]): Word | any {
    const rand = Math.floor(Math.random() * param.length)+1;
    console.log(rand);
    for (let arr of param){
      if(arr.id === rand){
        console.log(arr);
        return arr
      }
    }

  }

}
