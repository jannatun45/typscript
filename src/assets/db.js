// fakeDb.ts
export const fakeDb = {
  getProduct: (id) => {
    const products = {
      '1': { name: 'Product 1', description: 'Description of Product 1' },
      '2': { name: 'Product 2', description: 'Description of Product 2' },
    };
    return products[id] || null; // Mengembalikan produk atau null jika tidak ditemukan
  },
};
