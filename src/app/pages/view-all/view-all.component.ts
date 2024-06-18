import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss'
})
export class ViewAllComponent {

  postId=this.route.snapshot.params['id'];

  allPosts: any ;
  postData:any;

  constructor(private postService: PostService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private matSnackBar: MatSnackBar) { }

    ngOnInit() {
      this.getAllPosts();
    }


    getAllPosts() {

      this.postService.getAllPosts().subscribe(res => {
        console.log(res);
        this.allPosts = res;
      }, error => {
        this.snackBar.open("Something Went Wrong!  Check ANS DEV OTHER PROJECTS HERE..", "Close")
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


    getPostById(){
      this.postService.getPostById(this.postId).subscribe((res)=>{
        this.postData = res;
        console.log(res);
      }, (error)=>{
        this.matSnackBar.open("Something Went Wrong", "Close");
      })
    }




}
