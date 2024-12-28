import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { HttpService } from 'src/app/Shared/Services/http.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  taskList: Array<any> = [];
  showDescription: boolean = false;
  searchValue!: any;

  constructor(public dialog: MatDialog, private http: HttpService, private cdr: ChangeDetectorRef) {
    this.getTasks();
  }

  ngOnInit(): void { }

  // USAGE => open popup and after close it update taskList with the added new
  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getTasks()
    })
  }

  // USAGE => use for get all the tasks from api and add needed properties
  getTasks() {
    this.http.get('Tasks').subscribe((res: any) => {
      if (res) {
        this.taskList = []
        Object.keys(res).forEach(ele => {
          res[ele]['showDescription'] = false;
          res[ele]['show'] = true;
          res[ele]['id'] = ele;
          this.taskList.push(res[ele])
        })
      }
    })
  }

  // USAGE => use to filter task list while searching
  filterTaskList(name: any) {
    this.taskList.map(ele => {
      if (ele['taskName'].includes(name)) {
        ele['show'] = true;
      }
      else { ele['show'] = false }
    })
  }

  // USAGE => use to delete task from api
  deleteTask(id: any, index: any) {
    this.http.delete(id, 'Tasks').subscribe(res => {
      this.getTasks();
    })
  }

}
