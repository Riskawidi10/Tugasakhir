describe('User Registration', () => {
    it('should register successfully with valid data', async () => {
        // Navigate to the registration page
        await browser.url('https://kasirdemo.belajarqa.com/register');
        
        // Fill out the registration form with valid data
        await $('#name').setValue('Riska Widi');
        await $('#email').setValue('riska@mailinator.com');
        await $('#password').setValue('Password123');
        await $('button[type="submit"]').click();
        
        // Verify successful registration
        await expect($('div=Registration successful')).toBeDisplayed();
    });
});
