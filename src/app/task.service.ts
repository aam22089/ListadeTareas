import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, updateDoc, deleteDoc, doc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private taskCollection = collection(this.firestore, 'task');

  constructor(private firestore: Firestore) { }

  getTasks(): Observable<Task[]> {
    return collectionData(this.taskCollection, { idField: 'id' }) as Observable<Task[]>;
  }

  addTask(task: Task) {
    return addDoc(this.taskCollection, task);
  }

  updateTask(id: string, data: Partial<Task>) {
    const taskDoc = doc(this.firestore, `tasks/${id}`);
    return updateDoc(taskDoc, data);
  }

  deleteTask(id: string) {
    const taskDoc = doc(this.firestore, `tasks/${id}`);
    return deleteDoc(taskDoc)
  }
}
