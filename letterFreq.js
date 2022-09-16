/**
  @arg {string} str - The string to search within.
  @arg {string} char - The character to search for.
  @returns {number} - The number of times `char` is in `str`.
  @desc Case sensitive.
 
*/
function letterFrequency(str, char) {
    let count = 0;
    // YOU DO THIS PART
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            count += 1;
        } 
    }
    return count;
  } 

let s = "hello";
let c = "l";
console.log(letterFrequency(s, c));

console.assert(letterFrequency('test', 't') === 2);

/**                                                                                                                                                                      
  @arg {string} str - The string to check.                                                                                                                               
  @returns {boolean} - True iff palindrome.                                                                                                                              
  @desc Case sensitive.  
  Disclaimer: No parameter checking or edge-case consideration.                                                                                                          
*/
function isPalindrome(str) {
    // YOU DO THIS PART
    for(let i = 0; i < str.length/2; i++){

        if(str[i] === str[str.length - 1 - i]){
            return true;
        } 

        else{
            return false;
        }
    }
  } 
  
  