import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LeinstercountiesPage } from '../leinstercounties/leinstercounties.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LeinstercountiesPage]
})
export class LeinsterPage implements OnInit {

  constructor(private router:Router) {
    this.router.navigate(['/leinstercounties'])
   }

  onButtonClick() {}
  ngOnInit() {
  }

}
