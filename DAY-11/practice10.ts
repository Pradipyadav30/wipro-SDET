interface UserMetadata {
    createdAt: Date;
    [key: string]: string | number | boolean | Date;
}

const userData: UserMetadata = {
    createdAt: new Date(),
    username: "Pradip",
    age: 22,
    isActive: true
};

console.log(userData);