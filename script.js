// var div1 = document.createElement('div');
// var div2 = document.createElement('div');
// var div3 = document.createElement('div');
// div3.innerHTML = 'This is col';
// div2.append(div3);
// div1.append(div2);

// div1.setAttribute("class", "main");
// div2.setAttribute("class", "row");
// div3.setAttribute("class", "col");
// document.body.appendChild(div1);


// var div = document.createElement("div");
// var p = document.createElement("p");
// p.innerHTML = "this is p";
// // parent.append(child)
// div.append(p);
// // append parent to the document
// document.body.append(div);


function foo() {
    var fname = document.getElementById("fname").value;
    var mname = document.getElementById("mname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    console.log("First Name:", fname);
    console.log("Middle Name:", mname);
    console.log("Last Name:", lname);
    console.log("Email:", email);
    console.log("Address:", address);
}


