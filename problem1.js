function formatGuests(names) {
    // Removes the first element (the host)
    names.shift(); 

    // Formats each remaining name using backticks (Template Literals)
    return names
        .map(name =>`Guest:${name})`
        .join('\n');
}

// Example usage:
const guestArray = ["Pradip", "Aaryan", "Khushboo", "Rahul"];
console.log(formatGuests(guestArray));