import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  
  characters:any[] = [];;
  id = '';
  url = '';
  char:any;

  constructor(private http : HttpClient, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.url = 'https://rickandmortyapi.com/api/character';

    this.getCharacterbyId();
  }

  getCharacterbyId(){
    this.http.get(this.url).subscribe((response:any) => {
      this.characters = response.results;
      let index = this.characters.findIndex(
        (char: {id: string}) => char.id == this.id
      );
      if(index > -1){
        this.char = this.characters[index];
      }
    })
    }
  }

