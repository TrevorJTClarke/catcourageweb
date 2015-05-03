/* © 2015 Sum37 Apps - V0.0.2 - 05/02/2015 */
(function(w,d,undefined){
var gifId, gifApiKey = "dc6zaTOxFJmzC";
/* author: Fabio Miranda Costa | github: fabiomcosta | twitter: @fabiomiranda | license: MIT-style license */
(function(h,i){var f,c,j,k,m={},e,l,q=/^\s+|\s+$/g,r=!!i.querySelectorAll,g=function(d,b,a){f=a||[];e=b||g.context;if(r)try{n(e.querySelectorAll(d));return f}catch(v){}l=e.ownerDocument||e;d=d.replace(q,"");for(c={};d=d.replace(/([#.:])?([^#.:]*)/,s););d=(b=c.id)&&c.tag||c.classes||c.pseudos||!b&&(c.classes||c.pseudos)?t:o;if(b){if(a=b=l.getElementById(b))if(!(a=l===e))a:{a=b;do if(a===e){a=true;break a}while(a=a.parentNode);a=false}a&&d([b])}else d(e.getElementsByTagName(c.tag||"*"));return f},u= function(d){if(c.tag){var b=d.nodeName.toUpperCase();if(c.tag=="*"){if(b<"@")return false}else if(b!=c.tag)return false}if(c.id&&d.getAttribute("id")!=c.id)return false;if(j=c.classes){var a=" "+d.className+" ";for(b=j.length;b--;)if(a.indexOf(" "+j[b]+" ")<0)return false}if(k=c.pseudos)for(b=k.length;b--;){a=m[k[b]];if(!(a&&a.call(g,d)))return false}return true},s=function(d,b,a){if(b)if(b=="#")c.id=a;else if(b==".")if(c.classes)c.classes.push(a);else c.classes=[a];else{if(b==":")if(c.pseudos)c.pseudos.push(a); else c.pseudos=[a]}else c.tag=a.toUpperCase();return""},p=Array.prototype.slice,n=function(d){f=p.call(d,0)},o=function(d){for(var b=0,a;a=d[b++];)f.push(a)};try{p.call(i.documentElement.childNodes,0)}catch(w){n=o}var t=function(d){for(var b=0,a;a=d[b++];)u(a)&&f.push(a)};g.pseudos=m;g.context=i;h.uSelector=g;h.$u||(h.$u=g)})(this,document);
function jax(a,b){if(this.bindFunction=function(a,b){return function(){return a.apply(b,[b])}},this.stateChange=function(){4==this.request.readyState&&this.callbackFunction(this.request.responseText)},this.getRequest=function(){return window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):window.XMLHttpRequest?new XMLHttpRequest:!1},this.postBody=arguments[2]||"",this.callbackFunction=b,this.url=a,this.request=this.getRequest(),this.request){var c=this.request;c.onreadystatechange=this.bindFunction(this.stateChange,this),""!==this.postBody?(c.open("POST",a,!0),c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),c.setRequestHeader("Connection","close")):c.open("GET",a,!0),c.send(this.postBody)}}
function Share (){

    return {

    _slf: null,

    /**
     * fire()
     * grabs the type of share to do,
     * fires the appropriate share link creation function
     */
    fire: function ( type, params ) {
        _slf = this;

        switch ( type ) {
            case "Facebook": 
                _slf.buildFacebook( params );
                break;
            case "Twitter": 
                _slf.buildTwitter( params );
                break;
            case "Tumblr": 
                _slf.buildTumblr( params );
                break;
            case "Email": 
                _slf.buildEmail( params );
                break;
            default:
                break;
        }
    },

    /**
     * fireShareWindow()
     * fires the share window for easy sharing,
     * based on the options passed in
     */
    fireShareWindow: function ( shareUrl ) {
        window.open( shareUrl, 'sharer','toolbar=0,status=0,width=580,height=325');
    },

    /**
     * buildFacebook()
     * takes facebook params, builds a facebook share link
     */
    buildFacebook: function ( params ) {
        var _shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + params.link;

        _slf.fireShareWindow( _shareUrl );
    },

    /**
     * buildTwitter()
     * takes twitter params, builds a twitter share link
     */
    buildTwitter: function ( shareParams ) {
        var trimTo = 140;

        // format the tweet, so marketing doesnt kill the url :P
        function doTheTrimskis ( string ) {
            if (string.length >= trimTo) {
                var formattedString =  string.slice(0, trimTo - 4) + '...';
                return formattedString;
            } else {
                return string;
            }
        }
        var tweetText = doTheTrimskis( shareParams.title );
        var _shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText) + " " + encodeURIComponent(shareParams.link) + "&counturl=" + encodeURIComponent(shareParams.link);

        _slf.fireShareWindow( _shareUrl );
    },

    /**
     * buildTumblr()
     * takes Tumblr params, builds a tumblr share link
     */
    buildTumblr: function ( shareParams ) {
        var _shareUrl = 'http://www.tumblr.com/share/photo?source=' + encodeURIComponent(shareParams.img) + '&caption=' + encodeURI(shareParams.title) + '&click_thru=' + encodeURIComponent(shareParams.link);

        _slf.fireShareWindow( _shareUrl );
    },

    /**
     * buildEmail()
     * takes Email params, builds an email
     */
    buildEmail: function ( shareParams ) {
        var _shareUrl = 'mailto:?subject=Catcourage App is my new favorite thing&body=I found this today, ' + encodeURI(shareParams.title) + '%0A' + encodeURIComponent(shareParams.link) + '%0A%0A%20Let%20me%20know%20what%20you%20think!';
        
        window.location.href = _shareUrl;
    }

    };
}


function isRootPath () {
    return (window.location.pathname === "/");
}

function getPathId(){
    if(window.location.pathname.search("index") > -1){ return "ITAKo27WnL7ig"; }
    return "" + window.location.pathname.replace("/","");
}

function setGif ( url ){
    $u("#gif")[0].src = url;
}

(function() {
    var isRoot = isRootPath();
    if(isRoot){
        $u("body")[0].className = "";
    } else {
        $u("body")[0].className = "detail-visible";

        // get ID
        gifId = getPathId();

        // load gif resource
        var success = false;
        jax("http://api.giphy.com/v1/gifs/" + gifId + "?api_key=" + gifApiKey,function(res){
            var gif = JSON.parse(res);
            setGif( gif.data.images.original.url );
            success = true;
        });

        setTimeout(function(){
            if(success === false){
                setGif("img/not_found.png");
            }
        },10000);

        // Social bindings
        var social = {};
            social.title = "HA! I cant stop laughing, get this app! ";
            social.link = "http://catcourage.com/" + gifId;
            social.img = "http://catcourage.com/icons/icon200.png";

        // bind the buttons, find title, bind correct social share fn
        var shareBtns = $u(".share-link");
        shareBtns.forEach(function(btn){
            btn.addEventListener("click",function(){
                Share().fire( btn.title, social );
            },false);
        });
    }
})();

})(window,document);