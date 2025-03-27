import { Component, OnInit  , NgZone} from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Router } from '@angular/router';
import { skis } from 'src/assets/jsons/skis';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-split-style',
  templateUrl: './split-style.component.html',
  styleUrls: ['./split-style.component.css']
})
export class SplitStyleComponent implements  OnInit {
  check : any 
  type_terrain : any 
  tr : any 







  private animationItem!: AnimationItem;
  
  options: AnimationOptions = {
    
    autoplay:false,
    path: '../../../assets/jsons/animation/6/6.json',
  
  };


  options2: AnimationOptions = {
    
    autoplay:true,
    path: '../../../assets/jsons/animation/1/1.json',
  
  };


  updateAnimation(): void {


    this.options = {
      
      ...this.options, // In case you have other properties that you want to copy
      path: '../../../assets/jsons/animation/test.json',
     

  }
  }

  
  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    
  }












  constructor (private  dataService: DataServiceService  ,private ngZone: NgZone , private router: Router) { }

  play(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.play();
    });
  }
  
  stop(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.pause();
    });
  }


 
   ngOnInit(): void {
   }
 
 
     
    arrayRemove(arr : any , value : any) { 
     
     return arr.filter(function(ele : any){ 
         return ele != value; 
     });
 }
 
 sendNewData(data: any) {
   this.dataService.sendDataF(data);
 }
 
   checkCheckBoxvalue(event : any ){
    if (event.target.checked){
      this.stop()
      this.play()
      setTimeout(()=>{
       this.stop()
      },1500)
     this.tr = true ;
       console.log(event.target.value)
       this.sendNewData(event.target.value)
  }
  else {
   this.tr = false ;
  }
 // this.sendNewData(event.target.value)
   }
   
   
   
 
 
 }
 