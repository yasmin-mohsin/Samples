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
  taskList: Array<any> = []
  priorities!: any;
  showDescription: boolean = false;
  searchValue!:any;

  constructor(public dialog: MatDialog, private http: HttpService, private cdr: ChangeDetectorRef) {
    this.getTasks();
    this.getPriorities();
  }

  ngOnInit(): void {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '350px',
      data: { name: 'ffff' }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.getTasks()
    })
  }

  // USAGE => use for get all the tasks and add needed properties
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
        console.log(this.taskList)

      }
    })
  }

  getPriorities() {
    this.http.get('Priority').subscribe(res => {
      if (res) {
        this.priorities = res;
      }
    })
  }

  filterTaskList(name: any) {
    this.taskList.map(ele => {
      if (!ele['taskName'].includes(name)) {
        ele['show'] = false;
      }
      else { ele['show'] = true }
    })
    console.log(this.searchValue)
    console.log(this.taskList)
  }

  // USAGE => use to delete task from api
  deleteTask(id: any, index: any) {
    this.http.delete(id, 'Tasks').subscribe(res => {
      this.getTasks()
      // this.taskList.splice(this.taskList[index], 1)
      // console.log(this.taskList)
    })
  }

}
