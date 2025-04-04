class RegisterPage {
  get fullName() { return $('~Full Name'); }
  get email() { return $('~Email'); }
  get phone() { return $('~Phone Number'); }
  get nextButton() { return $('~NEXT'); }

  async register(fullName, email, phone) {
    await this.fullName.setValue(fullName);
    await this.email.setValue(email);
    await this.phone.setValue(phone);
    await this.nextButton.click();
  }
}
module.exports = new RegisterPage();
