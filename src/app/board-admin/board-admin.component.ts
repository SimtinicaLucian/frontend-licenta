import { Component, OnInit, ViewChild, AfterViewInit, Type, Input, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service'
import { IncasariService } from '../services/api/incasari.service';
import { AdminService } from '../services/api/admin.service';
import { ModalDeleteUserComponent } from '../modal-delete-user/modal-delete-user.component';
import { ModalUpdateUserComponent } from '../modal-update-user/modal-update-user.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {
  public rowses: any;
  form: any = {};
  displayedColumns: string[] = ['id', 'username', 'email', 'roles', 'delete', 'update'];
  values: Periodic[];
  dataSource: MatTableDataSource<Periodic>;
  roles: any;
  name: string;
  




  constructor(private userService: UserService, private incasariService : IncasariService, private router: ActivatedRoute, private adminService : AdminService,
    public modalService: NgbModal) { }




  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    // this.roles.name = this.router.snapshot.queryParamMap.get('name');
    this.adminService.searchAllUser().subscribe((reses: any[]) => {
      this.rowses = reses
      console.log(this.rowses);

      this.dataSource = new MatTableDataSource(this.rowses)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    )
  }
  

  deleteUserModal(j) {
    const modalRef = this.modalService.open(ModalDeleteUserComponent);
    modalRef.componentInstance.j = j;
    modalRef.result.then((result) => {
      console.log(result);
      if (result) {
        console.log(result);
      }
    });
  }

  updateUserModal(j) {
    console.log(j);
    const modalRef = this.modalService.open(ModalUpdateUserComponent);
    modalRef.componentInstance.j = j;
    modalRef.result.then((result) => {
      console.log(result);
      if (result) {
        console.log(result);
        //   this.doctService.deleteData(j).subscribe(res=>
        // {
        //     this.getData()
        //     console.log("delete");
        //   // location.reload();
        // })

      }
    });
  }

}

export interface Periodic {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface Roles{
  id: number;
  name: string;
}

