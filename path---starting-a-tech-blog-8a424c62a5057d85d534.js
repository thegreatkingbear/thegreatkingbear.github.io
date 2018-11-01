webpackJsonp([50443473642108],{424:function(t,e){t.exports={data:{markdownRemark:{html:'<p>앞으로 1년 정도의 시간 동안 web에 대한 기술 스택을 쌓고자 한다. 현재 기술 발전이 흘러가는 방향을 볼 때, 간단한 스타트업의 앱이나 서비스 정도는 web을 중심으로 하여 개발되고, 이것을 react native 등의 framework를 이용해 안드로이드와 아이폰에 동시에 서비스하는 형태가 주류로 자리잡을 가능성이 크다고 본다. </p>\n<p>따라서 현재 내게 가장 부족하고 아쉽다고 생각되는 web기반 기술들과, javascript fluency를 키우기 위해 프로젝트를 진행하려고 한다. 특히 백엔드 쪽으로는 serverless를 생각하고 있다. 진행할 프로젝트는 기획적인 측면에서 애매함이 적은 방향으로 고려중이다. 예를 들면 to-do list 같은 앱인데, 새로운 아이디어를 중심으로 앱을 기획하면, 기획-재기획의 무한 루프(쉽게 말해 자꾸 엎는다는 얘기...)를 돌다가 쉽게 지쳐버리는 일이 많기에 이를 방지하기 위함이다. 할 일 앱이라면 아주 심플하고 분명한 형태부터 시작할 수 있고, 그것을 개선해나가면서 데이터의 구조라든가 architecture 부분까지 고민할 수 있는 기회라고 생각하기 때문이다. </p>\n<p>블로그를 만든다는 글에 뜬금없는 스택과 기획 얘기부터 나왔는데, 저런 앱을 1년 정도의 시간을 들여 고민하고 만들며, 거기서 배운 기술적인 부분들과 함께 퍼블리시와 마케팅에 이르기까지 가감없이 한 번 기록을 해보면 어떨까 하는 생각에 이 블로그를 시작하게 된 것이다. 지나고보면 항상 느끼는 건데, 1년 이라는 시간이 꽤 길고, 따라서 쓰기에 따라 많은 것을 이루거나 배울 수 있는 시간임에도, 실제 그러기는 정말 어렵다. 1년 이라는 시간이면 위에서 언급한 정도를 충분히 할 수 있는 시간이기에 지금 목표를 세워보는 것이다. 아무도 읽지 않는 블로그라도 혹시라도 누군가가 언제라도 읽을 수 있는 위험성(?)이 항상 나를 겨눌 것이기에 나를 위한 채찍으로는 적당하지 않을까라는 생각이다. </p>\n<p>그럼 기술 블로그는 어떻게 만들까? 이게 아마 이번 글의 중심 내용이 될 듯 한데, 기왕 react를 이번에 공부할 중심 스택으로 정했으므로 react를 기반으로 하면 좋을 것이고, 돈 들이고 싶지 않으므로 github pages에 올릴 수 있는 (혹은 싼 Amazon S3에 올릴 수 있는) static website로 정했다. </p>\n<p>위 두 가지를 검색어로 놓고 찾아보니 나온 것이 GatsbyJS란 녀석이다. </p>\n<p>Gatsby 소개페이지: <a href="https://gatsbyjs.org">https://gatsbyjs.org</a></p>\n<p>실제 구현을 다룬 블로그: <a href="http://stayregular.net/blog/deploy-a-static-react-blog-using-gatsbyjs-and-github">http://stayregular.net/blog/deploy-a-static-react-blog-using-gatsbyjs-and-github</a></p>\n<p>이제 이 녀석에 대해 공부를 해보자. 우선 react framework를 사용한다는 것과 static하게 hardcoded된 웹 페이지를 만들어서 제공한다는 점에서 위의 두 가지 조건을 충족한다. 게다가 Markdown으로 쓰여진 글들을 인식해서 바로 html로 바꾸어준다는 듯하다. 그렇다면 실제 글 작성은 Markdown editor로 하고, 그것을 간단하게 파일로 추가해준다음 github pages에 commit하면 짜잔~ 하고 퍼블리시 되는 쉽고도 아름다운 플로우라는 얘기다. </p>\n<p>그리고 또 한가지 특징이 있는데 그것은 GraphQL을 통해 contents serving이 된다는 점이다. 으응? 앞에서 느끼기에는 md를 그냥 html로 바꾼다는 거 같았는데, GraphQL은 어디서 사용된다는 얘긴지? (...) 아하 좀 더 읽어보니 GraphQL로 md 파일을 쿼리한다는 것이다. 쿼리를 GraphQL로 프론트엔드단에서(여기서는 블로그) 처리하므로 블로그 변경시에 해당 문법을 이용해서 쉽게 바로 변경사항을 적용한 페이지를 만들 수 있다는 장점이 있다.</p>\n<p>그렇다면, 대충 구조는 이해했으니 바로 시작해보자. 우선 템플릿을 골라보자. </p>\n<p>Gatsby Starters: <a href="https://www.gatsbyjs.org/docs/gatsby-starters/">https://www.gatsbyjs.org/docs/gatsby-starters/</a></p>\n<p>하나하나 demo를 눌러보면서 감상의 시간을 가졌다. 가장 마음에 드는 것은 Gatsby Casper Starter (<a href="https://github.com/haysclark/gatsby-starter-casper">https://github.com/haysclark/gatsby-starter-casper</a>) 이다. 몇 가지 설정만 만져주면, 바로 깔끔하고 스타일리시한 블로그가 나올 수 있을 것 같다. </p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>gatsby new YourProjectName https://github.com/haysclark/gatsby-starter-casper\ngatsby develop</code></pre>\n      </div>\n<p>위와 같이 develop server를 띄워서 갖고 놀아본다. 음 속도 빠르고 이쁘고 좋구먼.</p>\n<p>Data 디렉토리의 SiteConfig.js에서 blogPostDir와 blogAuthorDir만 바꿔주고 해당 폴더 아래에 테스트 용도로 내가 쓴 글 md파일을 넣어보자. 오잉? 안 나오는데... 뭔가 에러가 뜨고 이상하게 동작한다. watching이 잘 안되는건가 싶어서 다시 develop server를 띄워도 여전히 이상하다. 음 이런식이면 곤란한데.. 일단 gatsby-starter-casper 깃헙 저장소의 Issues를 살펴본다. 오호 Homepage won\'t update after changing post content라는 이슈가 있네. 살펴보니 </p>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code>npm run clean</code></pre>\n      </div>\n<p>을 하라는 말이 있다. 실행하니 아무 문제 없이 잘 된다. </p>\n<p>이제 블로그도 만들었으니 본격적으로 작업을 시작해보자. </p>',timeToRead:3,excerpt:"앞으로 1년 정도의 시간 동안 web에 대한 기술 스택을 쌓고자 한다. 현재 기술 발전이 흘러가는 방향을 볼 때, 간단한 스타트업의 앱이나 서비스 정도는 web을 중심으로 하여 개발되고, 이것을 react native 등의 framework…",frontmatter:{title:"Starting a Tech Blog",cover:"https://unsplash.it/1280/500/?random?BoldMage",date:"2018-11-01",category:"dev",tags:["web","tech"],author:"theGreatKingBear"},fields:{slug:"/starting-a-tech-blog"}},prev:{excerpt:"앞으로 1년 정도의 시간 동안 web에 대한 기술 스택을 쌓고자 한다. 현재 기술 발전이 흘러가는 방향을 볼 때, 간단한 스타트업의 앱이나 서비스 정도는 web…",frontmatter:{title:"Starting a Tech Blog",cover:"https://unsplash.it/1280/500/?random?BoldMage",date:"2018-11-01"},fields:{slug:"/starting-a-tech-blog"}},next:{excerpt:"앞으로 1년 정도의 시간 동안 web에 대한 기술 스택을 쌓고자 한다. 현재 기술 발전이 흘러가는 방향을 볼 때, 간단한 스타트업의 앱이나 서비스 정도는 web…",frontmatter:{title:"Starting a Tech Blog",cover:"https://unsplash.it/1280/500/?random?BoldMage",date:"2018-11-01"},fields:{slug:"/starting-a-tech-blog"}},authors:{edges:[{node:{id:"theGreatKingBear",name:"Mookyung Kwak",image:"http://graph.facebook.com/100005922579494/picture?type=normal",url:"https://www.facebook.com/mookyung.kwak.9",bio:"passionate learner"}},{node:{id:"guinevere",name:"Guinevere Kuiper",image:"https://randomuser.me/api/portraits/women/17.jpg",url:"https://randomuser.me/api/?seed=user1",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet lorem nec ligula aliquet, porta blandit augue luctus. Vivamus ac quam diam. Sed vestibulum pharetra hendrerit."}},{node:{id:"casper",name:"Casper User",image:"https://api.adorable.io/avatars/150/test.png",url:"http://gatsbyjs.org/",bio:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people."}}]}},pathContext:{slug:"/starting-a-tech-blog",total:1}}}});
//# sourceMappingURL=path---starting-a-tech-blog-8a424c62a5057d85d534.js.map