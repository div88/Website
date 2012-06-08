


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>three.js/examples/js/Stats.js at master · mrdoob/three.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="HL3O7GlonBSyhRjvuJseAFdb6AQIsgsfJt7A/LwgQQA=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-7fe666092c33b4d675ef53936cf7f96946c895fc.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github2-ba683975de69425893769c697c3a9e534939c985.css" media="screen" rel="stylesheet" type="text/css" />
    
    



    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/frameworks-31b6b84bca1e7d3f3907f63a4dd7f9bbda3a0eda.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-59a40a925ced36fb83b6db1914d7e1c383f39ee9.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/mrdoob/three.js/blob/40649e023a72c0eb50484776766a384593ac68f7/examples/js/Stats.js'>
    <meta property="og:title" content="three.js"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/mrdoob/three.js"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1329275856"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="three.js - JavaScript 3D library."/>

    <meta name="description" content="three.js - JavaScript 3D library." />

  <link href="https://github.com/mrdoob/three.js/commits/master.atom" rel="alternate" title="Recent Commits to three.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob  vis-public env-production " data-blob-contribs-enabled="yes">
    <div id="wrapper">

    
    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1323882716" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1324325358" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1337118071" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1337118071" />
          </a>

              
    <div class="topsearch ">
        <form accept-charset="UTF-8" action="/search" id="top_search_form" method="get">
  <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search"><span class="mini-icon advanced-search"></span></a>
  <div class="search placeholder-field js-placeholder-field">
    <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" spellcheck="false" autocomplete="off" data-autocomplete="my-repos-autocomplete" placeholder="Search&hellip;" data-hotkey="s" />
    <div id="my-repos-autocomplete" class="autocomplete-results">
      <ul class="js-navigation-container"></ul>
    </div>
    <input type="submit" value="Search" class="button">
    <span class="mini-icon search-input"></span>
  </div>
  <input type="hidden" name="type" value="Everything" />
  <input type="hidden" name="repo" value="" />
  <input type="hidden" name="langOverride" value="" />
  <input type="hidden" name="start_value" value="1" />
</form>
      
      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            


  <div id="userbox">
    <div id="user">
      <a href="https://github.com/div88"><img height="20" src="https://secure.gravatar.com/avatar/62e572940027baa03aa868c8f9a32bb3?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
      <a href="https://github.com/div88" class="name">div88</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a New Repo"><span class="mini-icon create"></span></a>
      </li>
      <li>
        <a href="/inbox/notifications" id="notifications" class="tooltipped downwards" title="Notifications">
          <span class="mini-icon notifications"></span>
        </a>
      </li>
      <li><a href="/settings/profile" id="settings" class="tooltipped downwards" title="Account Settings"><span class="mini-icon account-settings"></span></a></li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Log Out"><span class="mini-icon logout"></span></a>
      </li>
    </ul>
  </div>



          
        </div>
      </div>

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">



          <li class="js-toggler-container js-social-container watch-button-container ">
            <span class="watch-button"><a href="/mrdoob/three.js/toggle_watch" class="minibutton btn-watch js-toggler-target lighter" data-remote="true" data-method="post" rel="nofollow"><span><span class="icon"></span> Watch</span></a><a class="social-count js-social-count" href="/mrdoob/three.js/watchers">6,512</a></span>
            <span class="unwatch-button"><a href="/mrdoob/three.js/toggle_watch" class="minibutton btn-unwatch js-toggler-target lighter" data-remote="true" data-method="post" rel="nofollow"><span><span class="icon"></span> Unwatch</span></a><a class="social-count js-social-count" href="/mrdoob/three.js/watchers">6,512</a></span>
          </li>

              <li><a href="/mrdoob/three.js/fork" class="minibutton btn-fork js-toggler-target fork-button lighter" rel="nofollow" data-method="post"><span><span class="icon"></span> Fork</span></a><a href="/mrdoob/three.js/network" class="social-count">758</a>
              </li>


    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title">
            <span class="repo-label"><span class="public">public</span></span>
            <span class="mega-icon public-repo"></span>
            <span class="author vcard">
