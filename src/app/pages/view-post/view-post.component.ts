import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent {

postId=this.route.snapshot.params['id'];
postData:any;

  constructor(private postService: PostService,
     private route: ActivatedRoute,
      private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log(this.postId);
    this.getPostById();
  }



  getPostById(){
    this.postService.getPostById(this.postId).subscribe((res)=>{
      this.postData = res;
      console.log(res);
    }, (error)=>{
      this.matSnackBar.open("Something Went Wrong", "Close");
    })
  }

  likePost(){
    this.postService.likePost(this.postId).subscribe((res)=>{
      this.matSnackBar.open("Post Liked succesfully", "Close");
      this.getPostById();
    }, (error)=>{
      this.matSnackBar.open("Something Went Wrong", "Close");
    })
  }

  dislikePost(){
    this.postService.dislikePost(this.postId).subscribe((res)=>{
      this.matSnackBar.open("Post Disliked succesfully", "Close");
      this.getPostById();
    }, (error)=>{
      this.matSnackBar.open("Something Went Wrong", "Close");
    })
  }


}
