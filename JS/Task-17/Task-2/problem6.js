// from some search i found that (geeksforgeeks) : 
// If a number is a power of two,
// then it cannot be expressed 
// as a sum of consecutive numbers otherwise Yes.


function consecutiveSum(n) {
    if (n <= 1) return false;
  
    // Check if n is not a power of two using bitwise AND with (n-1)
    return (n & (n-1)) !== 0;
  }
  