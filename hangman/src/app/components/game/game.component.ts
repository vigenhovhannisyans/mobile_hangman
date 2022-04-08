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
    {id: 1, value: 'A', active: undefined},
    {id: 2, value: 'B', active: undefined},
    {id: 3, value: 'C', active: undefined},
    {id: 4, value: 'D', active: undefined},
    {id: 5, value: 'E', active: undefined},
    {id: 6, value: 'F', active: undefined},
    {id: 7, value: 'G', active: undefined},
    {id: 8, value: 'H', active: undefined},
    {id: 9, value: 'I', active: undefined},
    {id: 10, value: 'J', active: undefined},
    {id: 11, value: 'K', active: undefined},
    {id: 12, value: 'L', active: undefined},
    {id: 13, value: 'M', active: undefined},
    {id: 14, value: 'N', active: undefined},
    {id: 15, value: 'O', active: undefined},
    {id: 16, value: 'P', active: undefined},
    {id: 17, value: 'Q', active: undefined},
    {id: 18, value: 'R', active: undefined},
    {id: 19, value: 'S', active: undefined},
    {id: 20, value: 'T', active: undefined},
    {id: 21, value: 'Y', active: undefined},
    {id: 22, value: 'V', active: undefined},
    {id: 23, value: 'W', active: undefined},
    {id: 24, value: 'X', active: undefined},
    {id: 25, value: 'Y', active: undefined},
    {id: 26, value: 'Z', active: undefined},
  ]
  cities: Word[] = [
    {id: 1, value: 'V', hint: 'The name', category: 'Country'},
    {id: 2, value: 'VIV', hint: 'The name', category: 'Country'},
    {id: 3, value: 'VIGV', hint: 'The name', category: 'Country'},
    {id: 4, value: 'VIGEV', hint: 'The name', category: 'Country'},
    {id: 5, value: 'VIGENV', hint: 'The name', category: 'Country'},
  ]
  selectedOption!: Word[]
  choosed!: Word;
  clickedLetter!: string
  visibleLetter = false;
  letter: Letter[] = []
  constructor(
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res)=>{
      switch(res.option.toLowerCase()){
        case 'cities':
          let id = 0;
          this.selectedOption = this.cities
          this.choosed = this.getRandomQuestion(this.selectedOption)
          for(let arr of this.choosed.value.split('')){
            ++id
            this.letter.push(
              {id: id, value: arr, active: false}
            )
          }
          break
      }
      console.log(res);
    })
  }
  clickLetter(value: Letter): void{
    this.clickedLetter = value.value
    for(let i = 0; i< this.choosed.value.length; i++){
      if(this.clickedLetter === this.choosed.value[i]){
            for(let lets of this.letter){
              if(this.clickedLetter === lets.value){
                lets.active = true
z
              }
        }
      }
    }
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
