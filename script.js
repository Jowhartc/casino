function addData()
{
    data = {
        uname : uname.value,
        accno : Accno.value,
        pwd : pass.value
    }

    if(data.accno in localStorage){
        alert("Already account created")
    }
    else
    {
        datanew = JSON.stringify(data)
        localStorage.setItem(data.accno,datanew)
        alert("Register successfull")
        window.location = "./login.html";
    }
}

function Login()
{
    acno = Accno.value;
    pwd  = pass.value;

    if(acno in localStorage){
        acnoDetails=JSON.parse(localStorage.getItem(acno));

        if(pwd=acnoDetails.pwd){
            alert('login successful')
            localStorage.setItem('welcome',acnoDetails.uname)
            window.location = "./homepage.html";
        }else{
            alert('incorrect passsword')
        }
    }else{
        alert('invalid account number')
    }
}

rname=localStorage.getItem("welcome")
textdoc.innerHTML=`Welcome ${rname} to 777 CASINO`
