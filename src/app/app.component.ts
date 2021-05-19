import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LanguageService} from './services/languages/language.service';
import {SpeakService} from './services/speak/speak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title = 'audio-project';
  public activeLanguage: string;
  public text: string;

  constructor(public languageService: LanguageService,
              public speakService: SpeakService) {
  }

  ngOnInit(): void {
    this.activeLanguage = this.languageService.langs[0].code;
  }

  public textToSpeech(): void {
    this.speakService.speech.setLanguage(this.activeLanguage);
    this.speakService.speech.speak({
      text: this.text,
      queue: false
    });
  }
}
