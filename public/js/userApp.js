var currUser = new Vue({
    el:"#userapp",
    data:{
        username:"staff",
        oldusername:"isaiah",
        password:"",
        email:""
    },
    methods:{
        updateUser: function (event){
            var self = this
            const data = { "username": self.username, "oldusername":self.oldusername,"password":self.password,"email":self.email };

            fetch('http://localhost:3000/editProfile', {
                method: 'PUT', // or 'PUT'
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
        },
        deleteThisAccount: function (event){
             var self = this;
             const data = {"username":self.username};
            fetch('http://localhost:3000/delete',{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(data),})
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);

                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }


        },

    });