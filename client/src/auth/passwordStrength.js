//length, lowercase, uppercase, numbers, specialChars

const passwordStrength = (length, lowercase, uppercase, numbers, specialChars) => {

    let strongChars = 0;
    if (lowercase)
        strongChars++;
    if (uppercase)
        strongChars++;
    if (numbers)
        strongChars++;
    if (specialChars)
        strongChars++;

    if (length < 6 && strongChars === 1)
        return "Weak Password";
    else if (length >= 6 && strongChars <= 3)
        return "Medium Password"
    else if (length >= 6 && strongChars === 4)
        return "Strong Password";
    else
        return "Weak Password";
}



const strongerPassword = (password1, password2) => {

    let numberOfChars1 = 0, numberOfChars2 = 0;

    if (password1.lowercase)
        numberOfChars1 += 26;
    if (password1.uppercase)
        numberOfChars1 += 26;
    if (password1.numbers)
        numberOfChars1 += 10;
    if (password1.specialChars)
        numberOfChars1 += 8;
    
    if (password2.lowercase)
        numberOfChars2 += 26;
    if (password2.uppercase)
        numberOfChars2 += 26;
    if (password2.numbers)
        numberOfChars2 += 10;
    if (password2.specialChars)
        numberOfChars2 += 8;
    
    let ways1 = Math.pow(numberOfChars1, password1.length), ways2 = Math.pow(numberOfChars2, password2.length);
    
    if (ways1 === ways2)
        return "Both passwords are equally strong!"
    return ways1 > ways2 ? "Password 1 is stronger" : "password 2 is stronger";
}