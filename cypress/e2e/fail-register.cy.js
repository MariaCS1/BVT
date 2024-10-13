describe('Registrasi Pengguna', () => {
  it('Menampilkan pesan error jika nama tidak diisi', () => {
    cy.visit('/register'); // Asumsikan URL halaman registrasi adalah /register

    // Isi formulir registrasi tanpa mengisi nama
    cy.get('#email').type('maria@example.com');
    // ... isi field lainnya sesuai dengan selector

    // Klik tombol daftar
    cy.get('button[type="submit"]').click();

    // Verifikasi pesan error
    cy.contains('Nama tidak boleh kosong').should('be.visible');
  });
});
