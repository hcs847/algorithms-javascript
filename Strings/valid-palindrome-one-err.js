// Given a string s, return true if the s can be palindrome 
// after deleting at most one character from it.

var validPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[right] !== s[left]) {
            // if there is one error, there are 2 options to remove one error and reiterate
            // if one of them is true
            return checkSecondError(s, left + 1, right) || checkSecondError(s, left, right - 1)
        }
        left++;
        right--;
    }
    return true;
};

const checkSecondError = (s, left, right) => {
    while (left < right) {
        // once there's not match return false since it's the 2nd err
        if (s[right] !== s[left]) return false;
        left++;
        right--;
    }
    return true;
}