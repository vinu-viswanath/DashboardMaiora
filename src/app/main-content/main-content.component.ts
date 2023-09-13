import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../service/api.service';
import { MyElements } from 'src/model/myElements';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})


export class MainContentComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<MyElements>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllElements().subscribe((data: MyElements | MyElements[]) => {
      if (Array.isArray(data)) {
        this.dataSource.data = data;
      } else {
      }
      this.dataSource.paginator = this.paginator;
    });
  }


}