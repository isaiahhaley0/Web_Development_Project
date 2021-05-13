var messageApp = new Vue({
    el:'#messageApp',
    data:{
        message:"test",
        posts:[]
    },
    mounted: function (){
        const self = this;
        fetch('/notifications')
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function(data) {

                        self.posts = data;
                        console.log(data);

                    });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    },
    methods:{
        unfollow: function (event){

            targetId = event.currentTarget.id;
            console.log(targetId);
            const putMethod = {
                method: 'DELETE', // Method itself
                headers: {
                    'Content-type': 'application/json; charset=UTF-8' // Indicates the content
                },
                body: JSON.stringify(
                    {
                        id:targetId
                    }
                ) // We send data in JSON format
            }
            var url = '/follow';
// make the HTTP put request using fetch api
            fetch(url, putMethod)
                .then(response => response.json())
                .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
                .catch(err => console.log(err)) // Do something with the error
            window.location.reload()
        }
    }
})