<!DOCTYPE html>
<html lang="en" ng-app="singleUserDash">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="/css/main.css">
    <title ng-if="!blog.name">Single User Dash</title>
    <title ng-if="blog.name">{{ blog.name }} - Single User Dash</title>
    <link rel="shortcut icon" href="http://api.tumblr.com/v2/blog/{{ blog.name }}.tumblr.com/avatar/16">
    <link rel="apple-touch-icon" href="http://api.tumblr.com/v2/blog/{{ blog.name }}.tumblr.com/avatar/128">
</head>
<body>

    <div class="page-wrap">
        <div ng-view></div>
    </div>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.20/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.20/angular-route.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.20/angular-resource.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.20/angular-sanitize.min.js"></script>
    <script type="text/JavaScript" src="/lib/ng-infinite-scroll.min.js"></script>
    <script type="text/JavaScript" src="/js/services.js"></script>
    <script type="text/JavaScript" src="/js/app.js"></script>
    <% $analytics %>
</body>
</html>
<!--
                       88
                       88
                       88
                       88   ,adPPYba,    ,adPPYba,
                       88  a8"     "8a  a8P_____88
                       88  8b       d8  8PP"""""""
       db      88,   ,d88  "8a,   ,a8"  "8b,   ,aa    88
      d88b      "Y8888P"    `"YbbdP"'    `"Ybbd8"'    88
     d8'`8b                                           88
    d8'  `8b      8b,dPPYba,   888888888  ,adPPYYba,  88   ,adPPYba,   8b,dPPYba,    ,adPPYba,
   d8YaaaaY8b     88P'   `"8a       a8P"  ""     `Y8  88  a8"     "8a  88P'   `"8a  a8P_____88
  d8""""""""8b    88       88    ,d8P'    ,adPPPPP88  88  8b       d8  88       88  8PP"""""""
 d8'        `8b   88       88  ,d8"       88,    ,88  88  "8a,   ,a8"  88       88  "8b,   ,aa
d8'          `8b  88       88  888888888  `"8bbdP"Y8  88   `"YbbdP"'   88       88   `"Ybbd8"'

This has been a JoeAnzalone.com Production -->
