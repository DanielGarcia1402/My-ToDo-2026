import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon, IonFab, IonFabButton, 
IonBadge, IonModal, IonInput, IonSegment, IonSegmentButton, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, trashOutline, checkmarkCircle, ellipseOutline,filterOutline, clipboardOutline, createOutline } from 'ionicons/icons';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { FeatureFlagService } from '../services/feature-flag.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, 
    IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon, 
    IonFab, IonFabButton, IonBadge, IonModal, IonInput, 
    IonSegment, IonSegmentButton, IonSelect, IonSelectOption
  ],
})
export class HomePage {
  isModalOpen = false;
  step = 1;
  newTaskTitle = '';
selectedCategory: 'Trabajo' | 'Personal' | 'Urgente' | 'General' = 'General';
  editingTaskId: number | null = null; 

  constructor(public taskService: TaskService,
  public featureFlags: FeatureFlagService
  ) {
    addIcons({ 
      add, trashOutline, checkmarkCircle, ellipseOutline, 
      filterOutline, clipboardOutline, createOutline 
    });
  }

  handleFilter(ev: any) {
    this.taskService.filterStatus.set(ev.detail.value);
  }

  changeCategory(ev: any) {
    this.taskService.filterCategory.set(ev.detail.value);
  }

  openAddModal() {
    this.editingTaskId = null;
    this.newTaskTitle = '';
    this.selectedCategory = 'General';
    this.step = 1;
    this.isModalOpen = true;
  }

  openEditModal(task: Task) {
    this.editingTaskId = task.id;
    this.newTaskTitle = task.title;
    this.selectedCategory = task.category;
    this.step = 1;
    this.isModalOpen = true;
  }

  saveTask() {
    if (this.editingTaskId) {
      this.taskService.editTask(this.editingTaskId, this.newTaskTitle, this.selectedCategory);
    } else {
      this.taskService.addTask(this.newTaskTitle, this.selectedCategory);
    }
    this.isModalOpen = false;
  }
}