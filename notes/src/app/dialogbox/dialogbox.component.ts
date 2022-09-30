import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css'],
})
export class DialogboxComponent implements OnInit {
  title:String = "";
  notesData:String = "";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  Notes = console.log(`title: ${this.title}, notesData: ${this.notesData}`);

  saveNotes() {
    this.apiService.doPost(
      'saveNotes',
      {
        'title': this.title,
        'notesData': this.notesData,
      }
      ).subscribe((response:any) => {
      console.log(this.Notes);
      console.log("Notes saved succesfully", response);
    }, (error:any) => {
      console.log("error", error);
    }
    )
  }
}
