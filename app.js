const form = document.querySelector(".contact-form");
form.addEventListener("submit",e=> {
    e.preventDefault();
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    document.querySelector(".contact-form").reset();
    sendEmail(name,email);
})
function sendEmail(name,email){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nyashwanth181@gmail.com",
        Password : "70756FCD0E04D3BB4F9CC00E549FEE622E1E",
        To : 'nyashwanth16csny@gmail.com',
        From : 'nyashwanth181@gmail.com',
        Subject : `${name}`,
        Body :`Name: ${name} <br> Email:${email} <br>`,
        }).then((success) => {alert("Message Sent Successfully");
    }).catch((error) => {
        alert("Error in sending the message");
    })
    }
