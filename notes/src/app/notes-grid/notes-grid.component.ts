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
      'getNotesData', {}
    ).subscribe(
      res => {
        this.notesData = res.notesData;
      }, error => {
        console.log(error);

      }
    );
  }
  empDelete() {
    // let agreed = window.confirm("Do you want to delete this Employee data?");
    // if(agreed = true){
      console.log("delete here");
    this.apiService.doPost(
      'deleteNotesData', {}
    ).subscribe(res => {
      console.log("Employee deleted succesfully!",res);
    }, error => {
      console.log(error);
    }
    )
  // }
}
}
