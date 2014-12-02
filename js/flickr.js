//http://flickr.com/services/auth/?api_key=c147eea9dacf2ed8edfa9fa1b8cf9165&perms=read&api_sig=1a002b6b7a1ffc85da513940165cd938

var html = ""
        var apiurl = "http://api.flickr.com/services/feeds/photos_public.gne?tags=charles%20kuralt&format=json&jsoncallback=?"
        $(document).ready(function(){
            console.log("document ready")
            $.getJSON(apiurl, function(json){
                console.log(json);
                //html += '<h1>' + json.title + '</h1>';
                
                $.each(json.items, function(i,data){
                console.log(data.media.m);
                console.log(data.author_id);
                console.log(data.description);
                
                html += '<img class="flickr" src="' + data.media.m + '" >';
            
             })
                $("#images").append(html);
                $("#images").tinyscrollbar();
               
            })

        });