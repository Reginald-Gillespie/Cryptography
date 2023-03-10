// Euclidean algorithm to find Greatest Common Factor
function gcd(a, b) {
    while (a !== b) {
        a < b && ([b, a] = [a, b]);
        a = a - b;
    }
    return a;
}

// What it says
function extendedEuclidean(p, q) {
  let u1 = 1, v1 = 0, u2 = 0, v2 = 1;
  while (q !== 0) {
    let r = p % q;
    let q_ = p / q >> 0;
    let u3 = u1 - q_ * u2;
    let v3 = v1 - q_ * v2;
    p = q;
    q = r;
    u1 = u2;
    v1 = v2;
    u2 = u3;
    v2 = v3;
  }
  return { u: u1, v: v1 };
}
