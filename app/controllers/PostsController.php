<?php

use Tumblr\API\Client as Tumblr;

class PostsController extends BaseController {

    public function index($blogName)
    {
        $client = new Tumblr(Config::get('tumblr.consumer_key'));

        $options = Input::get('options');
        $posts = $client->getBlogPosts($blogName, $options);

        return Response::json($posts);
    }

}
