import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  url = 'https://65f77427b4f842e808859e18.mockapi.io/Demo/users';
  http = inject(HttpClient);
  post: any = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetchPosts();
  }

  fetchPosts() {
    this.http.get(this.url).subscribe((posts: any) => {
      console.log(posts);
    });
  }
}
