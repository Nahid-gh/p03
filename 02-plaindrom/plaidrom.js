function isPalindrome(str) {
    let rev = str.split("").reverse().join("");

    if (rev == str) {
        return true
    }
    else
    return false

}

let str1 = "racecar";
let str2 = "headphone";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));