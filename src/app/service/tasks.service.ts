import { Injectable } from '@angular/core';

import {Preferences } from '@capacitor/preferences'

export interface Task{
  id: number,
  title: string,
  completed:boolean
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {




  constructor() { }



}
