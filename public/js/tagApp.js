var tagApp = new Vue({
    el:'#tagApp',
    data:{
        message:"test",
        tags:[]
    },
    mounted: function (){
        const self = this;
        fetch('/tags')
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function(data) {

                        self.tags = data.reverse();
                        console.log(data);

                    });
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }
})