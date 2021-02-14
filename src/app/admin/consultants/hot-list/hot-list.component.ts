
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../../../auth/store/auth.reducers';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../store/app.reducers';
import { Customer, Representative, Consultant, Technology, User,HotList } from "../../../customer";
import { CustomerService } from "../../../customer.service";
import { Table } from 'primeng/table';
import { ConsultantDetail } from '../../../product';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';
import {SelectItem} from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-hot-list',
  templateUrl: './hot-list.component.html',
  styleUrls: ['./hot-list.component.scss']
})
export class HotListComponent implements OnInit {
  title = 'Webmobilez';
  isAuthnoticated: Observable<State>;

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private store: Store<AuthState>, private consultantService: CustomerService) {

  }
  hotlists: Consultant[];

  selectedProducts: HotList[];
  technologieslist: Technology[];
  loading: boolean = true;
  cols: any[];

  exportColumns: any[];

  ngOnInit() {
      this.consultantService.getHotlistConsultants().then(data => this.hotlists = data);
      this.consultantService.getExportConsultants().then(data => this.selectedProducts = data);
      this.consultantService.getOnlyTechnologies().then(technologies => {
        //this.technologies.push({ technology_id:0,name:'Choose Technology',created_at:'' });
        this.technologieslist=technologies;

        this.loading = false;
      });
      this.cols = [
          { field: 'first_name', header: 'Name' },
          { field: 'technology', header: 'Technology' },
          { field: 'experience', header: 'Experience' },
          { field: 'state', header: 'State' },
          { field: 'willingLocation', header: 'Relocate' },
          { field: 'visaType', header: 'VisaType' }
      ];

      this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }

  exportPdf() {
      import("jspdf").then(jsPDF => {
          import("jspdf-autotable").then(x => {
            const doc = new jsPDF.default('p','pt');
         doc['autoTable'](this.exportColumns, this.selectedProducts);

              doc.save('webmobilez-hotlist.pdf');
          })
      })
  }

  exportExcel() {
      import("xlsx").then(xlsx => {
          const worksheet = xlsx.utils.json_to_sheet(this.selectedProducts);
          const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
          const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
          this.saveAsExcelFile(excelBuffer, "webmobilez-hotlist");
      });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
      import("file-saver").then(FileSaver => {
          let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
          let EXCEL_EXTENSION = '.xlsx';
          const data: Blob = new Blob([buffer], {
              type: EXCEL_TYPE
          });
          FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
      });
  }
  clear(table: Table) {
    table.clear();
  }
}
