function isletter(ch) {
    for (i = 0; i < ch.length; i++) {
        if (ch[i].toUpperCase() < "A" || ch[i].toUpperCase() > "Z") {
            return false;
        }

    }
    return true;
}

function checkPassword(ch) {
    var uperercase = false,
        lower = false,
        special = false,
        number = false;
    for (i = 0; i < ch.length; i++) {
        if (ch[i] >= "A" && ch[i] <= "Z") {
            UpperCase = true;
        } else if (ch[i] >= "a" && ch[i] <= "z") {
            lower = true;
        } else if (ch[i] >= "0" && ch[i] <= "9") {
            number = true;
        } else {
            special = true;
        }

    }
    return uperercase && lower && special && number;

}



document.getElementById("sendbtn").addEventListener("click", function(event) {
    event.preventDefault();
    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("verify_password");
    const gender = document.getElementsByName("gender");
    n = nom.value;
    p = prenom.value;
    e = email.value;
    pass = password.value;
    pass2 = password2.value;
    console.log(n, p, e, pass, pass2)
    if (isletter(n) == false) {
        alert("invalid name ");
        return false;
    } else
    if (isletter(p) == false) {
        alert("invalid familyname ");
        return false;
    } else
    if (e.length == 0 || e.indexOf("@") == -1 || e.indexOf(".") == -1) {
        alert("type the right email ")
        return false;
    }
    if (pass.length < 8) {
        alert("password must be more than 8 ");
        return false;
    }
    if (checkPassword(pass)) {
        alert("password must have an Uppercae letter , lower case,special and number  ");
        return false;
    }
    if (pass.length > 20) {
        alert("password must be less than 20");
        return false;
    }
    if (pass != pass2) {
        alert("the password is not the same please verify again ")
        return false;
    }
    if (gender[0].checked) {
        x = "Male";
    } else if (gender[1].checked) {
        x = "female";
    } else {
        x = "indefined"; //site accessible lel denya lo5ra XD
    }
    data = [n, p, e, x];
    add_element(data);


})

function delete_element() {
    this.parentNode.remove();
}

function add_element(data) {
    const tab = document.getElementsByClassName("tab");
    tr = document.createElement("tr");
    data.forEach(function(val) {
        th = document.createElement("th");
        th.innerHTML = val;
        tr.appendChild(th);
    })
    del = "delete";
    th = document.createElement("th");
    th.innerHTML = del;
    th.classList.add("del");
    th.addEventListener("click", delete_element);
    tr.appendChild(th);
    tab[0].appendChild(tr);
}