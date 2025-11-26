# TEST CASE FRONT END

# Soal 1: Membuat Halaman Statis Tugas

## Buat sebuah halaman Next.js yang menampilkan daftar artikel. Gunakan Static Generation untuk mengambil data artikel dari API eksternal

**(https://jsonplaceholder.typicode.com/posts).**

- Kriteria:
- Halaman harus di-generate secara statis.
- Tampilkan judul dan isi dari setiap artikel.
- Gunakan CSS Modules untuk styling.

# Soal 2: Routing Dinamis Tugas

## Buat sebuah aplikasi Next.js yang memiliki dua halaman:

1. Halaman utama (/) yang menampilkan daftar pengguna (ambil data dari API
   **https://jsonplaceholder.typicode.com/users**).

2. Halaman detail pengguna `(/users/[id])` yang menampilkan informasi detail
   dari pengguna berdasarkan ID.

- Kriteria:
- Implementasikan routing dinamis untuk halaman detail pengguna.
- Gunakan Server-Side Rendering untuk halaman detail pengguna.

# Soal 3: API Routes Tugas

## Buat sebuah API endpoint di Next.js yang mengembalikan daftar produk. Endpoint ini harus mengambil data dari file JSON lokal yang berisi daftar produk.

- Kriteria:
- Buat file JSON berisi daftar produk di folder data.
- Implementasikan API endpoint di folder pages/api/products.js.
- Endpoint harus mengembalikan data dalam format JSON.

# Soal 4: Formulir dan Pengelolaan State Tugas:

## Buat sebuah halaman yang memiliki formulir pendaftaran dengan input untuk nama, email, dan password. Ketika formulir dikirim, tampilkan data input di bawah formulir.

- Kriteria:
- Gunakan useState untuk mengelola state dari input formulir.
- Implementasikan fungsi untuk menangani pengiriman formulir.
- Tampilkan data input di bawah formulir setelah formulir dikirim.

# Soal 5: Image Optimization Tugas:

## Buat sebuah halaman yang menampilkan galeri gambar. Gunakan komponen next/image untuk mengoptimalkan gambar.

- Kriteria:
- Buat sebuah array berisi URL gambar.
- Tampilkan setiap gambar dalam array menggunakan komponen next/image.
- Atur lebar dan tinggi gambar agar sesuai dalam tata letak grid.
