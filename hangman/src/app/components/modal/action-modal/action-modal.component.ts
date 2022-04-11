import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.scss']
})

export class ActionModalComponent implements OnInit {
  winOrLose: boolean = false
  constructor(
    private router:Router,
    public dialogRef: MatDialogRef<MatDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  ngOnInit(): void {
    if(this.data){
      this.winOrLose = true
      setTimeout(() => {
        this.dialogRef.close({ data: 'game' });
      }, 2000);
    }else{
      this.winOrLose = false
    }
  }
  action(event: string): void{
    switch(event){
      case 'home':
      this.router.navigate([''])
      this.dialogRef.close({ data: 'home' });
      break;
      case 'options':
      this.router.navigate(['/options'])
      this.dialogRef.close({ data: 'option' });
      break;
      case 'retry':
      this.dialogRef.close({ data: 'game' });
      break;
    }
  }

}


