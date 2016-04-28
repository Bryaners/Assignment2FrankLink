'use strict';

angular.module('yoHackerNewsApp')
  .controller('PostsController', ['$scope','PostsService', 
       function($scope,PostsService) {
    PostsService.getPosts()
        .success(function(posts) {
             $scope.posts = posts;
        });

    $scope.incrementUpvotes = function(post) {
       PostsService.upvotePost(post._id, post.upvotes + 1 )
          .success(function(updated_post) {
              post.upvotes = updated_post.upvotes
          })
    }
   


    $scope.addPost = function(){
        var post = {
            title: $scope.newPost.title,
            link: $scope.newPost.link,
            username : $scope.newPost.username,
            }
       PostsService.addPost(post)
          .success(function(added_post) {
             $scope.posts.push(added_post);
             $scope.newPost = { }
          });
    }



















//
$scope.delete = function(post) {
  
      if (confirm("Are you sure you want to delete this Post? " + post)) {
              console.log('Deleting post : ' + post);
        $http.delete('/api/posts' + post)
            .success(function(data) {
                console.log(data);
                findAll();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
          }
    };
    
}]) 