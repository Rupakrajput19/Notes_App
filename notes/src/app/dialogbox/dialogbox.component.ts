import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css'],
})
export class DialogboxComponent implements OnInit {
  title: String = "";
  notesData: String = "";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  
  // Notes = console.log(`title: ${this.title}, notesData: ${this.notesData}`);

  saveNotes() {
    this.apiService.doPost(
      'saveNotes',
      {
        'title': this.title,
        'notesData': this.notesData,
      }
    ).subscribe((response: any) => {
      // console.log(this.Notes);
      console.log("Notes saved succesfully", response);     
      Swal.fire({
        title: 'Your Notes Succesfully Saved',
        text: `Title:${this.title} \n Description: ${this.notesData}`,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      })

      // setTimeout(() => {
      //   window.location.reload();
      // }, 2000);
    }, (error: any) => {
      console.log("error", error);
      Swal.fire({
        title: 'Your Notes Succesfully Saved',
        text: `Title:${this.title} \n Description: ${this.notesData}`,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      })
    }
    )
  }
}
