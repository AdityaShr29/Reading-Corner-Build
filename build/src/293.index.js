"use strict";(self.webpackChunkbookshelf_3=self.webpackChunkbookshelf_3||[]).push([[293],{5566:function(r,n,o){var i=o(8081),t=o.n(i),e=o(3645),a=o.n(e)()(t());a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap);"]),a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap);"]),a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans&display=swap);"]),a.push([r.id,'*,\r\nh1,\r\np,\r\ndiv{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    font-family: \'DM Sans\', sans-serif;\r\n}\r\n\r\n.welcome-page-container{\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    position: relative;\r\n    \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n.welcome-text{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 15%;\r\n\r\n    font-size: 3vw;\r\n    font-weight: bold;\r\n}\r\n\r\n.text-animation-span::before{\r\n    content: "";\r\n    animation: animate 6s forwards infinite;\r\n    position: absolute;\r\n    color: #10BEB9;\r\n    /* transition: 2s; */\r\n    font-family: \'DM Sans\', sans-serif;\r\n}\r\n\r\n@keyframes animate {\r\n    0%{\r\n        content: "BOOKS";\r\n        transform: translateY(-60px); opacity: 0;\r\n    }\r\n    20%{\r\n        content: "BOOKS";\r\n        transform: translateY(0px); opacity: 1;\r\n    }\r\n    40%{\r\n        content: "BOOKS";\r\n        transform: translateY(60px); opacity: 0;\r\n    }\r\n\r\n    60%{\r\n        content: "BLOGS";\r\n        transform: translateY(-60px); opacity: 0;\r\n    }\r\n    80%{\r\n        content: "BLOGS";\r\n        transform: translateY(0px); opacity: 1;\r\n    }\r\n    100%{\r\n        content: "BLOGS";\r\n        transform: translateY(60px); opacity: 0;\r\n    }\r\n}\r\n\r\n.welcome-button{\r\n    font-size: 1vw;\r\n    font-weight: bold;\r\n    position: relative;\r\n    top: 7vw;\r\n    color: #10BEB9;\r\n    background-color: white;\r\n    border: 1px solid #10BEB9;\r\n    border-radius: 50px;\r\n    padding-block: 0.8vw;\r\n    padding-inline: 3.3vw;\r\n\r\n    transition: 0.4s;\r\n}\r\n\r\n.welcome-button:hover{\r\n    cursor: pointer;\r\n    background-color: #10BEB9;\r\n    color: white;\r\n}\r\n\r\n.navbar{\r\n    display: flex;\r\n    gap: 20px;\r\n\r\n    padding-block-start: 1%;\r\n    padding-inline: 1%;\r\n\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.navbar-logo{\r\n    width: 5%;\r\n}\r\n.navbar-content > h1{\r\n    margin: 0;\r\n    font-family: \'DM Sans\', sans-serif;\r\n    font-weight: bold;\r\n\r\n    color: #10BEB9;\r\n}\r\n\r\n.navbar-content > p{\r\n    margin: 0;\r\n    font-size: 0.8vw;\r\n    font-family: \'DM Sans\', sans-serif;\r\n    font-weight: 100;\r\n\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.book-search-input-container{\r\n    position: relative;\r\n    padding-inline-end: 4%;\r\n}\r\n\r\n.search-icon{\r\n    position: absolute;\r\n    width: 2.7%;\r\n    border-radius: 100%;\r\n    top: 29.9px;\r\n    left: 47.1%;\r\n\r\n    filter: opacity(70%);\r\n}\r\n\r\n.book-search-input{\r\n    position: relative;\r\n    margin-inline: 2%;\r\n    margin-block-start: 2%;\r\n    border-radius: 50px;\r\n    width: 20%;\r\n    padding-block: 0.8%;\r\n    padding-inline: 1%;\r\n\r\n    background-color: #10beb84a;\r\n\r\n    border: 1px solid #10BEB9;\r\n\r\n    transition: all 0.5s;\r\n}\r\n\r\n.blog-search-input-container{\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.admin-blog-search-input{\r\n    width: 20%;\r\n    padding-block: 1%;\r\n    padding-inline: 1.8%;\r\n\r\n    transition: all 0.5s;\r\n}\r\n\r\n.blog-search-input{\r\n    width: 20%;\r\n    padding-block: 0.6%;\r\n    padding-inline: 1.8%;\r\n\r\n    transition: all 0.5s;\r\n}\r\n\r\ninput.active{\r\n    width: 100%;\r\n}\r\ninput.active-blog{\r\n    width: 50%;\r\n}\r\n\r\n.blog-search-icon{\r\n    position: absolute;\r\n    width: 20%;\r\n}\r\n\r\ninput[type="search"]::placeholder{\r\n    color: #10BEB9;\r\n}\r\n\r\ninput[type="search"]:focus{\r\n    outline: none;\r\n    border: 1px solid #10BEB9;\r\n    background-color: white;\r\n    color: black;   \r\n}\r\n\r\n.functioning-elements{\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    padding-inline: 2%;\r\n}\r\n\r\n.admin-book-search-input{\r\n    margin-inline: 2%;\r\n    margin-block-start: 2%;\r\n    border-radius: 50px;\r\n    width: 250%;\r\n    padding-block: 0.8vw;\r\n    padding-inline: 1vw;\r\n\r\n    background-color: #10beb84a;\r\n\r\n    border: 1px solid #10BEB9;\r\n\r\n    transition: all 0.5s;\r\n}\r\n\r\n.admin-search-icon{\r\n    position: absolute;\r\n    width: 2.7vw;\r\n    border-radius: 100%;\r\n    top: 10%;\r\n    left: 171%;\r\n\r\n    filter: opacity(70%);\r\n}\r\n\r\n.landing-page-container{\r\n    display: grid;\r\n    grid-template-columns: 2fr 3fr;\r\n}\r\n\r\n.warren-img{\r\n    width: 100%;\r\n    height: 100vh;\r\n    image-rendering: optimizeSpeed;\r\n    object-fit: cover;\r\n    filter: brightness(60%);\r\n}\r\n\r\n.logo-container{\r\n    height: 100vh;\r\n    text-align: center;\r\n\r\n    position: relative;\r\n    \r\n    animation: logo 2s forwards;\r\n}\r\n\r\n@keyframes logo {\r\n    0%{opacity: 0;}\r\n    100%{opacity: 1;}\r\n}\r\n\r\n.logo-content{\r\n    position: relative;\r\n    top: 50%;\r\n    transform: translateY(-60%);\r\n}\r\n\r\n.logo-img{\r\n    width: 30%;\r\n}\r\n\r\n.logo-title{\r\n    font-size: 4.5vw;\r\n    font-family: \'DM Sans\', sans-serif;\r\n    color: #10BEB9;\r\n}\r\n\r\n.logo-sub-title{\r\n    font-family: \'DM Sans\', sans-serif;\r\n    color: rgb(35, 35, 35);\r\n    letter-spacing: 3px;\r\n    word-spacing: 2px;\r\n    font-weight: 100;\r\n}\r\n\r\n.landingpage-btn-container{\r\n    display: flex;\r\n    gap: 30px;\r\n\r\n    position: relative;\r\n    margin-block-start: 2vw;\r\n    left: 26%;\r\n    text-align: center;\r\n}\r\n\r\n.landingpage-btn{\r\n    background-color: white;\r\n    border-radius: 6px;\r\n    border: 1px solid rgb(52, 52, 52);\r\n    padding-block: 0.6vw;\r\n    padding-inline: 2.8vw;\r\n\r\n    font-size: 1vw;\r\n    font-family: \'DM Sans\', sans-serif;\r\n    font-weight: 100;\r\n\r\n    transition: 0.4s;\r\n}\r\n\r\n.landingpage-btn:hover{\r\n    cursor: pointer;\r\n    background-color: rgb(52, 52, 52);\r\n    /* color: rgb(52, 52, 52); */\r\n    color: white;\r\n\r\n    transform: translate(3px, -3px);\r\n}\r\n\r\n.quote-container{\r\n    position: relative;\r\n    height: 100vh;\r\n\r\n    background-color: rgb(52, 52, 52);\r\n}\r\n\r\n.big-quote-text-container{\r\n    position: absolute;\r\n    z-index: 999;\r\n\r\n    top: 30%;\r\n    left: 15%;\r\n    transform: translate(52%, -50%);\r\n\r\n    color: white;\r\n\r\n    animation: quote 2s forwards;\r\n    transition: 2s;\r\n}\r\n\r\n@keyframes quote{\r\n    0%{transform: translate(15px, -15px); color: rgb(52, 52, 52);}\r\n    100%{transform: translate(0px, 0px); color: white;}\r\n}\r\n\r\n.big-quote-text{\r\n    font-size: 4vw;\r\n    width: 45vw;\r\n    font-weight: bold;\r\n    text-align: left;\r\n\r\n}\r\n\r\n.links{\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 60px;\r\n    font-size: 1.9vw;\r\n    font-weight: 600;\r\n    padding: 20px;\r\n\r\n    background-color: #10BEB9;\r\n    color: white;\r\n}\r\n\r\n.all-books-link,\r\n.blog-link\r\n{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n\r\n.all-books-link:hover, .blog-link:hover{\r\n    cursor: pointer;\r\n    animation-name: bounce;\r\n    animation-duration: 0.5s;\r\n    animation-fill-mode: forwards;\r\n    /* transform: translate(2px, -2px); */\r\n}\r\n    \r\n    @keyframes bounce{\r\n        50%{transform: translate(3px, -3px);}\r\n        100%{transform: translate(2px, -2px);}\r\n    }\r\n    \r\n.books-grid-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));\r\n    gap: 20px;\r\n    flex-wrap: wrap;\r\n    padding-inline: 2%;\r\n    padding-block: 2%;\r\n}\r\n\r\n.book-cards{\r\n    display: flex;\r\n    gap: 60px;\r\n\r\n    border: 0.7px solid rgb(58, 58, 58);\r\n\r\n    -webkit-border-radius: 15px;\r\n    -moz-border-radius: 15px;\r\n    border-radius: 15px;\r\n\r\n    transition: all 0.3s;\r\n}\r\n\r\n.book-cards:hover{\r\n    box-shadow: -1px 10px 25px -3px rgba(0,0,0,0.75);\r\n    -webkit-box-shadow: -1px 10px 25px -3px rgba(0,0,0,0.75);\r\n    -moz-box-shadow: -1px 10px 25px -3px rgba(0,0,0,0.75);\r\n\r\n    transform: translate(3px, -3px);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.book-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n\r\n    padding-inline: 10px;\r\n}\r\n\r\n.book-content > div{\r\n    font-weight: bold;\r\n    font-size: 1.5vw;\r\n}\r\n\r\n.book-summary{\r\n    border-top: 1px dotted rgb(48, 47, 47);\r\n    border-bottom: 1px dotted rgb(48, 47, 47);\r\n\r\n    padding-block: 1vw;\r\n}\r\n\r\n.book-img,\r\n.first-book-img{\r\n    border-top-left-radius: 15px;\r\n    border-bottom-left-radius: 15px;\r\n\r\n    width: 13vw;\r\n}\r\n\r\n.open-book-button{\r\n    font-size: 1rem;\r\n    background-color: whitesmoke;\r\n    border-radius: 10px;\r\n    color: black;\r\n    border: 0.3px solid rgb(51, 51, 51);\r\n    padding-block: 0.4vw;\r\n\r\n    text-align: center;\r\n    text-decoration: none;\r\n\r\n    width: 50%;\r\n\r\n    transition: all 0.3s;\r\n}\r\n\r\n.open-book-button:hover{\r\n    background-color: rgb(65, 65, 65);\r\n    color: rgb(255, 255, 255);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.first-book-sub-container{\r\n    display: flex;\r\n    gap: 30px;\r\n}\r\n\r\n/* ***********************HOME******************** */\r\n\r\n.allnav-links{\r\n    display: flex;\r\n    gap: 60px;\r\n    font-weight: 600;\r\n    border-block: 1.5px solid black;\r\n    padding: 20px;\r\n    font-size: 1.3rem;\r\n    text-decoration: underline;\r\n}\r\n\r\n.post-body{\r\n    height: 100vh;\r\n    background-color: rgba(182, 234, 243, 0.589);\r\n}\r\n\r\n.book-post-form-container{\r\n    padding-block: 5%;\r\n    padding-inline: 7%;\r\n    background-color: rgb(193, 236, 245);\r\n}\r\n\r\n.book-post-form-sub-container{\r\n    border: 2px solid white;\r\n    border-radius: 4px;\r\n    background-color: rgb(244, 252, 254);\r\n\r\n    padding-block: 2vw;\r\n    padding-inline: 4vw;\r\n\r\n    -webkit-box-shadow: 10px 10px 37px -17px rgba(87,87,87,1);\r\n    -moz-box-shadow: 10px 10px 37px -17px rgba(87,87,87,1);\r\n    box-shadow: 10px 10px 37px -17px rgba(87,87,87,1);\r\n\r\n\r\n}\r\n\r\n.preview-img{\r\n    position: relative;\r\n    left: 40%;\r\n    margin-bottom: 50px;\r\n    width: 20vw;\r\n    aspect-ratio: 1 / 1.5;\r\n\r\n    text-align: center;\r\n    object-fit: cover;\r\n\r\n    border-radius: 2px;\r\n    background-color: rgba(219, 240, 244, 0.649);\r\n}\r\n\r\n.preview-img > p {\r\n    position: relative;\r\n    top: 50%;\r\n    \r\n}\r\n\r\n.first-row-grid-container{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 20px;\r\n}\r\n\r\n.second-row-grid-container{\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr 1fr;\r\n    gap: 20px;\r\n}\r\n\r\n.image-input{\r\n    display: block;\r\n}\r\n\r\nlabel{\r\n    /* margin-top: 20px; */\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n    \r\n}\r\n\r\n.book-post-form{\r\n    height: 100%;\r\n}\r\n\r\n    .title-input,\r\n    .volume-input,\r\n    .author-input,\r\n    .date-input,\r\n    .image-input,\r\n    .summary-area{\r\n        display: block;\r\n        width: 100%;\r\n        font-size: 1rem;\r\n        background-color: rgba(219, 240, 244, 0.649);\r\n        border-radius: 2px;\r\n        display: block;\r\n        margin-block-end: 20px;\r\n        padding-block: 4px;\r\n        padding-inline: 10px;\r\n    \r\n        text-align: left;\r\n    \r\n        border: none;\r\n}\r\n\r\n    .title-input:focus,\r\n    .volume-input:focus,\r\n    .author-input:focus,\r\n    .date-input:focus,\r\n    .image-input:focus,\r\n    .summary-area:focus{\r\n        background-color: whitesmoke;\r\n    }\r\n\r\n.summary-area{\r\n    resize: none;\r\n}\r\n\r\n.summary-area:focus{\r\n    border: 0.5px solid black;\r\n}\r\n\r\n.summary-label-p{\r\n    display: block;\r\n}\r\n\r\n.add-book-btn{\r\n    font-size: 1rem;\r\n    background-color: whitesmoke;\r\n    border-radius: 10px;\r\n    color: black;\r\n    border: 0.3px solid rgb(51, 51, 51);\r\n    padding-inline: 5vw;\r\n    padding-block: 0.5vw;\r\n    /* margin-block-start: 20px; */\r\n    margin-top: 1vw;\r\n\r\n    position: relative;\r\n    left: 47%;\r\n\r\n    transition: all 0.5s;\r\n}\r\n\r\n.add-book-btn:hover{\r\n    background-color: rgb(75, 75, 75);\r\n    color: rgb(255, 255, 255);\r\n\r\n    border: 1px solid rgb(75, 75, 75);\r\n}\r\n\r\n.update-btns-container{\r\n    display: flex;\r\n    gap: 20px;\r\n    justify-content: center;\r\n    position: relative;\r\n}\r\n\r\n.update-book-btn{\r\n    font-size: 1rem;\r\n    background-color: whitesmoke;\r\n    border-radius: 10px;\r\n    color: black;\r\n    border: 0.3px solid rgb(51, 51, 51);\r\n    padding-inline: 5vw;\r\n    padding-block: 0.5vw;\r\n\r\n    transition: all 0.5s;\r\n}\r\n\r\n.update-book-btn:hover{\r\n    background-color: rgb(75, 75, 75);\r\n    color: rgb(255, 255, 255);\r\n\r\n    border: 1px solid rgb(75, 75, 75);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.cancel-button{\r\n    font-size: 1rem;\r\n    background-color: whitesmoke;\r\n    border-radius: 10px;\r\n    color: black;\r\n    border: 0.3px solid rgb(51, 51, 51);\r\n    padding-inline: 5vw;\r\n    padding-block: 0.5vw;\r\n}\r\n\r\n.cancel-button:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.update-bookPage-btn{\r\n    font-size: 1rem;\r\n    background-color: whitesmoke;\r\n    border-radius: 10px;\r\n    color: rgb(54, 181, 210);\r\n    border: 0.3px solid #10BEB9;\r\n    padding-inline: 4.5vw;\r\n    padding-block: 0.3vw;\r\n    margin-block: 20px;\r\n\r\n    transition: all 0.3s;\r\n}\r\n\r\n.update-bookPage-btn:hover{\r\n    background-color: #10BEB9;\r\n    color: rgb(255, 255, 255);\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.post-add-books-btn{\r\n    font-size: 1rem;\r\n    background-color: whitesmoke;\r\n    border-radius: 10px;\r\n    color: black;\r\n    display: block;\r\n    border: 0.3px solid rgb(51, 51, 51);\r\n    padding-inline: 2.5vw;\r\n    padding-block: 0.7vw;\r\n    margin-block: 2%;\r\n    margin-inline-start: 2%;\r\n\r\n    transition: all 0.5s;\r\n}\r\n\r\n.post-add-books-btn:hover{\r\n    background-color: rgb(65, 65, 65);\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n/* *************************Books************************* */\r\n\r\n.footer{\r\n    padding-block: 5%;\r\n    text-align: center;\r\n    line-height: 25px;\r\n\r\n    background-color: #10BEB9;\r\n    color: white;\r\n}',""]),n.Z=a},1694:function(r,n,o){o.r(n);var i=o(3379),t=o.n(i),e=o(7795),a=o.n(e),l=o(569),s=o.n(l),p=o(3565),d=o.n(p),c=o(9216),b=o.n(c),g=o(4589),u=o.n(g),f=o(5566),x={};x.styleTagTransform=u(),x.setAttributes=d(),x.insert=s().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=b(),t()(f.Z,x),n.default=f.Z&&f.Z.locals?f.Z.locals:void 0}}]);