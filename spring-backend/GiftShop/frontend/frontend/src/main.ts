import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

let b: any;

enum Color {Red=0, Green=1}
let backgroundColor = Color.Red;

let message;
message = 'abc';
let endsWithC =(message as string).endsWith('c');
message =3;

let log = function(message){
  console.log(message);
};
let doLog = ()=> console.log();

let drawPoint = (x,y,b,c,v,d)=>{
  //....
};
 class Point{


  constructor(public x?:number, private y?:number){

  }

  draw(){
    console.log('X '+ this.x + ' Y:' + this.y);
  }
  getX(){
    return this.x;
  }
setX(value){
   if(value<0)
     throw new Error('value cannot be less than 0.');
   this.x=value;
}
}



let point = new Point(1,2);
point.getX();
point.draw();
