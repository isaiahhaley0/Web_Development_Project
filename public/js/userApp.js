var currUser = new Vue({
    el:"#userapp",
    data:{
        firstName:"",
        lastName:"",
        password:"",
        email:""
    },
    methods:{
        getUserData: function (event)
            {
                var self = this;
                var temp =  document.cookie
                    .split('; ')
                    .find(row => row.startsWith('email='))
                    .split('=')[1];
                var email =  decodeURIComponent(temp);
                const data ={"email":email};
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
            },
        updateUser: function (event){
            var self = this
            const data = { "firstName": self.firstName, "lastName":self.lastName};

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
                    location.href="/myProfile"
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            location.href="/myProfile"
        },
        deleteThisAccount: function (event){
             var self = this;
            var temp =  document.cookie
                .split('; ')
                .find(row => row.startsWith('email='))
                .split('=')[1];
            var email =  decodeURIComponent(temp);
             const data = {"email":email};
            fetch('http://localhost:3000/delete',{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(data),})

                .catch((error) => {
                    console.error('Error:', error);
                }).then(
             location.href="login"
            );
            }


        },

    });