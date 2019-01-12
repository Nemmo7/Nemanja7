import { Injectable } from '@angular/core';

const STUDENTS = [
  {
    id: 1,
    first_name: 'Josh',
    last_name: 'Bund',
    full_name: 'Josh Bund',
    email: 'josh@test.biz'
  },
  {
    id: 2,
    first_name: 'Mevlin',
    last_name: 'Carry',
    full_name: 'Mevlin Curry',
    email: 'mevlin@test.biz'
  },
  {
    id: 3,
    first_name: 'Bastian',
    last_name: 'Kurany',
    full_name: 'Bastian Kurany',
    email: 'bastian@test.biz'
  },
  {
    id: 4,
    first_name: 'Peter',
    last_name: 'Burnason',
    full_name: 'Peter Burnason',
    email: 'peter@test.biz'
  },
];

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getAllStudents() {
    return STUDENTS;
  }
}
