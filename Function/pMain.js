// Welcome to DSC FUO Otueke Bayelsa State,Nigeria.

//  This code repo was created from scratch to explain the basics and some intermediate concepts of JAVASCRIPT on Saturday 29th Feb 2020

// DSC Lead: Blessing Krofegha

// Workshop/session Mentor: NC Armstrong

// Please contact the community or any of the name above for aids in understanding the code, Thank yous



const _lStorage = JSON.parse( localStorage.getItem('userDataLS'))
console.log(_lStorage)
 
 const { name, about, ...other} = _lStorage

 const UserData = Object.values(other) 

 console.log(UserData)

  

 const figcaptionEle = document.querySelector('figcaption')
 figcaptionEle.textContent = name

 const pAbout = document.querySelector('section > p')
 pAbout.textContent = about

  const boldEle = document.querySelectorAll('b') 




 UserData.forEach((element, index) => {
 
     const pELe = document.createElement('p') 

     const node = document.createTextNode(`${element}`)

pELe.appendChild(node)

pELe.classList.add('dataP')
 
boldEle[index].appendChild(pELe)


 });
