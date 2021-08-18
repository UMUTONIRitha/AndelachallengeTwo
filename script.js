function myFunction() {
    let x = document.getElementById("numb").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let text;
    if (x == '') {
      text = "Whoops! It looks like you forgot to add your email";

    } else if (x.match(mailformat)) {
      text = "valid email address!";

    }else{
        text = "You have entered an invalid email address!";
    }
    document.getElementById("dendon").innerHTML = text;
  }