 function formvalidate()
 {
 	if(user_validate())
 	{
 		if(num_validate())
 		{
 			if(email_validate())
 			{
 				if(add_validate())
 				{
 					if(branch_validate())
 					{
 						if(yrstudy_validate())
 						{
 							if(event_validate())
 							{
 								if(accom_validate())
 								{
 									alert('form submitted');
 									return true;
 								}
 							}
 						}
 					}
 				}
 			}
 		}
 	}
 	return false;
 	
 }



 function num_validate()
 {
 	var exp1=/^\d{10}$/;
 	var phoneno= document.getElementById("contact").value;
 	if(exp1.test(phoneno))
 	{
      return true;
 
 	}
 	else
 	{
 	  alert("Enter 10-digit numeric value only");
      document.myform.contact_no.focus();
      return false;
 
 	}
 }	

 function user_validate()
 {
 	var user = document.getElementById("urname").value;
 	
 	if(user==null || user=="")
 	{  
       alert("Name can't be blank");  
       return false; 
    }
    else if (user.length>20)
    {
    	alert("Name can't be more than 20 characters long.");  
        return false; 
    }
    else if (user.length<6)
    {
    	alert("Name must be at least 6 characters long.");  
        return false; 
    }

    return true;
}

function email_validate()
{
	var exp1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 	var e_mail= document.getElementById("email").value;
 	if(exp1.test(e_mail))
 	{
      return true;
 	}
 	else
 	{
 	  alert("Enter valid email address");
      document.myform.usermail.focus();
      return false;	
 	}
}

function add_validate()
{
	var exp1= /^[0-9a-zA-Z\s,]+$/;
 	var add= document.getElementById("address").value;
 	if(exp1.test(add))
 	{
      return true;
 	}
 	else
 	{
 	  alert("Enter valid address");
      document.myform.addr.focus();
      return false;	
 	}
}

function branch_validate()
{
	var branch= document.getElementById("discipline").value;
 	if(branch=="")
 	{
      alert("Please select ur stream");
      document.myform.dis.focus();
      return false;
 	}
 	else
 	{
      return true;	
 	}
}

function yrstudy_validate()
{
	var valid=false;
	var x=document.myform.study;

	for(var i=0;i<x.length;i++)
	{
		if(x[i].checked)
		{
			valid=true;
			break;
		}
	}
	if(valid)
	{
		return true;
	}
	else
	{   
		alert('Select year of study');
		document.myform.study.focus();
		return false;
	}
}

function accom_validate()
{
	var valid=false;
	var x=document.myform.accom;

	for(var i=0;i<x.length;i++)
	{
		if(x[i].checked)
		{
			valid=true;
			break;
		}
	}
	if(valid)
	{
		return true;
	}
	else
	{   
		alert('Choose your preference for accomodation');
		document.myform.accom.focus();
		return false;
	}
}

function event_validate()
{
	var valid=false;

	if(document.getElementById("blackbox").checked)
	{
		valid=true;
	}
	else if(document.getElementById("techlathon").checked)
	{
		valid=true;
	}
	else if(document.getElementById("bid-buy-build").checked)
	{
		valid=true;
	}

	if(valid)
	{
		return true;
	}
    else
    {
    	alert('Please select your event');
    	return false;
    }
}



 
	let person={
		name:document.getElementById("urname").value,
		contactno:document.getElementById("contact").value,
		email:document.getElementById("email").value,
		address:document.getElementById("address").value,
		collegename:document.getElementById("collegename").value,
		discipline:document.getElementById("discipline").value

	};
	let data = JSON.stringify(person,null,2);
    

  