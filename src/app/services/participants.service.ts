import { Injectable } from '@angular/core';
import { Participant } from '../domain/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor() { }

  getAll(): Participant[] {
    return [
      {'numero': 'P1000', 'nom': 'Sami', 'age': 25},
      {'numero': 'P2000', 'nom': 'Mahmoud', 'age': 30},
      {'numero': 'P3000', 'nom': 'Zouheir', 'age': 28},
      {'numero': 'P4000', 'nom': 'Houssem', 'age': 33},
      {'numero': 'P5000', 'nom': 'Marwen', 'age': 17},
      {'numero': 'P6000', 'nom': 'Ghada', 'age': 21}
    ];
  }
}
