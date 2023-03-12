function sqrt() {
  var p = 29;
  var find = 6;
  var residue = (Math.pow(find, (p-1) >> 1) % p)==1;
  console.log("is residue: " + residue)
  if (residue) for (var i = 0; i < p; i++) {
      if (i**2 % p === find) {
          console.log(i);
      }
  }
}

