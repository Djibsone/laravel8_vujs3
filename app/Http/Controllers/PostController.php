<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        //return PostResource::collection(Post::all());
        //$posts = Post::orderBy('created_at', 'desc')->paginate(3);
        $posts = Post::all();
        return response()->json($posts);
    }
}
