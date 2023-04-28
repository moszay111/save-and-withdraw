//Set initial balance and schedule
let balance = 0;
let schedule = "weekly";

//Function to withraw money
function withdraw(amount) {
  const now = new Date();
  let nextWithdrawal = new Date();
}

// Determine next withdrawal date based on schedule
if (schedule === "weekly") {
  nextWithdrawal.setDate(now.getDate() + 7);
} else if (schedule === "biweekly") {
  nextWithdrawal.setDate(now.getDate() + 14);
} else if (schedule === "monthly") {
  nextWithdrawal.setMonth(now.getMonth() + 1);
}

//Check if balance is sufficient for withdrawal
if (balance < 50) {
  console.log("Error: Balance is less than $50. Cannot withdraw.");
}

if (now < nextWithdrawal) {
  //Check if withdrawal is early and apply penalty if necessary
  const penalty = amount * 0.02;
  balance -= penalty;
  console.log(`Withdrawal is early. A penalty of ${penalty} will be applied`);
}

//Withdraw the requested amount and update
balance -= amount;
console.log(
  `Successfully withdrew ${amount}. New balance is ${balance}. Next withdrawal date is ${nextWithdrawal}.`
);

//Function to set the withdrawal schedule
function setSchedule(newSchedule) {
  schedule = newSchedule;
  console.log(`Withdrawal schedule has been set to ${schedule}`);
}

//function to deposit money
function deposit(amount) {
  balance += amount;
  console.log(`Successfully deposited ${amount}. New balance is ${balance}`);
}
