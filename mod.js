function sqrt() {
  var p = 29;
  var find = 16;
  for (var i = 0; i < p; i++) {
      if (i**2 % p === find) {
          console.log(i);
      }
  }
}
