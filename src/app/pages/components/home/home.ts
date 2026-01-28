import { Component, model } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  selected = model<Date | null>(null);
  carosalImgs: { imgSrc: string; title: string }[] = [
    { imgSrc: 'images/img-2.png', title: 'Pirâmide' },
    { imgSrc: 'images/img-3.png', title: 'Cachoeira da Pedra Furada' },
    { imgSrc: 'images/img-4.png', title: 'Cachoeiras Garrote e Porteira' },
    { imgSrc: 'images/img-5.png', title: 'Cachoeiras Caverna e Capelão' },
    { imgSrc: 'images/img-6.png', title: 'Cachoeira do Santuário' },
  ];
}
