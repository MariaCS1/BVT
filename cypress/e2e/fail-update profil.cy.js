describe('Registrasi Pengguna', () => {
  it('Mengisi formulir registrasi dan berhasil mendaftar', () => {
    cy.visit('/register'); // Asumsikan URL halaman registrasi adalah /register

    // Isi formulir registrasi
    cy.get('#nama').type('Maria'); // Ganti dengan selector yang sesuai untuk field nama
    cy.get('#email').type('maria@example.com');
    // ... isi field lainnya sesuai dengan selector

    // Klik tombol daftar
    cy.get('button[type="submit"]').click();

    // Verifikasi bahwa pengguna diarahkan ke halaman login
    cy.url().should('include', '/login');
    cy.contains('Selamat datang! Silakan login.').should('be.visible');
  });
});
