import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-block15',
  templateUrl: './block15.component.html',
  styleUrls: ['./block15.component.scss']
})
export class Block15Component implements OnInit {

  from: any;
  message: any;
  submited = false;
  mailError = false;
  constructor(private mailService: MailService) { }

  ngOnInit(): void {
  }

  sendMail() {
    const data = {
      from: this.from,
      message: this.message
    }

    if (data.from == undefined || data.from == "" || data.message == undefined || data.message == "") {
      this.mailError = true;
      this.submited = false;
    }
    else {
      this.mailService.sendMail(data).subscribe(
        response => {
          console.log(response);
          this.submited = true;
          this.mailError = false;
        },
        error => {
          console.log(error);
          this.mailError = true;
          this.submited = false;
        }
      )
    }
  }

}