<a href="/mrdoob" class="url fn" itemprop="url" rel="author">              <span itemprop="title">mrdoob</span>
              </a></span> /
            <strong><a href="/mrdoob/three.js" class="js-current-repository">three.js</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/mrdoob/three.js" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/mrdoob/three.js/network" highlight="repo_network">Network</a>
    <li><a href="/mrdoob/three.js/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>7</span></a></li>

      <li><a href="/mrdoob/three.js/issues" highlight="repo_issues">Issues <span class='counter'>138</span></a></li>

      <li><a href="/mrdoob/three.js/wiki" highlight="repo_wiki">Wiki <span class='counter'>18</span></a></li>

    <li><a href="/mrdoob/three.js/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>

  </ul>
 
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/mrdoob/three.js/tree-list/40649e023a72c0eb50484776766a384593ac68f7"
      data-blob-url-prefix="/mrdoob/three.js/blob/40649e023a72c0eb50484776766a384593ac68f7"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/mrdoob/three.js">three.js</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/mrdoob/three.js/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/mrdoob/three.js/tags" class="" highlight="repo_tags">Tags <span class="counter">22</span></a></li>
    <li><a href="/mrdoob/three.js/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container js-context-menu">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-hotkey="w"
           data-master-branch="master"
           data-ref="master">
          <span><span class="icon"></span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"><span class="mini-icon remove-close"></span></a>
          <div class="context-title">Switch Branches/Tags</div>
          <div class="context-body pane-selector commitish-selector js-navigation-container">
            <div class="filterbar">
              <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

            <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field">
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/dev/examples/js/Stats.js" class="js-navigation-open" data-name="dev" rel="nofollow">dev</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/master/examples/js/Stats.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>

            <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field">
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r49/examples/js/Stats.js" class="js-navigation-open" data-name="r49" rel="nofollow">r49</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r48/examples/js/Stats.js" class="js-navigation-open" data-name="r48" rel="nofollow">r48</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r47/examples/js/Stats.js" class="js-navigation-open" data-name="r47" rel="nofollow">r47</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r46/examples/js/Stats.js" class="js-navigation-open" data-name="r46" rel="nofollow">r46</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r45/examples/js/Stats.js" class="js-navigation-open" data-name="r45" rel="nofollow">r45</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r44/examples/js/Stats.js" class="js-navigation-open" data-name="r44" rel="nofollow">r44</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r43/examples/js/Stats.js" class="js-navigation-open" data-name="r43" rel="nofollow">r43</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r42/examples/js/Stats.js" class="js-navigation-open" data-name="r42" rel="nofollow">r42</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r41/ROME/examples/js/Stats.js" class="js-navigation-open" data-name="r41/ROME" rel="nofollow">r41/ROME</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r40/examples/js/Stats.js" class="js-navigation-open" data-name="r40" rel="nofollow">r40</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r39/examples/js/Stats.js" class="js-navigation-open" data-name="r39" rel="nofollow">r39</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r38/examples/js/Stats.js" class="js-navigation-open" data-name="r38" rel="nofollow">r38</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r37/examples/js/Stats.js" class="js-navigation-open" data-name="r37" rel="nofollow">r37</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r36/examples/js/Stats.js" class="js-navigation-open" data-name="r36" rel="nofollow">r36</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r35/examples/js/Stats.js" class="js-navigation-open" data-name="r35" rel="nofollow">r35</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r34/examples/js/Stats.js" class="js-navigation-open" data-name="r34" rel="nofollow">r34</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r33/examples/js/Stats.js" class="js-navigation-open" data-name="r33" rel="nofollow">r33</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r32/examples/js/Stats.js" class="js-navigation-open" data-name="r32" rel="nofollow">r32</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r31/examples/js/Stats.js" class="js-navigation-open" data-name="r31" rel="nofollow">r31</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r30/examples/js/Stats.js" class="js-navigation-open" data-name="r30" rel="nofollow">r30</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r29/examples/js/Stats.js" class="js-navigation-open" data-name="r29" rel="nofollow">r29</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/mrdoob/three.js/blob/r28/examples/js/Stats.js" class="js-navigation-open" data-name="r28" rel="nofollow">r28</a>
                  </h4>
                </div>
            </div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/mrdoob/three.js" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/mrdoob/three.js/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/mrdoob/three.js/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">2</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        





