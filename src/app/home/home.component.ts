import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { CoursesService } from "../services/courses.service";
import { map } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";
import { CourseDialogComponent } from "../course-dialog/course-dialog.component";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;
  title: string;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    const courses$ = this.coursesService.findAllCourses();

    this.beginnerCourses$ = courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === "BEGINNER")
      )
    );

    this.advancedCourses$ = courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === "ADVANCED")
      )
    );
  }

  openDialog() {
    const dialog = this.dialog.open(CourseDialogComponent, {
      data: this.title,
    });

    dialog.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.title = result;
    });
  }
}
