import { Injectable } from '@angular/core';

import { Preferences } from '@capacitor/preferences'


export interface Task{
  id: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  private TASK_KEY = 'task';

  async addTask(task:Task): Promise<void>{

    const tasks = await this.getTask() || [];
    tasks.push(task);

    await Preferences.set({
      key: this.TASK_KEY,
      value: JSON.stringify(task)
    });

  }

  async getTask(): Promise<Task[]>{
    const {value} = await Preferences.get({key: this.TASK_KEY});
    return value ? JSON.parse(value) : [];
  }


  constructor() { }



}
