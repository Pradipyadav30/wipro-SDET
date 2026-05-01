function checkType(input) {
    if (typeof input === "number") {
        console.log("This is a number");
    } else if (typeof input === "string") {
        console.log("This is a string");
    }
}

checkType(100);    
checkType("Wipro"); 