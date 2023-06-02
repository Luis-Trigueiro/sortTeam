import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-random-choice',
  templateUrl: './random-choice.component.html',
  styleUrls: ['./random-choice.component.css']
})
export class RandomChoiceComponent {
  people = ['MIGUEL','LUIS','JOÃO LEOCÁDIO','JOÃO FERREIRA','NUNO','VITOR','MARISA','JOANA','RITA','TIAGO CASTRO','TIAGO BASTOS']
  chosePerson!: string
  form=new FormGroup({
    person:new FormControl()
  })

  chosePeople(max:number) {
  const randomNumber=Math.floor(Math.random() * max);
  this.chosePerson=this.people[randomNumber]
  this.people=this.people.filter(name=>name!==this.chosePerson)
  }

  reset(){
    this.people = ['maria','luis','carlos']
  }

  addPerson(){
    this.people=[...this.people,this.form.value?.person]
  }

  
}
