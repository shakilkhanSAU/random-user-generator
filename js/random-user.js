const loadUsers = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
};

const displayUser = (user) => {
    console.log(user)
    const container = document.getElementById('user')
    const div = document.createElement('div');
    container.textContent = '';
    div.innerHTML = `
    <div class="card text-center">
        <div class="card-header">
            <img class="rounded-circle" src="${user.picture.large}" alt="">
        </div>
        <div class="card-body">
            <h4 class="text-center">${user.name.title} ${user.name.first} ${user.name.last} </h4>
            <p class="card-text">Hey, my name is ${user.name.title} ${user.name.first} ${user.name.last}. I'm <span class="fw-bold">${user.dob.age}</span> years old.
            </p>
            <div>
                <p id="info">Click button for more</p>
                <p id="email" class="card-text">Email address: <span class="fw-bold"> ${user.email}</span>
                </p>
                <p id="phone" class="card-text">Phone number: <span class="fw-bold"> ${user.phone}</span>
                </p>
                <p id="address" class="card-text mb-3">
                city: <span class="fw-bold"> ${user.location.city}</span>, State: <span class="fw-bold">
                ${user.location.state}</span> and postcode: <span class="fw-bold"> ${user.location.postcode}</span>
                </p>
            </div>
            <button onclick="displayEmail('email', 'phone', 'address')" type="button" class="btn btn-light">Email</button>
            <button onclick="displayEmail('phone', 'email', 'address')" type="button" class="btn btn-light">Phone Number</button>
            <button onclick="displayEmail('address', 'email', 'phone')" type="button" class="btn btn-light">Address</button>
            
        </div>
    </div>         
    `;
    container.appendChild(div);
}

const contentHider = () => {
    document.getElementById('info').textContent = ''
}

const displayEmail = (show, hide1, hide2) => {
    contentHider()
    document.getElementById(show).style.display = 'block';
    document.getElementById(hide1).style.display = 'none';
    document.getElementById(hide2).style.display = 'none';
}

