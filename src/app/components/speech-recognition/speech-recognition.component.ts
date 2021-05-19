import { Component, OnInit } from '@angular/core';
import {SpeechRecognitionService} from '../../services/speech-recognition.service';

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.scss']
})
export class SpeechRecognitionComponent implements OnInit {


  public text: string;

  constructor(public speechService: SpeechRecognitionService) { }

  ngOnInit(): void {
  }

}
