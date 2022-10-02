import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-notes-grid',
  templateUrl: './notes-grid.component.html',
  styleUrls: ['./notes-grid.component.css']
})
export class NotesGridComponent implements OnInit {
  notesData: any = [];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.doPost(
      'getNotes', {}
    ).subscribe(
      res => {
        this.notesData = res.notesData;
      }, error => {
        console.log(error);

      }
    );
  }
  deleteNotes() {
    let agreed = window.confirm("Do you want to delete this Employee data?");
    // if(agreed = true){
      console.log("delete here");
    this.apiService.doPost(
      'deleteNotes', {}
    ).subscribe(res => {
      console.log("Notes deleted succesfully!",res);
    }, error => {
      console.log(error);
    }
    )
  // }
}

  updateNotes() {
    let agreed = window.confirm("Do you want to update this Employee data?");
    // if(agreed = true){
      console.log("update here");
    this.apiService.doPost(
      'updateNotes', {}
    ).subscribe(res => {
      console.log("Notes update succesfully!",res);
    }, error => {
      console.log(error);
    }
    )
  // }
}
}
