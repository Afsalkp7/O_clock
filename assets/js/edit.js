function fun() {

    const adminData = document.getElementById('myForm');
    const myformData = new FormData(adminData)
    fetch('/adminhome/update', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(myformData)),
    })
    .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("not ok")
    })
    .then((data)=>{
        if (document.cookie.includes("updateToken")){
            window.location.href = "/adminhome"
        }
    })

    .catch(error => {
        console.log(error);
    });
};

/////////////////////////////////
function status() {
    const UserStatusData = document.getElementById('editstatusForm');
    const mystatusData = new FormData(UserStatusData)

    fetch(`/adminhome/users/edit`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(mystatusData)),
    })
        .then((response) => {
            if (response.ok) {
                window.location.href = "/adminhome/users"
                
            }
            throw new Error("not ok")
        })

        .catch(error => {
            console.log(error);
        });
};