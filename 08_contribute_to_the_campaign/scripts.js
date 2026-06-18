let totalDonations = 0;

function giveTenDollars() {
  totalDonations = totalDonations + 10;

  document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;

  let message = "Thanks for your $10!";

  if (totalDonations >= 50 && totalDonations < 100) {
    message = "🎉 We've hit our first campaign milestone!";
  } else if (totalDonations >= 100) {
    message = "🚀 Goal smashed! You powered this campaign!";
  }

  document.getElementById("thankYouMessage").innerText = message;
}

function refundTenDollars() {
  totalDonations = totalDonations - 10;

  let message = "You better pay this back you cuck.";

  if (totalDonations < 0){
    totalDonations = 0
    message = "Children are going to starve because of your selfish refunds you twat."
  }

 if (totalDonations >= 50 && totalDonations < 100) {
    message = "🎉 We've hit our first campaign milestone!";
  } else if (totalDonations >= 100) {
    message = "🚀 Goal smashed! You powered this campaign!";
  }

  document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;
  document.getElementById("thankYouMessage").innerText = message;
}

document.getElementById("refundButton").onclick = refundTenDollars
document.getElementById("giveButton").onclick = giveTenDollars

