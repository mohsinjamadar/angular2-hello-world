import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    .ovelay-massage {
      position: absolute;
      top: 5px;
      left: 43%;
      padding: 10px;
      line-height: 15px;
      font-size: 15px;
      background-color: rgba(0, 0, 0, 1);
      color: #FFF;
      opacity: 0.5;
      border-radius: 5px;
      
      webkit-animation: fadeinout 3s linear forwards;
      animation: fadeinout 3s linear forwards;
    }

    @-webkit-keyframes fadeinout {
      0%,100% { opacity: 0; }
      50% { opacity: 1; }
    }

    @keyframes fadeinout {
      0%,100% { opacity: 0; }
      50% { opacity: 1; }
    }
  `],
  template: `
    <div class="jumbotron text-center">
      <p>{{ greetUser("Alpha", "User") }}</p>
      <input type="button" (click) = "showMessage()" value="Click Me" />
    </div>
    <p *ngIf="showOverlay" class="ovelay-massage">{{ overlayMsgText }}</p>
  `
})
export class AppComponent {
  message = 'Welcome... ';

  showOverlay: bool = false;

  greetUser(str1, str2) {
    return this.message + " " + str1 + " " + str2
  };
  showMessage(){
    this.overlayMsgText = "Test message";
    this.showOverlay = true;
    setTimeout(() => {
      this.showOverlay = false;
    }, 3000);
  };
}