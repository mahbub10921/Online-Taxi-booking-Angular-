import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/loginService/storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title1 = "Rahim";
  userName = "";

  constructor(private storageService: StorageService,
    private router: Router) { }
  ngOnInit(): void {
    this.userName = this.storageService.getUser().userName;
  }


  logout(): void {
    this.storageService.clean();
    window.location.reload();
    this.router.navigateByUrl('/home')


  }


    isSidebarOpen = false;
  
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  


    



     toggleSidebar1() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('collapsed');
    }
  


}
