export interface IFilm {
  id? :number;
  title?: string;
  overview?: string;
  poster_path?: string;
}

export class Film implements IFilm {
  constructor(
    public id? :number,
    public title?: string,
    public overview?: string,
    public poster_path?: string
  ) {
  }
}
