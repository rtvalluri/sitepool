var app = angular.module("poolApp", []);
app.controller("MainController", function($scope) {
    $scope.poolbase = [ {
        title: "Google",
        tags: "",
        links: [ {
            name: "Google efficiently",
            href: "http://www.makeuseof.com/tag/google-power-user/"
        } ]
    },{
        title: "Technical Interview Q&A",
        tags: "interviews questions tr technical awesome",
        links: [ {
            name: "Awesome Interviews",
            href: "https://github.com/MaximAbramchuck/awesome-interviews"
        } ]
    }, {
        title: "Html/Html5",
        tags: "markup",
        links: [ {
            name: "Introduction to HTML",
            href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction#History_of_HTML"
        }, {
            name: "Learn HTML",
            href: "http://learn.shayhowe.com/html-css/getting-to-know-html/"
        }, {
            name: "HTML5 in 5 mins",
            href: "https://msdn.microsoft.com/en-us/hh549253.aspx"
        }, {
            name: "More about HTML5",
            href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
        }, {
            name: "HTML5-Canvas tutorial",
            href: "http://www.html5canvastutorials.com/"
        }, {
            name: "HTML5 + your browser compatibility",
            href: "https://html5test.com/"
        } ]
    }, {
        title: "Free Responsive Web Templates",
        tags: "website webpage",
        links: [ {
            name: "HTML5UP",
            href: "http://html5up.net/"
        }, {
            name: "Get Template",
            href: "http://www.gettemplate.com/"
        }, {
            name: "Foundation Templates",
            href: "http://foundation.zurb.com/templates.html"
        }, {
            name: "Bootstrap Templates",
            href: "http://startbootstrap.com/template-categories/all/"
        } ]
    }, {
        title: "Css/Css3",
        tags: "flex,styling,layout",
        links: [ {
            name: "Learn CSS",
            href: "http://learn.shayhowe.com/html-css/getting-to-know-css/"
        }, {
            name: "Learn Layout",
            href: "http://learnlayout.com/"
        }, {
            name: "CSS Properties",
            href: "http://www.cssportal.com/css-properties/index.php"
        }, {
            name: "30 CSS selectors to remember",
            href: "http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048"
        }, {
            name: "Game on CSS selectors",
            href: "http://flukeout.github.io/"
        }, {
            name: "Game on CSS3 Flexbox",
            href: "http://flexboxfroggy.com/"
        }, {
            name: "Link vs Import",
            href: "https://www.stevesouders.com/blog/2009/04/09/dont-use-import/"
        } ]
    }, {
        title: "Choosing color for text",
        tags: "colors",
        links: [ {
            name: "Choose right color",
            href: "http://colorsafe.co/"
        }, {
            name: "Pick color online",
            href: "http://colourco.de/"
        } ]
    }, {
        title: "Css Generators",
        tags: "generator",
        links: [ {
            name: "Online CSS3 generator",
            href: "http://enjoycss.com/"
        }, {
            name: "CSS Matic",
            href: "http://www.cssmatic.com/"
        }, {
            name: "Generate CSS arrow",
            href: "http://cssarrowplease.com/"
        }, {
            name: "CSS Shapes",
            href: "https://css-tricks.com/examples/ShapesOfCSS/"
        }, {
            name: "CSS gradient generator",
            href: "http://www.colorzilla.com/gradient-editor/"
        } ]
    }, {
        title: "Css Frameworks",
        tags: "frameworks",
        links: [ {
            name: "Bootstrap",
            href: "http://getbootstrap.com/"
        }, {
            name: "Foundation",
            href: "http://foundation.zurb.com/"
        }, {
            name: "Metro UI",
            href: "http://metroui.org.ua/"
        }, {
            name: "Furtive-CSS micro framework",
            href: "http://furtive.co/"
        } ]
    }, {
        title: "JavaScript",
        tags: "js,ecmascript,es5",
        links: [ {
            name: "All about JavaScript",
            href: "http://jstherightway.org/"
        }, {
            name: "JavaScript Standards",
            href: "http://bguiz.github.io/js-standards/intro/"
        }, {
            name: "Interactive way to learn JS",
            href: "http://www.codecademy.com/en/tracks/javascript"
        }, {
            name: "JavaScript Styleguide",
            href: "https://github.com/airbnb/javascript"
        }, {
            name: "Learn Object oriented JavaScript",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript"
        }, {
            name: "Javascript Design Patterns",
            href: "https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know"
        }, {
            name: "Javascript Char codes",
            href: "http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes"
        }, {
            name: "jsPerf - compare js snippets ",
            href: "https://jsperf.com/"
        } ]
    }, {
        title: "Javascript Libraries",
        tags: "js jquery",
        links: [ {
            name: "Interactive way to learn jQuery",
            href: "http://try.jquery.com/"
        } ]
    }, {
        title: "AngularJS",
        tags: "js,javascript frameworks,ajs",
        links: [ {
            name: "AngularJS Guidelines",
            href: "http://bguiz.github.io/js-standards/angularjs/single-responsibility/"
        }, {
            name: "Angular StyleGuide",
            href: "https://github.com/johnpapa/angular-styleguide/tree/master/a1"
        }, {
            name: "AngularJS in 60minutes",
            href: "http://fastandfluid.com/publicdownloads/AngularJSIn60MinutesIsh_DanWahlin_May2013.pdf"
        }, {
            name: "AngularJS examples",
            href: "http://tutorialzine.com/2013/08/learn-angularjs-5-examples/"
        } ]
    }, {
        title: "Regular Expressions",
        tags: "regex",
        links: [ {
            name: "Regexone - learn interactively",
            href: "http://regexone.com/"
        }, {
            name: "Online Regex builder",
            href: "http://regexr.com/"
        } ]
    }, {
        title: "Learn Command Line Interface",
        tags: "cli cmd",
        links: [ {
            name: "Learn CLI the hard way",
            href: "http://cli.learncodethehardway.org/book/"
        } ]
    }, {
        title: "Introduction to programming",
        tags: "beginner coding",
        links: [ {
            name: "Lets Play the game",
            href: "http://learn.code.org/hoc/1"
        } ]
    }, {
        title: "One stop for programming",
        tags: "code learn api",
        links: [ {
            name: "Learn X in Y minutes",
            href: "http://learnxinyminutes.com/"
        }, {
            name: "Api hub",
            href: "http://overapi.com/"
        } ]
    }, {
        title: "C",
        tags: "compiled",
        links: [ {
            name: "Learn C the hard way",
            href: "http://c.learncodethehardway.org/book/"
        }, {
            name: "Basic c programs",
            href: "http://www.programiz.com/c-programming/examples"
        } ]
    }, {
        title: "Python",
        tags: "interpreted",
        links: [ {
            name: "Learn python the hard way",
            href: "http://learnpythonthehardway.org/book/"
        }, {
            name: "Basic python programs",
            href: "http://www.programiz.com/python-programming/examples"
        } ]
    }, {
        title: "Ruby",
        tags: "interpreted",
        links: [ {
            name: "Learn ruby the hard way",
            href: "http://learnrubythehardway.org/book/"
        }, {
            name: "Interactive way to learn ruby",
            href: "http://tryruby.org/levels/1/challenges/0"
        } ]
    }, {
        title: "Git",
        tags: "version control system vcs",
        links: [ {
            name: "Git in 15mins",
            href: "https://try.github.io"
        } ]
    }, {
        title: "Online Tutorials",
        tags: "free online all science technology",
        links: [ {
            name: "Scotch",
            href: "https://scotch.io/"
        }, {
            name: "Codecademy",
            href: "http://codecademy.com/"
        }, {
            name: "khanacademy",
            href: "https://www.khanacademy.org/"
        }, {
            name: "Codeschool",
            href: "https://www.codeschool.com/"
        }, {
            name: "Tutorials point",
            href: "http://tutorialspoint.com/"
        } ]
    }, {
        title: "Magazines for Web-development",
        tags: "web magazines smashing alistapart",
        links: [ {
            name: "Smashing magazine",
            href: "http://www.smashingmagazine.com/"
        }, {
            name: "Alistapart",
            href: "http://alistapart.com/topics"
        } ]
    }, {
        title: "Website Building",
        tags: "websites",
        links: [ {
            name: "Website creation guidelines by Google",
            href: "https://support.google.com/webmasters/answer/6001102"
        } ]
    }, {
        title: "Miscellaneous",
        tags: "grunt",
        links: [ {
            name: "Can I Use",
            href: "http://caniuse.com/"
        },{
            name: "Getting started with Grunt",
            href: "https://scotch.io/tutorials/a-simple-guide-to-getting-started-with-grunt"
        }, {
            name: "Grunt-Smashing Magazine",
            href: "http://www.smashingmagazine.com/2013/10/get-up-running-grunt/"
        }, {
            name: "Free e-books",
            href: "https://www.syncfusion.com/resources/techportal/ebooks"
        } ]
    } ];
    $scope.searchFilter = function(obj) {
        var re = new RegExp($scope.search, "i");
        return !$scope.search || re.test(obj.title) || re.test(obj.tags);
    };
});
