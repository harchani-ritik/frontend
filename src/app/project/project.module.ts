import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { AddComponent } from './add/add.component';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, ProjectRoutingModule, SharedModule, FormsModule, MaterialModule, ReactiveFormsModule]
})
export class ProjectModule {}
