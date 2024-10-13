describe('Update Profil Pengguna', () => {
  it('Menampilkan pesan error jika field wajib tidak diisi', () => {
    cy.visit('/profil'); // Asumsikan URL halaman profil adalah /profil

    // Klik tombol edit profil
    cy.get('button[data-cy="edit-profile"]').click();

    // Isi beberapa field, tapi biarkan field wajib kosong
    cy.get('#nama').clear().type('John Doe');
    // ... isi field lainnya sesuai dengan selector, kecuali field wajib yang dikosongkan

    // Klik tombol simpan
    cy.get('button[type="submit"]').click();

    // Verifikasi pesan error atau tidak adanya perubahan
    cy.contains('Harap isi semua field yang wajib').should('be.visible'); // Sesuaikan dengan pesan error yang sebenarnya
    // Atau, jika tidak ada pesan error, Anda bisa memverifikasi bahwa nilai field tidak berubah
    cy.get('#nama').should('have.value', 'John Doe'); // Pastikan nama tidak berubah
  });
});
