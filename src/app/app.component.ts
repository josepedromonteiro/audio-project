import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import Speech from 'speak-tts';


export interface Lang {
  code: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'audio-project';
  public speech: Speech;
  public audioSource: string;
  public lang: Lang;
  public langs: Lang[] = [];
  public activeLanguage: string;
  public text: string;

  ngOnInit(): void {
    this.speech = new Speech();
    this.speech.init({
      volume: 1,
      lang: 'en-GB',
      rate: 1,
      pitch: 1,
      splitSentences: true,
      listeners: {
        onvoiceschanged: (voices) => {
          console.log('Event voiceschanged', voices);
        }
      }
    });

    if (this.speech.hasBrowserSupport()) {
      console.log('speech synthesis supported');
    }

    this.langs = [
      {
        name: 'Português',
        code: 'pt-PT'
      },
      {
        name: 'English',
        code: 'en-GB'
      }
    ];

    this.activeLanguage = this.langs[0].code;
  }

  playAudio(): void {
    const audio = new Audio(this.audioSource);
    audio.load();
    audio.play();
  }

  selectAudioFile(event: any): void {
    this.audioSource = event.target.files[0].src;
    this.playAudio();
  }

  public textToSpeech(): void {
    this.speech.setLanguage(this.activeLanguage);
    this.speech.speak({
      text: this.text,
      queue: false
    });
  }
}
