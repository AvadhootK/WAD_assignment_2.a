function displaytext() {
    var first_name = document.getElementById('validationDefault01');
    var last_name = document.getElementById('validationDefault02');
    var username = document.getElementById('validationDefaultUsername');
    var city = document.getElementById('validationDefault03');
    var state = document.getElementById('validationDefault04');
    var zip = document.getElementById('validationDefault05');
    var current_role = document.getElementById('validationDefault06');
    var email = document.getElementById('validationDefault07');
    // document.getElementById('alert').innerHTML = 'The user input is: ' + variable;
    localStorage.setItem('Name',first_name.value +" " + last_name.value )
    localStorage.setItem('username',username.value)
    localStorage.setItem('city',city.value)
    localStorage.setItem('state',state.value)
    localStorage.setItem('zip',zip.value)
    localStorage.setItem('current_role',current_role.value)
    localStorage.setItem('email',email.value)

}

window.addEventListener('load',()=>{
    var displayName = localStorage.Name
    document.getElementById('displayNames').innerHTML+=displayName;
    var displayusername = localStorage.username
    document.getElementById('displayUsername').innerHTML+=displayusername;
    var displayaddress = localStorage.city + ", " + localStorage.state + ", " + localStorage.zip
    document.getElementById('displayAddress').innerHTML+=displayaddress;
    var displayrole = localStorage.current_role
    document.getElementById('displayRole').innerHTML+=displayrole;
    var displayemail = localStorage.email
    document.getElementById('displayEmail').innerHTML+=displayemail;
})