import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../../../layout/components/footer/footer';
import { Navbar } from '../../../layout/components/navbar/navbar';

@Component({
  selector: 'app-main-page',
  imports: [Navbar, Footer, RouterModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
