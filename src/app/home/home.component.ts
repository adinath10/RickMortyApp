import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  characters:any[] = [];

  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.http.get('https://rickandmortyapi.com/api/character').subscribe((response:any) => {
      this.characters = response.results;
    })
  }

  goToCharacter(id:string){
    this.router.navigate(['character',id]);
  }
}
