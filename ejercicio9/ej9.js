let fromLeftToRight = true;
function catWalk() {
  const myCat = document.getElementById("myCat");
  const distanceWalked = parseInt(myCat.style.left);
  const windowWitdth = window.innerWidth;
  if (fromLeftToRight) {
    myCat.style.left = distanceWalked + 10 + "px";
    if (distanceWalked + myCat.width > windowWitdth) {
      fromLeftToRight = false;
    }
  } else {
    myCat.style.left = distanceWalked - 10 + "px";
    if (distanceWalked === 0) {
      fromLeftToRight = true;
    }
  }
}

window.setInterval(catWalk, 50);
