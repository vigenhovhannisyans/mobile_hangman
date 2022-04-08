import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'src/app/models';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  disable = true;
  selectedOption = 'Random'
  options: Options[]=[
    {title: 'Cities', selected: false},
    {title: 'Body parts', selected: false},
    {title: 'Cars', selected: false},
    {title: 'Random', selected: true},
  ]
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }
  activate(event: string): void{
    for(let arr of this.options){
      arr.selected = false
        if(arr.title===event){
          arr.selected = !arr.selected;
          this.selectedOption = event
        }
    }
  }
  continue(): void{
    this.router.navigate(['/game'],{queryParams:{option:this.selectedOption}})
  }

}
