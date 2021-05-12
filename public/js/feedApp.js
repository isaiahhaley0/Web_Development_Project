

var feedApp = new Vue({
    el: '#feedApp',
    data: {
        message: 'Hello Vue!',
        message: 'Hello Vue!',
        posttitle:"",
        postauthor:"tempauthor",
        postcontent:"",
        posttags:"",
        pid:0,
        posts: []
    },
   mounted: function () {
            const self = this;
            fetch('/posts')
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
            var temp =  document.cookie
                .split('; ')
                .find(row => row.startsWith('email='))
                .split('=')[1];

            var posttitle = self.posttitle;
            var postauthor =  decodeURIComponent(temp);
            var postcontent = self.postcontent;
            var pid = 1;
            self.pid = pid;
            const data = { "post_title": posttitle, "post_author":postauthor,"post_content":postcontent,"post_id":pid  ,"post_tags":self.posttags};
            var refid;


            fetch('/posts', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

                .then(response => response.json())
                .then(data => {
                    refid = data.post_id;
                    console.log(data.post_id)
                    console.log('Success:', data);
                    window.location.reload()
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            const tagData = {"post_tags":self.posttags,"post_ref":refid}
            fetch('/tags', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tagData)}) .then(response => response.json())
        }
   }
})