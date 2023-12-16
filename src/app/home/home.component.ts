import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http : HttpClient) {}

  popMovieList = []
  topMovieList = []

  popUrl : string = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=050c28541f900007285c3020069bfd62';
  topUrl : string = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=050c28541f900007285c3020069bfd62';

  ngOnInit() {
    this.http.get(this.popUrl).subscribe({
      next: (data: any) => {
        this.popMovieList = data['results'];
    }, error: (err) => {
        console.error(err);
        
    }
    })

    this.http.get(this.topUrl).subscribe({
      next: (data: any) => {
        this.topMovieList = data['results'];
    }, error: (err) => {
        console.error(err);
        
    }
    })
  }
}
