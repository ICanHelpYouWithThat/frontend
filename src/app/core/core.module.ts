import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { ProfileService } from './services/profile.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProfileService
  ]
})
export class CoreModule { }
