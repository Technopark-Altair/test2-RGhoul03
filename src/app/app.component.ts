import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core'; 

@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css' ]
})
export class AppComponent { 
  title = 'my-app'; 
  firstOperand: number; 
  secondOperand: number; 
  operator:string; 
  operator_2:string;
  errorMessage: string;
  result: number; 

  doCalc(){
    if(this.firstOperand == 1 || this.firstOperand == 0 || this.secondOperand == 1 || this.secondOperand == 0){
      if(this.operator == null){
        if(this.operator_2 == "&&"){
          if(this.firstOperand == 1 && this.secondOperand == 1){
            this.result == 1;
            this.errorMessage == "нет ошибки"
          }else{
            this.result == 0;
          }
        }else if(this.operator == "||"){
          if(this.firstOperand == 1 || this.secondOperand == 1){
            this.result == 1;
          }else{
            this.result == 0;
          }
        }
      }
    }else{ 
      if(this.firstOperand == null){ 
        this.errorMessage = "Нет первого операнда"; 
      }else if(this.secondOperand == null){ 
        this.errorMessage = "Нет второго операнда"; 
      }else if(this.operator == null){ 
        this.errorMessage = "Нет оператора"; 
      } 
    }  
  }
}
