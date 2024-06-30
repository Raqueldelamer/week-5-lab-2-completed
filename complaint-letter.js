function complaintChecker() {
    let complaint;
    complaint = prompt("What would you want to complain about/request?");
    complaintParagraph.innerHTML = `Dear Mayor Cantrell, We New Orleanians pay A LOT of taxes. Could you please ${complaint}. It would mean a lot to our cars and all New Orleanians!`;
  }
  
  complaintButton.onclick = complaintChecker;