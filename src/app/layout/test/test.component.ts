import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {SharedDataService} from '../../shared/shared-data.service';
import {SessionStorageService} from 'ngx-webstorage';


@Component({
  selector : 'app-test',
  templateUrl: './test.component.html',
  styles : [`
    .example-radio-group {
      display: inline-flex;
      flex-direction: column;
    }
    .example-radio-button {
       margin: 5px;
     }

    .example-selected-value {
      margin: 15px 0;
    }
    .widthfull{
      width:100%;
    }
  `]
})


export class AppTestComponent implements  OnDestroy {

  test: string = "NG test";
  relationship = '';
  t1 = new Date(0);
  timerInterval: any;
  timer = 0;
  score = 0;
  user = {};
  currentQuestion = 1;
  questionList = [];
  ques = { descr : "What is Angular Js",
    quesNo: 1 ,
    options:[
      {
        desc : "Framework",
        seq:"12"
      },
      {
        descr:"Library",
        seq:"11"
      },
      {
        descr:"Browser",
        seq:"10"
      },
      {
        descr:"Language",
        seq:"9"
      },

    ],
    answer: 12,
    answerFilled:''
  };


  /**
   * @description Initialize function
   * @constructor
   * @param {object} NavController - The title of the book.
   * @param {object} NavParams - The author of the book.
   */
  constructor( public router: Router,
               public sharedDataService: SharedDataService,
               private sessionStorageService: SessionStorageService) {
    this.user = this.sessionStorageService.retrieve('user');
    this.questionList = sharedDataService.getExamQuestions();
    this.questionList.map((item) => {
      item.answerFilled = '';
    })
    this.loadQuestion();
    this.t1.setHours( 0, 20 , 0 , 0 );
    this.timer = this.t1.getTime() ;
    this.timerInterval = setInterval(() => {
      this.timer = this.timer  - 1000;
    }, 1000);
    setTimeout(() => {
      this.completeTest();
    }, 720000);

  }
  /**
   * @author acharyaks90
   * @description Finish the test
   * @method
   */
  completeTest () {
    this.selectedAnswer();
    this.sessionStorageService.store('user', this.user);
    this.router.navigate(['/result']);
  }

  /**
   * @author acharyaks90
   * @description Load Questions from test DB
   * @method loadQuestion
   */

  loadQuestion() {
    this.ques = this.questionList[this.currentQuestion - 1];
  }

  /**
   * @author acharyaks90
   * Load Previous Question
   * @method previousQuestion
   */

  previousQuestion(){
    if(this.currentQuestion > 1){
      --this.currentQuestion;
      this.loadQuestion()
    }
  }

  /**
   * @author acharyaks90
   * @description Load Next Question
   * @method nextQuestion
   */
  nextQuestion(){
    if(this.currentQuestion < this.questionList.length){
      ++this.currentQuestion;
      this.loadQuestion()
    }
  }

  /**
   * @author acharyaks90
   * @description Event fired on answering the question
   * @method nextQuestion
   */

  selectedAnswer(){
    this.score =0;
    this.questionList.forEach((item)=>{
      if(item.answerFilled && item.answer == item.answerFilled ){
        this.score = this.score + 5;
      }
    })
  }

  /**
   * @author acharyaks90
   * @description Event fired on answering the question
   * @method ngOnDestroy
   */

  ngOnDestroy() {
    window.clearInterval(this.timerInterval);
  }
}


