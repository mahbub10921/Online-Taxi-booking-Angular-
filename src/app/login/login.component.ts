import { Component } from '@angular/core';
import { LoginServiceService } from '../loginService/login-service.service';
import { StorageService } from '../loginService/storage.service';
import { EventBusService } from '../event/event-bus.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private storageService: StorageService,
    private authService: LoginServiceService,
    private eventBusService: EventBusService,
    private router: Router) { }

    private roles: any[] = [{ roleName: '', roleDescription: '' }]


  showAdminBoard = false;
  showDriverBoard = false;
  showNormalBoard = false;
  isNab = true;
  eventBusSub?:Subscription;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  form: any = {
    username: null,
    password: null
  };
 
  // roles: any[] = [];
  username?: string=''


  ngOnInit(): void {
 



    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.role
      if (this.roles.some(item => item.roleName === 'Admin')) {
        this.router.navigateByUrl('/admin')
        this.isNab = false;
      }


      if (this.roles.some(item => item.roleName === 'User')) {
        this.router.navigateByUrl('/home')
        this.isNab = false;
      }


      if (this.roles.some(item => item.roleName === 'Driver')) {
        this.router.navigateByUrl('/driver')
        this.isNab = false;
      }
      this.username = user.userName;

    }
    this.eventBusSub=this.eventBusService.on('logout',()=>{
      this.logout();
      });





  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      
      next: data => {

        this.storageService.saveUser(data);
        console.log("Role---- -- -- ",this.storageService.getUser().role)

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().role;

        

        this.username = this.storageService.getUser().userName;
console.log('ttttttttttttttt',this.roles);

        if (this.roles.some(item => item.roleName === 'Admin')) {
          this.router.navigateByUrl('/admin')
          this.isNab = false;
        }


        if (this.roles.some(item => item.roleName === 'User')) {
          this.router.navigateByUrl('home')
          this.username = this.form.username
          localStorage.setItem("name", this.username)
          this.isNab = false;
        }





  
        if (this.roles.some(item => item.roleName === 'Driver')) {
          this.router.navigateByUrl('/driver')
          this.username = this.form.username
          localStorage.setItem("drivername", this.username)

          this.isNab = false;
        }

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

 
logout():void{
  this.storageService.clean();
  window.location.reload();
}

reloadPage():void{
  window.location.reload();
}


submit(){
  this.router.navigateByUrl('/availcab');
}




}
