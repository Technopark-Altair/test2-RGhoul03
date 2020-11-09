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
  result: Boolean; 

  doCalc(){
    if(this.firstOperand != null && this.secondOperand != null && this.operator != null){
      if(this.operator != "!"){
        if(this.operator_2 == "&&"){
          this.result = Boolean(this.firstOperand && this.secondOperand)
        }else if(this.operator_2 == "||"){
          this.result = Boolean(this.firstOperand || this.secondOperand)
        }
      }else if(this.operator == "!"){
        if(this.operator_2 == "&&"){
          this.result = !Boolean(this.firstOperand && this.secondOperand)
        }else if(this.operator_2 == "||"){
          this.result = !Boolean(this.firstOperand || this.secondOperand)
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
