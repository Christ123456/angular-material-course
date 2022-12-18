import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from "@angular/material/dialog";
import { Course } from "../model/course";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import * as moment from "moment";

@Component({
  selector: "course-dialog",
  templateUrl: "./course-dialog.component.html",
  styleUrls: ["./course-dialog.component.css"],
})
export class CourseDialogComponent implements OnInit {
  Mydescription: string = "toto est laid";

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public titel: string
  ) {
    this.Mydescription = titel;
  }

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
