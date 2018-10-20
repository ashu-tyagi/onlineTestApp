import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor() { }

  question = '';
  answer1 = '';
  answer2 = '';
  answer3 = '';
  answer4 = '';
  dataList = [];

  ngOnInit() {  }

  addQuestion(){
    if (this.question == '') {
      alert('Please fill the data');
    } else {
      this.dataList.push(this.question );
      
    }
  }

}
