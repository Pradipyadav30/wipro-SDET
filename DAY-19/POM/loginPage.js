export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passInput = page.locator('#password');
        
        // CHANGE THIS LINE: Target the button element directly
        this.btn = page.locator('button[type="submit"]'); 
    }

    async navigate() {
        await this.page.goto('http://localhost:3000/login.html');
    }

    async fillForm(email, pass) {
        await this.usernameInput.fill(email);
        await this.passInput.fill(pass);
    }

    async submit() {
        await this.btn.click();
    }
}