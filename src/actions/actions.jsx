import {
  ADD_STUDENT,
  SEARCH_STUDENT,
  DELETE_STUDENT
} from '../constants/actionsTypes';
export function addStudent(payload) {
  return { type: ADD_STUDENT, payload };
}

export function deleteStudent(payload) {
  return { type: DELETE_STUDENT, payload };
}

export function searchStudent(search) {
  return { type: SEARCH_STUDENT, search };
}