<!-- block_view_fragment_key: views8/v8/blob:v21:7d959ed2a55c876dfa0ca8078afbd3f9 -->
  <div id="slider">

    <div class="breadcrumb" data-path="examples/js/Stats.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js/tree/40649e023a72c0eb50484776766a384593ac68f7" class="js-rewrite-sha" itemprop="url"><span itemprop="title">three.js</span></a></b> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js/tree/40649e023a72c0eb50484776766a384593ac68f7/examples" class="js-rewrite-sha" itemscope="url"><span itemprop="title">examples</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js/tree/40649e023a72c0eb50484776766a384593ac68f7/examples/js" class="js-rewrite-sha" itemscope="url"><span itemprop="title">js</span></a></span> / <strong class="final-path">Stats.js</strong> <span class="js-clippy mini-icon clippy " data-clipboard-text="examples/js/Stats.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>


      <div class="commit file-history-tease" data-path="examples/js/Stats.js/">
        <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/a00211a1e1aa4fe920302e7b76da0d91?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
        <span class="author"><a href="/mrdoob">mrdoob</a></span>
        <time class="js-relative-date" datetime="2011-10-16T02:36:09-07:00" title="2011-10-16 02:36:09">October 16, 2011</time>
        <div class="commit-title">
            <a href="/mrdoob/three.js/commit/330ab778365180eb3f6c9a044068c5cf0214aaf8" class="message">WIP WebGLRenderer refactoring</a>
        </div>

        <div class="participation">
          <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
          
        </div>
        <div id="blob_contributors_box" style="display:none">
          <h2>Users on GitHub who have contributed to this file</h2>
          <ul class="facebox-user-list">
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/a00211a1e1aa4fe920302e7b76da0d91?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/mrdoob">mrdoob</a>
            </li>
          </ul>
        </div>
      </div>

    <div class="frames">
      <div class="frame frame-center" data-path="examples/js/Stats.js/" data-permalink-url="/mrdoob/three.js/blob/40649e023a72c0eb50484776766a384593ac68f7/examples/js/Stats.js" data-title="three.js/examples/js/Stats.js at 40649e023a72c0eb50484776766a384593ac68f7 · mrdoob/three.js · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon text-file"></b></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>9 lines (7 sloc)</span>
                <span>2.67 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/mrdoob/three.js/edit/40649e023a72c0eb50484776766a384593ac68f7/examples/js/Stats.js" data-method="post" rel="nofollow" data-hotkey="e"><span>Edit this file</span></a>
                  </li>

                <li>
                  <a href="/mrdoob/three.js/raw/40649e023a72c0eb50484776766a384593ac68f7/examples/js/Stats.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url"><span><span class="icon"></span>Raw</span></a>
                </li>
                  <li>
                    <a href="/mrdoob/three.js/blame/40649e023a72c0eb50484776766a384593ac68f7/examples/js/Stats.js" class="minibutton btn-blame grouped-button bigger lighter"><span><span class="icon"></span>Blame</span></a>
                  </li>
                <li>
                  <a href="/mrdoob/three.js/commits/40649e023a72c0eb50484776766a384593ac68f7/examples/js/Stats.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow"><span><span class="icon"></span>History</span></a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// stats.js r8 - http://github.com/mrdoob/stats.js</span></div><div class='line' id='LC2'><span class="kd">var</span> <span class="nx">Stats</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">h</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">n</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">o</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nb">Date</span><span class="p">.</span><span class="nx">now</span><span class="p">(),</span><span class="nx">u</span><span class="o">=</span><span class="nx">i</span><span class="p">,</span><span class="nx">p</span><span class="o">=</span><span class="nx">i</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">q</span><span class="o">=</span><span class="mi">1</span><span class="nx">E3</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">j</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="p">[[</span><span class="mi">16</span><span class="p">,</span><span class="mi">16</span><span class="p">,</span><span class="mi">48</span><span class="p">],[</span><span class="mi">0</span><span class="p">,</span><span class="mi">255</span><span class="p">,</span><span class="mi">255</span><span class="p">]],</span><span class="nx">m</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="mi">1</span><span class="nx">E3</span><span class="p">,</span><span class="nx">t</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">k</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="p">[[</span><span class="mi">16</span><span class="p">,</span><span class="mi">48</span><span class="p">,</span><span class="mi">16</span><span class="p">],[</span><span class="mi">0</span><span class="p">,</span><span class="mi">255</span><span class="p">,</span><span class="mi">0</span><span class="p">]];</span><span class="nx">h</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">h</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">cursor</span><span class="o">=</span><span class="s2">&quot;pointer&quot;</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="s2">&quot;80px&quot;</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">opacity</span><span class="o">=</span><span class="s2">&quot;0.9&quot;</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">zIndex</span><span class="o">=</span><span class="s2">&quot;10001&quot;</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;mousedown&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span><span class="nx">n</span><span class="o">=</span><span class="p">(</span><span class="nx">n</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span><span class="o">%</span><span class="mi">2</span><span class="p">;</span><span class="nx">n</span><span class="o">==</span><span class="mi">0</span><span class="o">?</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;block&quot;</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;none&quot;</span><span class="p">)</span><span class="o">:</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;none&quot;</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;block&quot;</span><span class="p">)},</span><span class="o">!</span><span class="mi">1</span><span class="p">);</span><span class="nx">e</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">e</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">textAlign</span><span class="o">=</span></div><div class='line' id='LC3'><span class="s2">&quot;left&quot;</span><span class="p">;</span><span class="nx">e</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">lineHeight</span><span class="o">=</span><span class="s2">&quot;1.2em&quot;</span><span class="p">;</span><span class="nx">e</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span><span class="o">=</span><span class="s2">&quot;rgb(&quot;</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">;</span><span class="nx">e</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">padding</span><span class="o">=</span><span class="s2">&quot;0 0 3px 3px&quot;</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span><span class="nx">j</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">j</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontFamily</span><span class="o">=</span><span class="s2">&quot;Helvetica, Arial, sans-serif&quot;</span><span class="p">;</span><span class="nx">j</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="o">=</span><span class="s2">&quot;9px&quot;</span><span class="p">;</span><span class="nx">j</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">color</span><span class="o">=</span><span class="s2">&quot;rgb(&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">;</span><span class="nx">j</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontWeight</span><span class="o">=</span><span class="s2">&quot;bold&quot;</span><span class="p">;</span><span class="nx">j</span><span class="p">.</span><span class="nx">innerHTML</span><span class="o">=</span><span class="s2">&quot;FPS&quot;</span><span class="p">;</span><span class="nx">e</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">j</span><span class="p">);</span><span class="nx">f</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">f</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">position</span><span class="o">=</span><span class="s2">&quot;relative&quot;</span><span class="p">;</span><span class="nx">f</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="s2">&quot;74px&quot;</span><span class="p">;</span><span class="nx">f</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span></div><div class='line' id='LC4'><span class="s2">&quot;30px&quot;</span><span class="p">;</span><span class="nx">f</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span><span class="o">=</span><span class="s2">&quot;rgb(&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">f</span><span class="p">);</span><span class="nx">f</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">length</span><span class="o">&lt;</span><span class="mi">74</span><span class="p">;)</span><span class="nx">a</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;span&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="s2">&quot;1px&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="s2">&quot;30px&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">cssFloat</span><span class="o">=</span><span class="s2">&quot;left&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span><span class="o">=</span><span class="s2">&quot;rgb(&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">,</span><span class="nx">f</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="nx">d</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">d</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">textAlign</span><span class="o">=</span><span class="s2">&quot;left&quot;</span><span class="p">;</span><span class="nx">d</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">lineHeight</span><span class="o">=</span><span class="s2">&quot;1.2em&quot;</span><span class="p">;</span><span class="nx">d</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span><span class="o">=</span><span class="s2">&quot;rgb(&quot;</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span><span class="o">/</span><span class="mi">2</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">;</span><span class="nx">d</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">padding</span><span class="o">=</span></div><div class='line' id='LC5'><span class="s2">&quot;0 0 3px 3px&quot;</span><span class="p">;</span><span class="nx">d</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;none&quot;</span><span class="p">;</span><span class="nx">h</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">d</span><span class="p">);</span><span class="nx">k</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">k</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontFamily</span><span class="o">=</span><span class="s2">&quot;Helvetica, Arial, sans-serif&quot;</span><span class="p">;</span><span class="nx">k</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="o">=</span><span class="s2">&quot;9px&quot;</span><span class="p">;</span><span class="nx">k</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">color</span><span class="o">=</span><span class="s2">&quot;rgb(&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">;</span><span class="nx">k</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontWeight</span><span class="o">=</span><span class="s2">&quot;bold&quot;</span><span class="p">;</span><span class="nx">k</span><span class="p">.</span><span class="nx">innerHTML</span><span class="o">=</span><span class="s2">&quot;MS&quot;</span><span class="p">;</span><span class="nx">d</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">k</span><span class="p">);</span><span class="nx">g</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">g</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">position</span><span class="o">=</span><span class="s2">&quot;relative&quot;</span><span class="p">;</span><span class="nx">g</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="s2">&quot;74px&quot;</span><span class="p">;</span><span class="nx">g</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="s2">&quot;30px&quot;</span><span class="p">;</span><span class="nx">g</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span><span class="o">=</span><span class="s2">&quot;rgb(&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">g</span><span class="p">);</span><span class="nx">g</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">length</span><span class="o">&lt;</span><span class="mi">74</span><span class="p">;)</span><span class="nx">a</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;span&quot;</span><span class="p">),</span></div><div class='line' id='LC6'><span class="nx">a</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="s2">&quot;1px&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span><span class="o">*</span><span class="mi">30</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">cssFloat</span><span class="o">=</span><span class="s2">&quot;left&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span><span class="o">=</span><span class="s2">&quot;rgb(&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">,</span><span class="nx">g</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">return</span><span class="p">{</span><span class="nx">domElement</span><span class="o">:</span><span class="nx">h</span><span class="p">,</span><span class="nx">update</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="nx">i</span><span class="o">=</span><span class="nb">Date</span><span class="p">.</span><span class="nx">now</span><span class="p">();</span><span class="nx">m</span><span class="o">=</span><span class="nx">i</span><span class="o">-</span><span class="nx">u</span><span class="p">;</span><span class="nx">s</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span><span class="nx">m</span><span class="p">);</span><span class="nx">t</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="nx">m</span><span class="p">);</span><span class="nx">k</span><span class="p">.</span><span class="nx">textContent</span><span class="o">=</span><span class="nx">m</span><span class="o">+</span><span class="s2">&quot; MS (&quot;</span><span class="o">+</span><span class="nx">s</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">t</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">;</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="mi">30</span><span class="p">,</span><span class="mi">30</span><span class="o">-</span><span class="nx">m</span><span class="o">/</span><span class="mi">200</span><span class="o">*</span><span class="mi">30</span><span class="p">);</span><span class="nx">g</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">).</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">;</span><span class="nx">u</span><span class="o">=</span><span class="nx">i</span><span class="p">;</span><span class="nx">o</span><span class="o">++</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="o">&gt;</span><span class="nx">p</span><span class="o">+</span><span class="mi">1</span><span class="nx">E3</span><span class="p">)</span><span class="nx">l</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nx">o</span><span class="o">*</span><span class="mi">1</span><span class="nx">E3</span><span class="o">/</span><span class="p">(</span><span class="nx">i</span><span class="o">-</span><span class="nx">p</span><span class="p">)),</span><span class="nx">q</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">q</span><span class="p">,</span><span class="nx">l</span><span class="p">),</span><span class="nx">r</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">r</span><span class="p">,</span><span class="nx">l</span><span class="p">),</span><span class="nx">j</span><span class="p">.</span><span class="nx">textContent</span><span class="o">=</span><span class="nx">l</span><span class="o">+</span><span class="s2">&quot; FPS (&quot;</span><span class="o">+</span><span class="nx">q</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">r</span><span class="o">+</span><span class="s2">&quot;)&quot;</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="mi">30</span><span class="p">,</span><span class="mi">30</span><span class="o">-</span><span class="nx">l</span><span class="o">/</span></div><div class='line' id='LC7'><span class="mi">100</span><span class="o">*</span><span class="mi">30</span><span class="p">),</span><span class="nx">f</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">).</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">,</span><span class="nx">p</span><span class="o">=</span><span class="nx">i</span><span class="p">,</span><span class="nx">o</span><span class="o">=</span><span class="mi">0</span><span class="p">}}};</span></div><div class='line' id='LC8'><br/></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/mrdoob/three.js/tree-list/40649e023a72c0eb50484776766a384593ac68f7" data-blob-url-prefix="/mrdoob/three.js/blob/40649e023a72c0eb50484776766a384593ac68f7">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1329872007" height="64" width="64">
</div>

      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Analyze web traffic</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.09883s from fe9.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspaces_logo.png?1329521039" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div class="ajax-error-message">
      <p><span class="mini-icon exclamation"></span> Something went wrong with that request. Please try again. <a href="javascript:;" class="ajax-error-dismiss">Dismiss</a></p>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1315867479" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download"><span><span class="icon"></span>Download</span></a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1315867479" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download"><span><span class="icon"></span>Download</span></a>
        </li>
      </ul>
    </div>

    
    
    
    <span id='server_response_time' data-time='0.10216' data-host='fe9'></span>
  </body>
</html>

