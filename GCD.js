// Euclidean algorithm to find Greatest Common Factor
function gcd(a, b) {
    while (a !== b) {
        a < b && ([b, a] = [a, b]);
        a = a - b;
    }
    return a;
}
