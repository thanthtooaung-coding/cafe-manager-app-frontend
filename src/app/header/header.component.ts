import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileModalComponent } from "../profile-modal/profile-modal.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ProfileModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  isProfileModalOpen = false;

  toggleProfileModal() {
    this.isProfileModalOpen = !this.isProfileModalOpen;
  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
