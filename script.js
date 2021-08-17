function formReset() {
    document.querySelector(".search-tab").value="";
    document.querySelector(".user-list").remove();
  }
  function buttenReset() {
    document.querySelector(".search-tab").value="";
    
  }
  
  
  async function searchname(){
    const title=  document.querySelector(".search-tab").value;
   
    
      fetch(`https://restcountries.eu/rest/v2/region/${title}` ,
      {
        method: "GET"
      }
    ) 
        .then((data) => {
       
        return data.json();
      })
      .then((users) => loadUsers(users));
     
      
   }
  
  function loadUsers(users) {
  const userList =document.createElement("div");
  userList.className="user-list"
  users.forEach((user)=>{
    const userContainer = document.createElement("div");
    userContainer.className="user-container";
    
    userContainer.innerHTML=`
    
     <img class="flag" src="${user.flag}" />
     <h1>Name:${user.name}</h1>
     <p><b>Capital:</B>${user.capital}</p>
     <p><b>Region:</b>${user.region}</p>
      <p><b>Currencie code:</b>${user.currencies[0].code}</p>
       <p><b>Currencies Name:</b>${user.currencies[0].name}</p>
        <p><b>Currencies Symbole:</b>${user.currencies[0].symbol}</p>
        <p><b>Language Name:</b>${user.languages[0].name}</p>
         <p><b>Native Name:</b>${user.languages[0].nativeName}</p>
   
     
       
   
    `;
    
    userList.append(userContainer);
  })
  document.body.append(userList);
   
  }
  
   searchname();