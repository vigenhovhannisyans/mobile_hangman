import { Component, OnInit } from '@angular/core';
import { DialogPosition, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Letter, Word } from 'src/app/models';
import { ActionModalComponent } from '../modal/action-modal/action-modal.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  showParts = 0;
  id = 0;
  disableHint!: boolean
  clickedHint = 0
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
    {id: 21, value: 'U', active: undefined},
    {id: 22, value: 'V', active: undefined},
    {id: 23, value: 'W', active: undefined},
    {id: 24, value: 'X', active: undefined},
    {id: 25, value: 'Y', active: undefined},
    {id: 26, value: 'Z', active: undefined},
  ]
  cities: Word[] = [
    {id: 1, value: 'MADRID', hint: 'What is the capital of Spain', category: 'Country',},
    {id: 2, value: 'ALGIRES', hint: 'What is the capital of Algeria', category: 'Country'},
    {id: 3, value: 'LUANDA', hint: 'What is the capital of Angola', category: 'Country'},
    {id: 4, value: 'YEREVAN', hint: 'What is the capital of Armenia', category: 'Country'},
    {id: 5, value: 'CANBERRA', hint: 'What is the capital of Australia', category: 'Country'},
    {id: 6, value: 'VIENNA', hint: 'What is the capital of Austria', category: 'Country'},
    {id: 7, value: 'BAKU', hint: 'What is the capital of Bahamas', category: 'Country'},
    {id: 8, value: 'NASSAU', hint: 'What is the capital of Bahamas', category: 'Country'},
  ]
  cars: Word[] = [
    {id: 1, value: 'MERCEDES', hint: 'The car that were made in Germany', category: 'Cars', photo:''},
    {id: 2, value: 'VOLKSWAGEN', hint: 'The car that were made in Germany', category: 'Cars', photo:''},
    {id: 3, value: 'FERRARI', hint: 'The car that were made in Italy', category: 'Cars', photo:''},
    {id: 4, value: 'FIAT', hint: 'The car that were made in Italy', category: 'Cars', photo:''},
    {id: 5, value: 'MASERATI', hint: 'The car that were made in Italy', category: 'Cars', photo:''},
    {id: 6, value: 'ALEKO', hint: 'The car that were made in Russia', category: 'Cars', photo:''},
    {id: 7, value: 'DRAGON', hint: 'The car that were made in Russia', category: 'Cars', photo:''},
    {id: 8, value: 'SEAZ', hint: 'The car that were made in Russia', category: 'Cars', photo:''},
    {id: 9, value: 'FORD', hint: 'The car that were made in USA', category: 'Cars', photo:''},
    {id: 10, value: 'JEEP', hint: 'The car that were made in USA', category: 'Cars', photo:''},
  ]
  food: Word[] = [
    {id: 1, value: 'BROWN', hint: 'What is the rarest M&M color?', category: 'Food', photo:''},
    {id: 2, value: 'PEPPER', hint: 'What is pericana alcoyana?', category: 'Food', photo:''},
    {id: 3, value: 'CHINA', hint: 'Which country invented ice cream?', category: 'Food', photo:''},
    {id: 4, value: 'SOUP', hint: 'What is greissnockerlsuppe?', category: 'Food', photo:''},
    {id: 5, value: 'PEPPER', hint: 'What is Carolina Ripper?', category: 'Food', photo:''},
    {id: 6, value: 'RED', hint: 'What color is chili pepper', category: 'Food', photo:''},
  ]
  selectedOption!: Word[]
  choosed!: Word;
  clickedLetter!: string
  visibleLetter = false;
  activeParam!: string;
  answerLetterCount = 0
  letter: Letter[] = []
  constructor(
    private activatedRoute:ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param)=>{
      localStorage.setItem('choosedParam',param.option)
      this.activeParam = JSON.stringify(localStorage.getItem('choosedParam')).split('"')[1]
    })
    this.fetch()

  }

  clickLetter(value: Letter): void{
    this.clickedLetter = value.value
    for(let i = 0; i< this.choosed.value.length; i++){
      if(this.clickedLetter === this.choosed.value[i]){
            for(let lets of this.letter){
              if(this.clickedLetter === lets.value){
                lets.active = true
                for(let arr of this.letters){
                  if(arr.value === this.clickedLetter){
                    arr.active = true
                  }
                }
              }
        }
      }
      if(this.clickedLetter !== this.choosed.value[i]){
        for(let arr of this.letters){
          if(arr.value === this.clickedLetter && arr.active === undefined){
            arr.active = false
          }

        }

      }
    }
    if(!this.choosed.value.includes(this.clickedLetter)){
      this.showParts++
    }
    if(this.answerLetterCount===this.choosed.value.length){
      console.log(this.answerLetterCount);
    }
    if(this.checkIsTrueValue(this.letter)){
      this.openActionDialog('win')
  }
  if(this.showParts===7){
    this.openActionDialog();
  }
  }

  getRandomQuestion(param: Word[]): Word | any {
    const rand = Math.floor(Math.random() * param.length)+1;
    for (let arr of param){
      if(arr.id === rand){
        return arr
      }
    }

  }
  openActionDialog(data?: string): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.panelClass = 'lose-modal'
    dialogConfig.data = data
    const dialogRef = this.dialog.open(ActionModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result.data==='game'){
        this.redirectTo('/game',this.activeParam)
      }
    });
  }

  fetch(): void{
    this.activatedRoute.queryParams.subscribe((res)=>{
      switch(res.option.toLowerCase()){
        case 'cities':
          this.id = 0;
          this.selectedOption = this.cities
          this.choosed = this.getRandomQuestion(this.selectedOption)
          for(let arr of this.choosed.value.split('')){
            ++this.id
            this.letter.push(
              {id: this.id, value: arr, active: false}
            )
          }
          break;
          case 'cars':
            this.selectedOption = this.cars
            this.choosed = this.getRandomQuestion(this.selectedOption)
            for(let arr of this.choosed.value.split('')){
              ++this.id
              this.letter.push(
                {id: this.id, value: arr, active: false}
              )
            }
            break;
          case 'food': 
          this.selectedOption = this.food
          this.choosed = this.getRandomQuestion(this.selectedOption)
          for(let arr of this.choosed.value.split('')){
            ++this.id
            this.letter.push(
              {id: this.id, value: arr, active: false}
            )
          }
          break; 

      }
    })
  }

  redirectTo(uri:string,param: string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{queryParams: {option:param}}));
 }


 checkIsTrueValue(arr:Letter[]): any{
  let result = arr.every((i) => {
    return i.active === true
  })
  return result
 }

 showLetterEmitter(event: boolean): void{
  this.clickedHint++
  if(this.clickedHint===3){
    this.disableHint = true;
  }
  const rand = Math.floor(Math.random() * this.letter.length) + 1
   if(event){
    for(let arr of this.letter){
      if(!arr.active){
        if(arr.id === rand){
          arr.active = true
          for(let i = 0; i<this.choosed.value.length; i++){
            if(arr.value === this.choosed.value[i]){
              for(let lets of this.letter){
                if(arr.value === lets.value){
                  lets.active = true
                }
          }
        }
        }
          for(let arrLettter of this.letters){
              if(arr.value === arrLettter.value){
                arrLettter.active = true
              }
          }
        }
      }
    }
   }
 }
}
