import { Component, OnInit, Output } from '@angular/core';
import { Participant } from '../domain/participant';
import { ParticipantsService } from '../services/participants.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  participants: Participant[];
  @Output() societe: String;

  constructor(private _service: ParticipantsService) { } // Constructor injection

  ngOnInit() {
    this.participants = this._service.getAll();
  }

}
