

var feedApp = new Vue({
    el: '#feedApp',
    data: {
        message: 'Hello Vue!',
        message: 'Hello Vue!',
        posttitle:"",
        postauthor:"tempauthor",
        postcontent:"",
        pid:0,
        posts: []
    },
   mounted: function () {
            const self = this;
            fetch('http://localhost:3000/posts')
                .then(
                    function(response) {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                            return;
                        }

                        // Examine the text in the response
                        response.json().then(function(data) {

                            self.posts = data.reverse();
                            console.log(data);

                        });
                    }
                )
                .catch(function(err) {
                    console.log('Fetch Error :-S', err);
                });

   },
   methods:{

        submitPost: function (event){
            var self = this;
            var temp = document.cookie;
            temp = temp.split(';');
            temp = temp[1].split('=')[1];
            var posttitle = self.posttitle;
            var postauthor =  decodeURIComponent(temp);
            var postcontent = self.postcontent;
            var pid = Math.floor(Math.random() * 100000);
            self.pid = pid;
            const data = { "post_title": posttitle, "post_author":postauthor,"post_content":postcontent,"post_id":pid  };

            fetch('http://localhost:3000/posts', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);

                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            window.location.reload()
        }
   }
})