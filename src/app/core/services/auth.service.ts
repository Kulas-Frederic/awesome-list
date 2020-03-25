import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { UsersService } from 'src/app/core/services/users.service';
import { ErrorService } from 'src/app/core/services/error.service';

@Injectable({
 providedIn: 'root'
})
export class AuthService {
 private user: BehaviorSubject<User|null> = new BehaviorSubject(null);
 public readonly user$: Observable<User|null> = this.user.asObservable();
 
 constructor(private http: HttpClient, private usersService: UsersService, private errorService: ErrorService) { }

 public register(name: string, email: string, password: string): Observable<User|null> {
  const url = `${environment.firebase.auth.baseURL}/signupNewUser?key=${environment.firebase.apiKey}`;
      
  const data = {
    email: email,
    password: password,
    returnSecureToken: true
  };

  const httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json'})
  };

  return this.http.post(url, data, httpOptions).pipe(
    switchMap((data: any) => {
     const jwt: string = data.idToken;
     const user = new User({
      email: data.email,
      id: data.localId,
      name: name
     });
  
     return this.usersService.save(user, jwt);
    }),
    tap(user => this.user.next(user)),
    catchError(error => this.errorService.handleError(error))
  );
}     


 login(email: string, password: string): Observable<User|null> {
  // 1. A faire : Faire un appel au backend.
  // 2. A faire : Mettre à jour l’état en fonction de la réponse du backend.
  // 3. A faire : Retournez la réponse du backend sous la forme d’un Observable,
  //    pour le composant qui déclenche cette action.
  
  return of(new User());
  // Simple code pour calmer votre IDE.
  // Retourne un Observable contenant un utilisateur,
  // grâce à l’opérateur of de RxJS.
 }

//  submit() {
//   this.authService.login('John', 'Doe').subscribe(user => {
//    this.user = user;
//    // Effectuer une autre action, avec l’utilisateur venant de s’inscrire.
//   });
//  }

//  register(name:string, email:string, password:string): Observable<User|null> {
//   return of(new User());
//  }

 public logout(): Observable<null> {
  return of(null);
 }

}