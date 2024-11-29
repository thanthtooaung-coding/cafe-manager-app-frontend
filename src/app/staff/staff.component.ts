import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface StaffMember {
  id: number;
  name: string;
  position: string;
  contactNumber: string;
}

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {
  staffMembers: StaffMember[] = [
    { id: 1, name: 'Alice Johnson', position: 'Barista', contactNumber: '123-456-7890' },
    { id: 2, name: 'Bob Smith', position: 'Manager', contactNumber: '234-567-8901' },
    { id: 3, name: 'Charlie Brown', position: 'Waiter', contactNumber: '345-678-9012' },
  ];

  newStaffMember: StaffMember = { id: 0, name: '', position: '', contactNumber: '' };

  addStaffMember() {
    if (this.newStaffMember.name && this.newStaffMember.position && this.newStaffMember.contactNumber) {
      this.newStaffMember.id = this.staffMembers.length + 1;
      this.staffMembers.push({...this.newStaffMember});
      this.newStaffMember = { id: 0, name: '', position: '', contactNumber: '' };
    }
  }

  deleteStaffMember(id: number) {
    this.staffMembers = this.staffMembers.filter(member => member.id !== id);
  }
}
