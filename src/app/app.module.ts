import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatSelectModule, MatSortModule,
  MatStepperModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExtendedModule, FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CommonModule} from '@angular/common';
import { DragDropRootComponent } from './drag-drop-demo/nested-list-example/drag-drop-root/drag-drop-root.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { RemoveSelfPipe } from './drag-drop-demo/remove-self.pipe';
// tslint:disable-next-line:max-line-length
import {StorageEntityDraggableComponent} from './drag-drop-demo/nested-list-example/drag-drop-root/storage-entity-draggable/storage-entity-draggable.component';

const dependencies = [
  BrowserModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  ReactiveFormsModule,
  MatInputModule,
  FlexModule,
  MatSelectModule,
  MatStepperModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatCardModule,
  MatCheckboxModule,
  RouterModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDividerModule,
  MatExpansionModule,
  MatListModule,
  MatSidenavModule,
  ExtendedModule,
  FormsModule,
  CommonModule,
  FlexLayoutModule,
];

@NgModule({
  imports: [
    dependencies,
    DragDropModule,
  ],
  exports: [
    dependencies,
  ],
  declarations: [
    AppComponent,
    DragDropRootComponent,
    RemoveSelfPipe,
    StorageEntityDraggableComponent,
    StorageEntityDraggableComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
