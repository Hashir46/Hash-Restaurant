let Name1 = document.getElementById('fname');
let Name2 = document.getElementById('lname');
let Email = document.getElementById('email');
let Num = document.getElementById('num');
let Msg = document.getElementById('msg');

button = document.getElementById('submit-btn').addEventListener('click', () => {

  if(Name1.value != '' && Name2.value != '' && Email.value != '' && Num.value != '' && Msg.value != ''){
    alert("Thank You for your response!!");
  }
  else if(Name1.value != '' && Name2.value == '' && Email.value == '' && Num.value == '' && Msg.value == ''){
    alert("You forgot to enter the Last Name, Email, Number & Message")
  }
  else if(Name1.value == '' && Name2.value != '' && Email.value == '' && Num.value == '' && Msg.value == ''){
    alert("You forgot to enter the First Name, Email, Phone Number & Message")
  }
  else if(Name1.value == '' && Name2.value == '' && Email.value != '' && Num.value == '' && Msg.value == ''){
    alert("You forgot to enter the First Name, Last Name, Phone Number & Message")
  }
  else if(Name1.value == '' && Name2.value == '' && Email.value == '' && Num.value != '' && Msg.value == ''){
    alert("You forgot to enter the First Name, Last Name, Email & Message")
  }
  else if(Name1.value == '' && Name2.value == '' && Email.value == '' && Num.value == '' && Msg.value != ''){
    alert("You forgot to enter the First Name, Last Name, Email & Phone Number")
  }
  else if(Name1.value == '' && Name2.value == '' && Email.value == '' && Num.value != '' && Msg.value != ''){
    alert("You forgot to enter the First Name, Last Name & Email")
  }
  else if(Name1.value == '' && Name2.value == '' && Email.value != '' && Num.value == '' && Msg.value != ''){
    alert("You forgot to enter the First Name, Last Name & Phone Number")
  }
  else if(Name1.value == '' && Name2.value != '' && Email.value == '' && Num.value == '' && Msg.value != ''){
    alert("You forgot to enter the First Name, Email & Phone Number")
  }
  else if(Name1.value != '' && Name2.value == '' && Email.value == '' && Num.value == '' && Msg.value != ''){
    alert("You forgot to enter the Last Name, Email & Phone Number")
  }
  else if(Name1.value != '' && Name2.value == '' && Email.value == '' && Num.value != '' && Msg.value == ''){
    alert("You forgot to enter the Last Name, Email & Message")
  }
  else if(Name1.value == '' && Name2.value != '' && Email.value == '' && Num.value != '' && Msg.value == ''){
    alert("You forgot to enter the First Name, Email & Message")
  }
  else if(Name1.value == '' && Name2.value == '' && Email.value != '' && Num.value != '' && Msg.value == ''){
    alert("You forgot to enter the First Name, Last Name & Message")
  }
  else if(Name1.value == '' && Name2.value != '' && Email.value != '' && Num.value == '' && Msg.value == ''){
    alert("You forgot to enter the First Name, Phone Number & Message")
  }
  else if(Name1.value != '' && Name2.value == '' && Email.value != '' && Num.value == '' && Msg.value == ''){
    alert("You forgot to enter the Last Name, Phone Number & Message")
  }
  else if(Name1.value != '' && Name2.value != '' && Email.value == '' && Num.value == '' && Msg.value == ''){
    alert("You forgot to enter the Email, Phone Number & Message")
  }
  else if(Name1.value != '' && Name2.value != '' && Email.value != '' && Num.value == '' && Msg.value == ''){
    alert("You forgot to enter the Phone Number & Message")
  }
  else if(Name1.value != '' && Name2.value != '' && Email.value == '' && Num.value != '' && Msg.value == ''){
    alert("You forgot to enter the Email & Message")
  }
  else if(Name1.value != '' && Name2.value != '' && Email.value == '' && Num.value == '' && Msg.value != ''){
    alert("You forgot to enter the Email & Phone Number")
  }
  else if(Name1.value == '' && Name2.value == '' && Email.value != '' && Num.value != '' && Msg.value != ''){
    alert("You forgot to enter the First Name & Last Name")
  }
  else if(Name1.value == '' && Name2.value != '' && Email.value == '' && Num.value != '' && Msg.value != ''){
    alert("You forgot to enter the First Name & Email")
  }
  else if(Name1.value == '' && Name2.value != '' && Email.value != '' && Num.value == '' && Msg.value != ''){
    alert("You forgot to enter the First Name & Phone Number")
  }
  else if(Name1.value == '' && Name2.value != '' && Email.value != '' && Num.value != '' && Msg.value == ''){
    alert("You forgot to enter the First Name & Message")
  }
  else if(Name1.value != '' && Name2.value == '' && Email.value != '' && Num.value != '' && Msg.value == ''){
    alert("You forgot to enter the Last Name & Message")
  }
  else if(Name1.value != '' && Name2.value == '' && Email.value != '' && Num.value == '' && Msg.value != ''){
    alert("You forgot to enter the Last Name & Phone Number")
  }
  else if(Name1.value != '' && Name2.value == '' && Email.value == '' && Num.value != '' && Msg.value != ''){
    alert("You forgot to enter the Last Name & Email")
  }
  else if(Name1.value == '' && Name2.value != '' && Email.value != '' && Num.value != '' && Msg.value != ''){
    alert("You forgot to enter the First Name")
  }
  else if(Name1.value != '' && Name2.value == '' && Email.value != '' && Num.value != '' && Msg.value != ''){
    alert("You forgot to enter the Last Name")
  }
  else if(Name1.value != '' && Name2.value != '' && Email.value == '' && Num.value != '' && Msg.value != ''){
    alert("You forgot to enter the Email")
  }
  else if(Name1.value != '' && Name2.value != '' && Email.value != '' && Num.value == '' && Msg.value != ''){
    alert("You forgot to enter the Phone Number")
  }
  else if(Name1.value != '' && Name2.value != '' && Email.value != '' && Num.value != '' && Msg.value == ''){
    alert("You forgot to enter the Message")
  }
});
