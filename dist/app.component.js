"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Welcome... ';
        this.showOverlay = false;
    }
    AppComponent.prototype.greetUser = function (str1, str2) {
        return this.message + " " + str1 + " " + str2;
    };
    ;
    AppComponent.prototype.showMessage = function () {
        var _this = this;
        this.overlayMsgText = "Test message";
        this.showOverlay = true;
        setTimeout(function () {
            _this.showOverlay = false;
        }, 3000);
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: ["\n    .ovelay-massage {\n      position: absolute;\n      top: 5px;\n      left: 43%;\n      padding: 10px;\n      line-height: 15px;\n      font-size: 15px;\n      background-color: rgba(0, 0, 0, 1);\n      color: #FFF;\n      opacity: 0.5;\n      border-radius: 5px;\n      \n      webkit-animation: fadeinout 3s linear forwards;\n      animation: fadeinout 3s linear forwards;\n    }\n\n    @-webkit-keyframes fadeinout {\n      0%,100% { opacity: 0; }\n      50% { opacity: 1; }\n    }\n\n    @keyframes fadeinout {\n      0%,100% { opacity: 0; }\n      50% { opacity: 1; }\n    }\n  "],
            template: "\n    <div class=\"jumbotron text-center\">\n      <p>{{ greetUser(\"Alpha\", \"User\") }}</p>\n      <input type=\"button\" (click) = \"showMessage()\" value=\"Click Me\" />\n    </div>\n    <p *ngIf=\"showOverlay\" class=\"ovelay-massage\">{{ overlayMsgText }}</p>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map