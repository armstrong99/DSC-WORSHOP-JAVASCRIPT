// Welcome to DSC FUO Otueke Bayelsa State,Nigeria.

//  This code repo was created from scratch to explain the basics and some intermediate concepts of JAVASCRIPT on Saturday 29th Feb 2020

// DSC Lead: Blessing Krofegha

// Workshop/session Mentor: NC Armstrong

// Please contact the community or any of the name above for aids in understanding the code, Thank you

const UserArr = {};

const passFields = [];


// get image ele on the dom
document.getElementById('imgReg').src = '../Assets/Images/hair.jpg'
 
// get the values from the input fields

document.getElementById('name').addEventListener('change', function _nametoUserArray(e) {
  // UserArr.push(e.target.value) this method doesnt work beacuse the array will be added when new the field changes

  UserArr.name = e.target.value

})

document.getElementById('About').addEventListener('change', function _AbouttoUserAraay(e) {
  UserArr.about = e.target.value
})

document.getElementById('phone').addEventListener('change', function _PhonetoUserAraay(e) {
  UserArr.phone = e.target.value
})

document.getElementById('lga').addEventListener('change', function _LgatoUserAraay(e) {
  UserArr.lga = e.target.value
})

document.getElementById('state').addEventListener('change', function _statetoUserAraay(e) {

  UserArr.state = e.target.value;
// using the index number even when the array has not real element it still counts it as 5, so set the right conditions in the sendLclstrg function
 })

//toggle password

document.getElementById('paraPass').addEventListener('click', function(){
  

  if(this.textContent === 'Show password') {

    this.textContent = 'Hide password'

    document.getElementById('passInput').setAttribute('type', 'text')

  }
  else {
    this.textContent = 'Show password'

    document.getElementById('passInput').setAttribute('type', 'password')

  }
})

//confirm password field


var pass = document.getElementById('passInput')

var cpass = document.getElementById('cpassInput')
if(pass.value !== cpass.value ) { 
   console.log('we did passw')
 const ePara =  document.getElementById('ePara')
 ePara.textContent = 'Password seems not to match'

 ePara.style.color = 'red'

 ePara.style.fontSize = 'small'
 }
 else {
   console.log('error')
 }


  
  
document.getElementById('submit').addEventListener('submit', function SubmitForm(event) {

event.preventDefault() //this prevents the default behaviour of refreshing the dom or reloading the page

      

   localStorage.setItem('userDataLS', JSON.stringify(UserArr))

  //  console.log(JSON.parse(localStorage.getItem('userData')) )

   // add a link text to profile page and remove the UX aside ele

  setTimeout(function() {

    const parent = document.querySelector("fieldset")

    const asideEle = document.querySelector('aside') //this method can be used to return the parentNode
    parent.removeChild(asideEle)

    const submitBtn = document.getElementById('suBtn')

    submitBtn.style.display = 'none'

  //  const formSec =  document.querySelector('section > section')

  //  formSec.insertAdjacentElement(
  //      "beforeend",
  //      "<p> Your profile page is ready <a href='./profile.html' target='_blank'>View profile </a> </p>"
  //       )
window.location.replace('./profile.html')


  }, 2000)


     
})
 



