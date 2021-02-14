import { Component, OnInit } from '@angular/core';
import { DashboarService } from '../dashboar.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/store/app.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profileData: FormGroup;
  profilePic:any;
  token = localStorage.getItem('token');
  userDetails:any;
  successResult:any;
  serverErrors:any;
  data: any;
  potal:any

  constructor(private authService: DashboarService,
                private router: Router,
                private store: Store<AuthState>,
                private http: HttpClient
              ) {

                this.data = {
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                      {
                          label: 'Java Developer',
                          backgroundColor: '#42A5F5',
                          borderColor: '#1E88E5',
                          data: [65, 59, 80, 81, 56, 55, 40]
                      },
                      {
                          label: 'Php Developer',
                          backgroundColor: '#9CCC65',
                          borderColor: '#7CB342',
                          data: [28, 48, 40, 19, 86, 27, 90]
                      }
                  ]
              }
              this.potal = {
                datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56",
                        "#E7E9ED",
                        "#36A2EB"
                    ],
                    label: 'My dataset'
                }],
                labels: [

                    "CPT",
                    "Green Card",
                    "H1B-Transfer",
                    "OPT",
                    'US CITIZEN'


                ]
            }
               }

  fileEvent(e){
    if (!this.validateFileExtension(e.target.files[0].name)) {
      alert("Unsupported file formate");
      e.srcElement.value = null;
      return false;
    }
    this.profilePic = e.target.files[0];
  }

  ngOnInit(): void{
    //reactive form object
    this.profileData = new FormGroup({
      'image' : new FormControl(null,[Validators.required])
    })

    //get user detail
    this.authService.getUserDetails().subscribe(
      response => {
        console.log("Admin",response);
        this.userDetails = response;
      },err => {
        console.log("Admin",err);
    });
  }

  get image() { return this.profileData.get('image')}

  getUser(): void{
    // this.authService.getUsers().subscribe(
    //   response => { console.log(response)},
    //   err => { console.log(err);}
    // )

    // this.authService.getUserDetails().subscribe(
    //   response => {
    //     console.log("Admin",response);
    //     this.userDetails = response;
    //   },err => {
    //     console.log("Admin",err);
    // });
  }

  logout(): void{
    let token = localStorage.getItem('token');
    let user_id = localStorage.getItem('user_id');
    console.log(token+" "+user_id);
    this.authService.logOutUser(user_id).subscribe(
      response => {
        console.log(response);
        localStorage.clear();
        this.store.dispatch(new AuthActions.Logout());
        this.router.navigate(['/login']);
      },
      err => { console.log(err); }
    )
  }

  updateUserProfile() {
    var profileData = new FormData();
    //const headers = new HttpHeaders();

    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');

    profileData.append('image', this.profilePic);

  this.authService.updateProfile(profileData).subscribe(data => {
      this.successResult = data;
      this.profileData.reset();
      console.log(data);
    },err =>{
      this.serverErrors = err.error;
    });
  }

  nextPage(url: string){
    console.log(url);
    this.authService.getUserLogsDetailsWithPagination(url).subscribe(
      response => {
        this.userDetails = response;
        console.log(response);
      },err => {
        console.log(err);
    });
  }

  individualPage(url: string, page: number){
    console.log(url+"?page"+page);
    this.authService.getUserLogsDetailsWithPagination(url+"?page="+page).subscribe(
      response => {
        this.userDetails = response;
        console.log(response);
      },err => {
        console.log(err);
    });
  }

  prevPage(url: string){
    console.log(url);
    this.authService.getUserLogsDetailsWithPagination(url).subscribe(
      response => {
        this.userDetails = response;
        console.log(response);
      },err => {
        console.log(err);
    });
  }

  validateFileExtension(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'png' || ext.toLowerCase() == 'jpg') {
        return true;
    }else {
        return false;
    }
}

}
