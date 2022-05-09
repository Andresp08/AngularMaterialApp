import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatosService } from '../service/datos.service';
import {MatDialog} from '@angular/material/dialog';
import { PruebaAMComponent } from '../prueba-am/prueba-am.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DatosService]
})


export class SearchComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name','lastName', 'email', 'cellphone']
  dataSource: any;
  constructor(private _liveAnnouncer: LiveAnnouncer,
    private datosService: DatosService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.search();
  }

  search(){
    this.datosService.search().subscribe((resp)=>{
      this.dataSource = new MatTableDataSource(resp)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  openDialog(){
    const dialogRef = this.dialog.open(PruebaAMComponent, {
      width: '95vw',
      autoFocus: false,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
