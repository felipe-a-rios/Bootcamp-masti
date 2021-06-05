async function apiCall() {
    const resposta = await fetch('http://localhost:4000/courses/')
    const data = await resposta.json()




    for (let i = 0; i < data.length; i++) {
        const container = document.createElement('div');
        container.className = "box1";


        const thumbnail = document.createElement('img');
        thumbnail.src = `media/thumbcursos/${data[i].thumbnail}`;
        container.appendChild(thumbnail);
        thumbnail.className = "image1";
        const title = document.createElement('p');
        title.innerHTML = data[i].title;
        container.appendChild(title);
        title.className = "curso1";
        const description = document.createElement('p');
        description.innerHTML = data[i].description;
        container.appendChild(description);
        description.className = "descrição1";


        const instructor = document.createElement('p');
        instructor.innerHTML = data[i].instructor;
        container.appendChild(instructor);
        instructor.className = "name1";

        const price = document.createElement('p');
        price.innerHTML = data[i].price;
        container.appendChild(price);
        price.className = "price1";


        const cursos = document.getElementById('containercursos');
        cursos.appendChild(container);
    }
}

apiCall();

async function singUp() {
    const user = {
        name: "Fulano",
        surname: "Da Silva",
        birthdate: "03/11/1983",
        cpf: "022.784.240-50",
        email: "teste@gmail.com",
        pasword: "654321"
    }
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(user)
    }
    const resp = await fetch("http://localhost:4000/users/signUp", options)
    console.log(JSON.stringify(user))
    console.log(await resp.json())
}
console.log();

//timer
var countDownDate = new Date("Jan 25, 2020 18:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = (days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ");


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "ESGOTADO";
    }
}, 1000);