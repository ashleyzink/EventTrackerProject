window.addEventListener("load", function () {
  console.log("Script loaded");
  init();
});

function init() {
  document.cookieForm.lookup.addEventListener("click", function (e) {
    e.preventDefault();
    var id = document.cookieForm.id.value;
    if (!isNaN(id) && id > 0) {
      showCookie(id);
    }
  });
  document.newCookieForm.submit.addEventListener("click", function (e) {
    e.preventDefault();
    postNewCookie();
  });
  getAllCookies();
}

function cookieTableDisplay(cookies) {
  let cookieCounter =document.createElement('blockquote');
  cookieCounter.textContent = "Cookies in list:" + cookies.length;

  console.log(cookies);
  console.log(cookies[0]);
  var div = document.getElementById('cookieData');
  div.textContent = '';
  let table = document.createElement("table");
  let th = document.createElement("th");
  th.textContent = "ID";
  table.appendChild(th);
  th = document.createElement("th");
  th.textContent = "Name";
  table.appendChild(th);
  th = document.createElement("th");
  th.textContent = "Texture";
  table.appendChild(th);
  th = document.createElement("th");
  th.textContent = "Description";
  table.appendChild(th);
  let tr = null;
  let td = null;
  cookies.forEach((cookie, index) => {
    tr = document.createElement("tr");
    td = document.createElement("td");
    td.textContent = cookie.id;
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = cookie.name;
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = cookie.texture;
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = cookie.description;
    tr.appendChild(td);
    tr.addEventListener('click', function(e) {
      e.preventDefault();
      showCookie(cookie.id);
    })
    table.appendChild(tr);
  });
  
  div.appendChild(table);
  div.appendChild(cookieCounter);

}

function getAllCookies() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/cookies");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let cookies = JSON.parse(xhr.responseText);
        cookieTableDisplay(cookies);
      } else {
        let div = document.getElementById("cookieData");
        div.textContent =
          "Could not retrieve cookie list. " +
          xhr.status +
          ": " +
          xhr.responseText;
      }
    }
  };
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
}

function showCookie(id) {
  console.log("showCookie(): id=" + id);
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/cookies/" + id);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let cookie = JSON.parse(xhr.responseText);
        displayCookie(cookie);
      } else {
        console.error("Cookie Not Found");
        let div = document.getElementById("cookieData");
        div.textContent = "Cookie Not Found";
      }
    }
  };
  xhr.send();
}

function displayCookie(cookie) {
  var dataDiv = document.getElementById("cookieData");
  dataDiv.textContent = "";
  let h1 = document.createElement("h1");
  h1.textContent = cookie.name;
  dataDiv.appendChild(h1);

  let bq = document.createElement("blockquote");
  bq.textContent = cookie.description;
  dataDiv.appendChild(bq);

  bq = document.createElement("blockquote");
  bq.textContent = cookie.ingredientList;
  dataDiv.appendChild(bq);

  bq = document.createElement("blockquote");
  bq.textContent = cookie.instructions;
  dataDiv.appendChild(bq);

  let ul = document.createElement("ul");
  let li = document.createElement("li");
  li.textContent = "Prep Time(min): " + cookie.prepTimeMinutes;
  ul.appendChild(li);

  li = document.createElement("li");
  li.textContent = "Bake Time(min): " + cookie.bakeTimeMinutes;
  ul.appendChild(li);

  li = document.createElement("li");
  li.textContent = "Yield: " + cookie.yield;
  ul.appendChild(li);

  li = document.createElement("li");
  li.textContent = "Texture: " + cookie.texture;
  ul.appendChild(li);

  li = document.createElement("li");
  li.textContent = "Comment: " + cookie.comment;
  ul.appendChild(li);

  li = document.createElement("li");
  li.textContent = "Source: " + cookie.source;
  ul.appendChild(li);
  dataDiv.appendChild(ul);

  let img = document.createElement("img");
  img.src = cookie.imageURL;
  img.width = 350;
  img.height = 350;
  dataDiv.appendChild(img);

  let br = document.createElement("br");
  dataDiv.appendChild(br);

  var btn = document.createElement("button");
  btn.innerHTML = "Update Cookie";
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    popCookieInfo(cookie);
    document.updateCookieForm.name.focus();
  });
  dataDiv.appendChild(btn);

  document.updateCookieForm.submit.addEventListener("click", function (e) {
    e.preventDefault();
    updateCookie();
  });

  var btn = document.createElement("button");
  btn.innerHTML = "Delete Cookie";
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    deleteCookie(cookie.id);
  });
  dataDiv.appendChild(btn);

  br = document.createElement("br");
  dataDiv.appendChild(br);

  var btn = document.createElement("button");
  btn.innerHTML = "Show Full Cookie List";
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    getAllCookies();
  });
  dataDiv.appendChild(btn);
}
function popCookieInfo(cookie) {
  var updateForm = document.updateCookieForm;
  updateForm.id.value = cookie.id;
  updateForm.name.value = cookie.name;
  updateForm.description.value = cookie.description;
  updateForm.ingredientList.value = cookie.ingredientList;
  updateForm.instructions.value = cookie.instructions;
  updateForm.prepTimeMinutes.value = cookie.prepTimeMinutes;
  updateForm.bakeTimeMinutes.value = cookie.bakeTimeMinutes;
  updateForm.yield.value = cookie.yield;
  updateForm.texture.value = cookie.texture;
  updateForm.comment.value = cookie.comment;
  updateForm.source.value = cookie.source;
  updateForm.imageURL.value = cookie.imageURL;
}

function updateCookie() {
  var updateForm = document.updateCookieForm;
  var updatedCookie = {
    name: updateForm.name.value,
    description: updateForm.description.value,
    ingredientList: updateForm.ingredientList.value,
    instructions: updateForm.instructions.value,
    prepTimeMinutes: updateForm.prepTimeMinutes.value,
    bakeTimeMinutes: updateForm.bakeTimeMinutes.value,
    texture: updateForm.texture.value,
    comment: updateForm.comment.value,
    source: updateForm.source.value,
    imageURL: updateForm.imageURL.value
  };
  var xhr = new XMLHttpRequest();
  console.log(updateForm.id.value);
  xhr.open("PUT", "api/cookies/" + updateForm.id.value);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status == 200 || xhr.status == 201) {
        var updatedCookie = JSON.parse(xhr.responseText);
        displayCookie(updatedCookie);
      } else {
        console.log("PUT request failed.");
        console.error(xhr.status + ": " + xhr.responseText);
      }
    }
  };

  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(updatedCookie));
  updateForm.reset();
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
    imageURL: form.imageURL.value,
  };
  console.log(newCookie);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "api/cookies");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201 || xhr.status === 200) {
        let savedCookie = JSON.parse(xhr.responseText);
        displayCookie(savedCookie);
      } else {
        console.error("Error creating cookie, status=" + xhr.status);
        console.error(xhr.responseText);
      }
    }
  };
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(newCookie));
}

function deleteCookie(id) {
  let xhr = new XMLHttpRequest();
  let div = document.getElementById("cookieData");
  xhr.open("DELETE", "api/cookies/" + id);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 204) {
        div.textContent = "Cookie Info has been deleted";
      } else {
        console.error("Cookie Not Found");
        div.textContent = "Cookie Not Found";
      }
    }
  };
  xhr.send();
}
