import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiFlagService } from './service/ui-flag.service';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  loader$;
  constructor(flagService:UiFlagService){
    this.loader$ = flagService.loader$;
  }
}
