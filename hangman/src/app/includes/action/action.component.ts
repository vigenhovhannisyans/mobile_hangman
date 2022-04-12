import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  @Output()  showLetterEmmiter: EventEmitter<boolean> = new EventEmitter();
  @Input() disableHint:boolean = false
  activeParam!: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeParam = JSON.stringify(localStorage.getItem('choosedParam')).split('"')[1]
  }
  action(event: string): void{
    switch(event){
      case 'home':
      this.router.navigate([''])
      break;
      case 'options':
      this.router.navigate(['/options'])
      break;
      case 'retry':
        this.redirectTo('/game',this.activeParam)
    }
  }
  redirectTo(uri:string,param: string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{queryParams: {option:param}}));
 }
 showLetter(): void{
  this.showLetterEmmiter.emit(true)
 }
}
