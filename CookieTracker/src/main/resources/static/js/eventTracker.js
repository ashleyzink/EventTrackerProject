window.addEventListener("load", function () {
  console.log("Script loaded");
  init();
});

function init() {
  document.cookieForm.lookup.addEventListener('click', function(e) {
    e.preventDefault();
    var id = document.cookieForm.id.value;
    if(!isNaN(id) && id > 0) {
      showCookie(id);
    }
  });
  document.newCookieForm.submit.addEventListener('click', function(evt) {
    e.preventDefault();
    postNewCookie();
  })
}

function showCookie(id) {
  console.log('showCookie(): id=' + id);
 let xhr = new XMLHttpRequest();
 xhr.open('GET', 'api/cookies/' + id);

 xhr.onreadystatechange = function(){
   if ( xhr.readyState === 4 ) {
     if( xhr.status === 200) {
     let cookie = JSON.parse(xhr.responseText);
     console.log(cookie.name);
     displayCookie(cookie);
     }
     else{
     console.error('Cookie Not Found');
     let div = document.getElementById('cookieData');
     div.textContent = "Cookie Not Found";
     }
   }
 };
 xhr.send();
}

function displayCookie(cookie) {
  var dataDiv = document.getElementById('cookieData');
  dataDiv.textContent = '';
  let h1 = document.createElement('h1');
  h1.textContent = cookie.name;
  dataDiv.appendChild(h1);

  let bq = document.createElement('blockquote');
  bq.textContent = cookie.description;
  dataDiv.appendChild(bq);

  bq = document.createElement('blockquote');
  bq.textContent = cookie.ingredientList;
  dataDiv.appendChild(bq);

  bq = document.createElement('blockquote');
  bq.textContent = cookie.instructions;
  dataDiv.appendChild(bq);

  let ul = document.createElement('ul');
  let li = document.createElement('li');
  li.textContent = "Prep Time(min): " + cookie.prepTimeMinutes;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = "Bake Time(min): " + cookie.bakeTimeMinutes;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = "Yield: " + cookie.yield;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = "Texture: " + cookie.texture;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = "Comment: " + cookie.comment;
  ul.appendChild(li);

  li = document.createElement('li');
  li.textContent = "Source: " + cookie.source;
  ul.appendChild(li);
  dataDiv.appendChild(ul);

  //document.body.style.backgroundImage = cookie.imageURL;

}

function postNewCookie(e) {
  let form = document.newCookieForm;
  let newCookie = {
    name: form.name.value,
    description: form.description.value,
    ingredientList: form.ingredientList.value,
    instructions: form.instructions.value,
    prepTimeMinutes: form.prepTimeMinutes.value,
    bakeTimeMinutes: form.bakeTimeMinutes.value,
    yield: form.yield.value,
    texture: form.texture.value,
    comment: form.comment.value,
    source: form.source.value,
    imageURL: form.imageURL.value
  };
  console.log(newCookie);
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'api/cookies');
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
      if (xhr.status === 201 || xhr.status === 200) {
        let savedCookie = JSON.parse(xhr.responseText);
        displayCookie(savedCookie);
      }
      else {
        console.error('Error creating cookie, status=' + xhr.status);
        console.error(xhr.responseText);
      }
    }
  };
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.send(JSON.stringify(newCookie));
}

function deleteCookie(cookie) {
  console.log('showCookie(): id=' + id);
 let xhr = new XMLHttpRequest();
 xhr.open('DELETE', 'api/cookies/' + id);
 xhr.onreadystatechange = function(){
  if ( xhr.readyState === 4 ) {
    if( xhr.status === 200) {
    let cookie = JSON.parse(xhr.responseText);
    console.log(cookie.name);
    displayCookie(cookie);
    }
    else{
    console.error('Cookie Not Found');
    let div = document.getElementById('cookieData');
    div.textContent = "Cookie Not Found";
    }
  }
};
xhr.send();
}


