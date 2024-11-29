import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './profile-modal.component.html',
  styleUrl: './profile-modal.component.css'
})
export class ProfileModalComponent {
  @Input() isOpen = false;

  close() {
    this.isOpen = false;
  }
}
