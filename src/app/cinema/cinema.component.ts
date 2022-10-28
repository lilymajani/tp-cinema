import { Component, OnInit } from '@angular/core';
import {CinemaService} from "../service/cinema.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IFilm} from "../model/film.model";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  public form!: FormGroup;
  public films: IFilm[] = [];

  constructor(
    private cinemaService: CinemaService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      recherche: new FormControl(null, Validators.required),
    })
  }

  search() {
    console.log('recherche form : ', this.form.get('recherche')?.value)
    this.cinemaService
      .getFilms(this.form.get('recherche')?.value, 1)
      .subscribe(data => {
        this.films = data.results
        console.log(data)
        }
      )
  }
}
