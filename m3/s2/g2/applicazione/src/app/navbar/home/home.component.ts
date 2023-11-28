import { Component } from '@angular/core';
import { Iposts } from '../../Models/iposts';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  posts:Iposts[]=[];

  constructor(private postsSvc:PostsService){}


  ngOnInit(){
    this.posts = this.postsSvc.posts
  }

  getPost(){

  }
}
