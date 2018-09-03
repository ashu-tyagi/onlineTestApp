import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector : 'app-home',
  templateUrl : './home.component.html'
})


export class AppHomeComponent {

name = 'Welcome to Exam Skill Test ';

   user ={
    name:'',
    email:'',
    testType:''
  };

  listOfTest = [{
    id:1,
    code:'ng',
    name:'Angular'
  },
  {
    id:2,
    code:'js',
    name:'JavaScript'
  },
  {
    id:3,
    code:'css',
    name:'CSS Stlying'
  },
   {
    id:4,
    code:'ctet',
    name:'CTET'
  },
  ]

    constructor(private router: Router, private sessionStorageService: SessionStorageService){

    }

    submitCheck() {
    if (this.user.name && this.user.email && this.user.testType) {
      this.nextPage();
    } else {
     alert('Input the data');
    }
  }

  nextPage() {
    this.sessionStorageService.store( 'user', this.user );
    this.router.navigate(['/test']);
  }

}


