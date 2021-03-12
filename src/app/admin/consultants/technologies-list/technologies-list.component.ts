
import { Component, OnInit } from '@angular/core';
import { Technology } from "../../../customer";
import { Table } from 'primeng/table';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { NotificationService } from './../../../services/notification-service';
import { TechnologyService } from './technology-service';

@Component({
  selector: 'app-technologies-list',
  templateUrl: './technologies-list.component.html',
  styleUrls: ['./technologies-list.component.scss']
})

export class TechnologiesListComponent implements OnInit {

  // Technologies List
  technologies: Technology[];
  loading: boolean = true;

  // Technology Form
  technologiesForm: FormGroup = this.buildTechnologyForm();
  technologyId: number;
  submitted: boolean;
  openTechnologyDialog: boolean;
  technologyButtonText: string;

  constructor(
    private readonly notificationService: NotificationService,
    private readonly technologyService: TechnologyService) {
  }

  get name() { return this.technologiesForm.get('name'); }

  ngOnInit(): void {
    this.technologyService.getTechnologies().then(technologies => {
      this.technologies = technologies;
      this.loading = false;
    });
  }

  clear(table: Table) {
    table.clear();
  }

  openAddTechnologyDialog() {
    this.technologiesForm.reset();

    this.technologyButtonText = "Add Technology";
    this.submitted = false;
    this.openTechnologyDialog = true;
  }

  openEditTechnologyDialog(tecnology: Technology) {
    this.technologiesForm.reset();

    this.technologyButtonText = "Update Technology";
    this.submitted = false;

    this.technologiesForm.patchValue({
      name: tecnology.name
    });

    this.technologyId = tecnology.technology_id;
    this.openTechnologyDialog = true;
  }

  saveTechnology() {
    this.submitted = true;

    const technologyName = this.name.value;

    // Update Existing Technology
    if (this.technologyId) {
      this.technologyService.updateTechnology(this.technologyId, technologyName).then(technology => {

        const index = this.technologies.findIndex(item => {
          return item.technology_id === this.technologyId;
        });
        this.technologies[index] = technology;

        this.notificationService.showSuccess('Technology Updated');
      }).catch(err => {
        this.notificationService.showError('Failed to Update Technology.!!');
      }).finally(() => {
        this.resetTechnologyDialog();
      });
    }
    else {  // Save New Technology
      this.technologyService.storeTechnology(technologyName).then(technology => {
        this.technologies.push(technology);

        this.notificationService.showSuccess('Technology Created');
      }).catch(err => {
        this.notificationService.showError('Failed to Create Technology.!!');
      }).finally(() => {
        this.resetTechnologyDialog();
      });
    }
  }

  private buildTechnologyForm() {
    return new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
    });
  }

  private resetTechnologyDialog() {
    this.technologyId = null;
    this.openTechnologyDialog = false;
  }
}
