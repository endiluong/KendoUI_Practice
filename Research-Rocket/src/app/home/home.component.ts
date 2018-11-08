import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  public gridData: any[] = applicants;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
const applicants = [
  {
    Id: 27,
    FirstName: 'mrA',
    LastName: 'LastName8',
    ApplyforId: 5,
    StageId: 4,
    Email: 'sangthanhduong2002@gmail.com',
    Phone: '0123435334',
    PhoneScreenInterviewer: 'Duy Luong',
    PhoneScreenDate: '2018-10-09T00:00:00',
    Applyfor: {
      Id: 5,
      Name: 'Technical Architect'
    },
    Stage: {
      Id: 4,
      Name: 'Done'
    }
  },
  {
    Id: 28,
    FirstName: 'FirstName8',
    LastName: 'LastName8',
    ApplyforId: 3,
    StageId: 2,
    Email: 'sangthanhduong2002@gmail.com',
    Phone: '0123435334',
    PhoneScreenInterviewer: 'Minh Triet',
    PhoneScreenDate: '2018-10-09T00:00:00',
    Applyfor: {
      Id: 3,
      Name: 'Senior Software Engineer'
    },
    Stage: {
      Id: 2,
      Name: 'HR Interview'
    }
  }
];
