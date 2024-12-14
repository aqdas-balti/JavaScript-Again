// Program to simulate a simple ATM system

// Step 1: Define the account balance and correct PIN
let balance = 1000; // Starting balance
const correctPIN = "1234"; // Correct PIN for verification
let attempts = 3; // Allowed attempts for PIN verification

// Step 2: Function to verify PIN
function verifyPIN() {
  const prompt = require("prompt-sync")(); // For user input in Node.js
  while (attempts > 0) {
    let enteredPIN = prompt("Please enter your PIN: ");
    if (enteredPIN === correctPIN) {
      console.log("PIN Verified Successfully!\n");
      return true; // PIN is correct
    } else {
      attempts = attempts - 1;
      console.log(`Incorrect PIN. Attempts remaining: ${attempts}`);
    }
  }
  console.log("Card Locked! Too many incorrect attempts.\n");
  return false; // PIN verification failed
}

// Step 3: Function to handle cash withdrawal
function withdrawCash() {
  const prompt = require("prompt-sync")(); // For user input
  let amount = parseFloat(prompt("Enter the amount to withdraw: $"));

  if (isNaN(amount) || amount <= 0) {
    console.log("Invalid amount. Please enter a valid positive number.\n");
    return; // Invalid input
  }

  if (amount > balance) {
    console.log("Insufficient balance. Please try a smaller amount.\n");
  } else {
    balance -= amount;
    console.log(`Transaction successful! You withdrew $${amount}.`);
    console.log(`Your remaining balance is $${balance}.\n`);
  }
}

// Step 4: Main ATM function to tie everything together
function atmSimulation() {
  console.log("Welcome to the ATM!\n");

  // Verify PIN
  if (verifyPIN()) {
    const prompt = require("prompt-sync")();
    // Ask user for withdrawal
    let anotherTransaction = "yes";
    while (anotherTransaction.toLowerCase() === "yes") {
      withdrawCash(); // Perform withdrawal
      anotherTransaction = prompt("Would you like another transaction? (yes/no): ");
    }
    console.log("Thank you for using the ATM. Have a great day!");
  } else {
    console.log("Exiting ATM. Please contact your bank for assistance.");
  }
}

// Start the ATM Simulation
atmSimulation();

/*
Yeh program kis tarah kaam karta hai, iski tafseel:

---

### **Balance aur correctPIN**
- Hum account ka balance aur ek correct PIN define karte hain taake simplicity ho.
- User apna PIN enter karega, aur program check karega ke yeh correct hai ya nahi.

---

### **verifyPIN Function**
1. User se uska PIN enter karne ko kaha jata hai.
2. User ko 3 attempts (koshishen) di jati hain.
3. Agar PIN correct ho, toh program aage chalta hai.
4. Agar user 3 attempts mein PIN galat dale, toh card lock ho jata hai.

---

### **withdrawCash Function**
1. User se poocha jata hai ke woh kitni rakam withdraw karna chahta hai.
2. Yeh check kiya jata hai ke amount valid hai (e.g., positive number).
3. Yeh verify hota hai ke balance withdrawal ke liye kaafi hai.
4. Agar transaction successful ho, toh balance update hota hai aur new balance dikhaya jata hai.

---

### **atmSimulation Function**
1. Program chalata hai aur pehle `verifyPIN` function ko call karta hai.
2. Agar PIN verify ho jaye, toh user cash withdraw kar sakta hai.
3. Program user se poochta hai, "Would you like another transaction?" aur multiple transactions ki ijazat deta hai.

---

### **Program ka Khatma**
1. Program us waqt khatam hota hai jab:
   - User PIN 3 bar galat enter kare.
   - User aur transaction na karne ka faisla kare.

---

Yeh simple explanation beginners ke liye banai gayi hai. Agar aur madad chahiye ho toh batayein! 😊
*/