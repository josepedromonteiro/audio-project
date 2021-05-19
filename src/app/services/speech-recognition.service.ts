import { Injectable } from '@angular/core';
import {Lang} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {


  public langs: Lang[] = [];
  public activeLanguage: string;

  constructor() { }
}
