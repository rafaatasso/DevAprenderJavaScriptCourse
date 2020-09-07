// Three types:
// And -> &&
// Return true if both of the operators are true

console.log(true && true);

let older = true;
let haveAWorkCard = true;
let canApply = older && haveAWorkCard;

console.log(canApply);

// Or ||
// Return true if one of the operators are true

console.log(true || false);

// NOT !
let rejectCandidate = !canApply;

console.log(rejectCandidate);