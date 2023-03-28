console.log('started')
var submitBtn = document.querySelector('.submit-button')
submitBtn.addEventListener('click', submitDataWriteMail)

function submitDataWriteMail() {
  console.log('mail')
  var name = document.querySelector('#f-c-form-name').value
  var street = document.querySelector('#f-c-form-street').value
  var city = document.querySelector('#f-c-form-City').value
  var post = document.querySelector('#f-c-form-Post').value
  var contact = document.querySelector('#f-c-form-contact').value
  var email = document.querySelector('#f-c-form-email').value
  var idea = document.querySelector('#f-c-form-idea').value

  var body = '<p>' + idea + '<p>'
  var to = email + ',' + 'shaikabdulkalamazad1@gmail.com'

  Email.send(
    'abdulkalams098@gmail.com',
    'abdulkalams2015@gmail.com',
    'This is a subject',
    'this is the body',
    { token: '63cb3a19-2684-44fa-b76f-debf422d8b00' }
  )
  // Email.send({
  //     Host: "smtp.gmail.com",
  //     Username : "sabdul@student.nitw.ac.in",
  //     Password : "Azad@556",
  //     To : to,
  //     From : "sabdul@student.nitw.ac.in",
  //     Subject : "from Airshine website",
  //     Body : body,
  //     }).then(
  //         message => alert("mail sent successfully")
  //     );

  console.log('Mail End')
}
console.log('end')
