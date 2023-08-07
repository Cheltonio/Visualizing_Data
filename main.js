let person; let last;
let rand = document.querySelector("button");
let textBox = document.querySelector("input");

let name = document.getElementById("name");
let gen = document.getElementById("gender");
let img = document.getElementById("headshot");
let info1 = document.getElementById("first");
let info2 = document.getElementById("second");

let map = document.getElementById("map");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let user = document.getElementById("user");
let age = document.getElementById("age");

rand.onclick = randPerson;

function randPerson() {
    switchPerson(Math.floor(Math.random()*people.results.length));
}

textBox.oninput = function() {
    for(let i = 0; i < people.results.length; i++) {
        if(textBox.value==people.results[i].name.first) {
            switchPerson(i); break;
        }
    }
}

function switchPerson(num) {
    person = people.results[num];

    let title = `${person.name.title}`;
    name.innerHTML = title;
    if(title != "Miss" && title != "Mademoiselle") name.innerHTML += ".";
    name.innerHTML += ` ${person.name.first + " " + person.name.last}`;

    if(person.gender=="female") gen.src = "assets/female.png";
    else gen.src = "assets/male.png";

    img.src = person.picture.large;

    if(last=="map") setMap();
    else if(last=="phone") setPhone();
    else if(last=="email") setEmail();
    else if(last=="user") setUser();
    else if(last=="age") setAge();
}

map.onmouseover = setMap;
phone.onmouseover = setPhone;
email.onmouseover = setEmail;
user.onmouseover = setUser;
age.onmouseover = setAge;

function setMap() {
    info2.innerHTML = "";
    info1.innerHTML = `${person.location.city}, ${person.location.state} - ${person.location.country}`;
    last = "map";
}

function setPhone() {
    info2.innerHTML = "";
    info1.innerHTML = `Phone: ${person.phone} | Cell: ${person.cell}`;
    last = "phone";
}

function setEmail() {
    info2.innerHTML = "";
    info1.innerHTML = person.email;
    last = "email";
}

function setUser() {
    info1.innerHTML = "Username: " + person.login.username;
    info2.innerHTML = "Password: " + person.login.password;
    last = "user";
}

function setAge() {
    info2.innerHTML = "";
    info1.innerHTML = "Age: " + person.dob.age;
    last = "age";
}
