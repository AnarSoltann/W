import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostService } from '../../service/post.service';
import { error } from 'console';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

postForm!: FormGroup;


constructor(private fb: FormBuilder,
   private router: Router,
   private snackBar: MatSnackBar,
   private postService: PostService,) {}

  ngOnInit(){
      this.postForm = this.fb.group({
        post: [null, Validators.required],
        category : [null, [Validators.required, Validators.maxLength(5000)]],
        img: [null, Validators.required]
})
}



createPost(){
 const data = this.postForm.value;
 
  this.postService.createNewPost(data).subscribe(res => {
    this.snackBar.open("Post created successfully !", "Close");
    this.router.navigateByUrl("/");

  },error => {
      this.snackBar.open("Error while creating post", "Close")
  })
}
}