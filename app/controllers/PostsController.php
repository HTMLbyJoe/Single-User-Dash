<?php

class PostsController extends BaseController {

    public function index()
    {
        $response = json_decode('["First post", "Second post", "A third post"]');

        return $response;
    }

}
