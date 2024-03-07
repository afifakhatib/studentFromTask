const cl = console.log;

const stdFrom = document.getElementById("stdFrom");
const firstName = document.getElementById("firstNmae");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const stdcontainer = document.getElementById('stdcontainer');
const showTable = document.getElementById('showTable');
const alertMessage = document.getElementById('alertMessage');

let stdArr = [];

const ontemplatingTable = (arr) =>{
      let table = `` ;
      
      arr.forEach((info,i) => {
          table += `
            <tr>
           <td>${i + 1}</td>
           <td>${info.fname}</td>
           <td>${info.lname}</td>
           <td>${info.email}</td>
           <td>${info.contact}</td>
         </tr>
          `
      })
      stdcontainer.innerHTML = table;
}

const onsumbithandler = (e) => {
  e.preventDefault();
  let stdData = {
    fname: firstName.value,
    lname: lastName.value,
    email: email.value,
    contact: contact.value,
  }

   stdArr.push(stdData)
   cl(stdArr)
   cl(stdData)
   ontemplatingTable(stdArr)
   e.target.reset();

   Swal.fire({
    title: "New student added successfully",
    timer : '25000',
    text: "Do your best , fighting !!!",
    icon: "success"
    
  });

  showTable.classList.remove('d-none');
  alertMessage.classList.add('d-none');

};

stdFrom.addEventListener("submit", onsumbithandler);
