import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notes-grid',
  templateUrl: './notes-grid.component.html',
  styleUrls: ['./notes-grid.component.css']
})
export class NotesGridComponent implements OnInit {
  notesData: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.getNotes();
    console.log('ngOnInit');

    this.apiService.getNotesData()
      .subscribe(
        res => {
          // this.notesData = res.notesData;
          console.log('success');
          console.log(res)
        }, error => {
          console.log(error);
          console.log('Fail');

        }
      );
    // this.notesData;
  }

  getNotes() {
    console.log('getNotes is loading');
    this.apiService.doGet(
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
    Swal.fire({
      title: 'Are you sure want to delete this notes?',
      text: "This will permanently delete this notes!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.doPost(
          'deleteNotes', {}
        ).subscribe(res => {
          console.log("Notes deleted succesfully!", res);
        }, error => {
          console.log(error);
        }
        )
        // Swal.fire(
        //   'Deleted!',
        //   'Your Notes has been deleted.',
        //   'success'
        // )

        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
      }
    })
  }
  updateNotes() {
    Swal.fire({
      title: 'Do you sure want to update this?',
      text: `update notes with filled data`,
      iconHtml: '<img  width="50" height="60" src="https://png.pngtree.com/png-vector/20190428/ourmid/pngtree-vector-notes-icon-png-image_992313.jpg">',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.doPost(
          'updateNotes', {}
        ).subscribe(res => {
          console.log("Notes updated succesfully!", res);
        }, error => {
          console.log(error);
        }
        )
        // Swal.fire(
        //   'Updated!',
        //   'Your Notes has been Updated.',
        //   'success'
        // )

        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
      }
    })
  }
}
