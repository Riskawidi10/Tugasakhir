describe('Login Page - Successful Login', () => {
    it('should login successfully with valid credentials', async () => {
        // Navigasi ke halaman login
        await browser.url('https://kasirdemo.vercel.app/login');
        
        // Masukkan email yang valid
        await $('#email').setValue('widikanza@gmail.com');
        
        // Masukkan password yang valid
        await $('#password').setValue('pass123');
        
        // Klik tombol "Login"
        await $('button[type="submit"]').click();
        
        // Verifikasi bahwa login berhasil
        await expect($('selector_for_logged_in_element')).toBeDisplayed();
    });
});
