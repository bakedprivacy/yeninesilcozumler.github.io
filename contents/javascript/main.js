function about() {
  alert(
    "Wallpaper: https://www.reddit.com/r/Inkscape/comments/hmrrt0/recreated_the_mac_big_sur_wallpaper_in_inkscape/"
  );
}

var dat = new Date();
var hour =
  dat.getMonth() +
  " " +
  dat.getUTCFullYear() +
  " " +
  dat.getHours() +
  ":" +
  dat.getMinutes() +
  ":" +
  dat.getSeconds();

var getcurrenthour = (document.querySelector(".getcurrenthour").innerHTML =
  hour);

var data = document.querySelector(".data");

var count = 0;
function getData() {
  if (data.value.length === 0) return;
  var validargs = ["help", "join", "about"];
  var error = document.querySelector(".error");
  var reply = document.createElement("a");
  reply.className = "list_" + count;
  var result = document.querySelector(".result");

  var lastlist = document.querySelector(".list_17");

  console.log(count);
  if (data.value === validargs[0]) {
    if (count === 18) {
      if (lastlist) {
        for (i = 0; 19 > i; i++) {
          var currentlistitem = document.querySelector(".list_" + i);
          currentlistitem.remove();
        }

        count = 0;
      }
    } else {
      reply.innerHTML = "<br>Available commands: help, join, about";
      count++;
    }
  } else if (data.value === validargs[1]) {
    if (count === 18) {
      if (lastlist) {
        for (i = 0; 19 > i; i++) {
          var currentlistitem = document.querySelector(".list_" + i);
          currentlistitem.remove();
        }

        count = 0;
      }
    } else {
      reply.innerHTML = "<br>Link creating...";
      function openLink() {
        location.href = "https://forms.gle/yz3bjtNRN7tidgqK6";
      }
      setTimeout(openLink, 10000);
      count++;
    }
  } else if (data.value === validargs[2]) {
    if (count === 18) {
      if (lastlist) {
        for (i = 0; 19 > i; i++) {
          var currentlistitem = document.querySelector(".list_" + i);
          currentlistitem.remove();
        }

        count = 0;
      }
    } else {
      reply.innerHTML =
        "<br>created by <a target='_blank' href='https://github.com/halitsever' style='text-decoration:none; color:tomato;'>github.com/halitsever</a> for YNc";
      count++;
    }
  } else {
    error.innerHTML = "<br>Mistake! Type 'help' for commands for available.";
    if (!error) return;
    setTimeout(function () {
      error.innerHTML = " ";
    }, 7000);
  }

  result.appendChild(reply);
}
data.focus();
