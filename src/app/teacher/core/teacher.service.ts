import { Injectable } from '@angular/core';

const TEACHERS = [
  {
    id: 1,
    first_name: 'Sofia',
    last_name: 'Doelman',
    full_name: 'Sofia Doelman'
  },
  {
    id: 2,
    first_name: 'Jessica',
    last_name: 'Buckmark',
    full_name: 'Jessica Buckmark'
  },
  {
    id: 3,
    first_name: 'Edna',
    last_name: 'Bull',
    full_name: 'Edna Bull'
  }
];

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  getAllTeachers() {
    return TEACHERS;
  }
}
