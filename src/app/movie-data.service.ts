import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Director } from './director';
import { Film } from './film';
import { Observable } from 'rxjs';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http : HttpClient) {}

  public getDirector():Observable<any>{
    return this.http.get<any>('http://localhost:7000/directors');
  }

  public getDirectorByName(directorName):Observable<any>{
    return this.http.get<any>(`http://localhost:7000/directors/${directorName}`);
  }

  public sendDirectorData(director : Director):Observable<any>{
    return this.http.post<any>('http://localhost:7000/director',director);
  }

  public getFilm():Observable<any>{
    return this.http.get<any>('http://localhost:7000/films');
  }

  public getFilmByName(filmName):Observable<any>{
    return this.http.get<any>(`http://localhost:7000/filmbyname/${filmName}`);
  }

  public getFilmByDirector(directorName):Observable<any>{
    return this.http.get<any>(`http://localhost:7000/films/${directorName}`);
  }

  public sendFilmData(film : Film):Observable<any>{
    return this.http.post<any>('http://localhost:7000/film',film);
  }

  public updateDirectorrData(directorName,director : Director):Observable<any>{
    return this.http.patch<any>(`http://localhost:7000/director/${directorName}`,director);
  }

  public deleteFilmData(filmName):Observable<any>{
    return this.http.delete<any>(`http://localhost:7000/film/${filmName}`);
  }

}
