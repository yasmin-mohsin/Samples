import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/Shared/Services/http.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  addTaskForm!: FormGroup;
  date = new Date();
  priorities!: any;


  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PopUpComponent>, private http: HttpService) {
    this.initForm();
    this.getPriorities()
  }
  ngOnInit() { }

  // USAGE => use to init form with controls
  initForm() {
    this.addTaskForm = this.fb.group({
      title: [''],
      description: [],
      date: [],
      priority: []
    })
  }

  // USAGE => use to call api and get priority list
  getPriorities() {
    this.http.get('Priority').subscribe(res => {
      if (res) {
        this.priorities = res;
      }
    })
  }

  // USAGE => submit function use for add new task to the list
  addNewTask() {
    if (this.addTaskForm.valid) {
      const task = {
        taskName: this.addTaskForm.controls['title'].value,
        priorityID: this.addTaskForm.controls['priority'].value,
        description: this.addTaskForm.controls['description'].value,
        flag: 0
      };

      this.http.post(task,'Tasks').subscribe(res=>[

        this.dialogRef.close(task)
      ])
    }
    else return
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}
