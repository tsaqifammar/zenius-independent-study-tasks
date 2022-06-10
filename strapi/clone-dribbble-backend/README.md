# Dokumentasi

API backend untuk [dribbble clone](https://github.com/tsaqifammar/zenius-independent-study-tasks/tree/main/react/clone-dribbble-w-backend) pada tugas ReactJS sebelumnya.

## Fitur API backend yang ingin ditambahkan ke ReactJS

Terdapat 3 fitur memanfaatkan backend yang ingin ditambahkan ke tugas ReactJS sebelumnya, yaitu:
- **Sign up user**, yaitu membuat akun user baru.
- **Filter designs by category**, yaitu mem-filter designs berdasarkan kategori.
- **Love a design**, yaitu pengguna dapat meng-klik icon *love* pada salah satu design atau sebaliknya. Mirip dengan *like* pada sosial media.

## Desain Tabel / Collection Types

### User

Tabel ini disetup secara default oleh strapi. Field yang dimiliki antara lain: username, email, password, dsb.

### Category

Terdapat beberapa kategori desain yang ada pada dribbble (contoh: Animation, Illustration, Product Design, dsb.). Field yang dimiliki tabel ini yaitu:
- `code`: Kode dari kategori.
- `name`: Display name dari kategori.
- `designs`: Field relasi ke *Design* dengan hubungan 1-to-many. Menandakan desain-desain apa saja yang termasuk kategori tersebut.

### Design

Tabel ini berisikan informasi untuk tiap desain pada dribbble clone. Field yang dimiliki tabel ini yaitu:
- `category`: Field relasi dengan *Category* yang menandakan termasuk kategori apa desain ini.
- `loveCount`: Field yang menandakan banyak like yang didapat desain.
- `viewCount`: Field yang menandakan banyak view yang didapat desain.
- `user`: Field relasi dengan *User* yang menandakan pembuat/designer dari desain ini.
- `designLink`: Field yang berisikan url gambar dari desain nya.
- `isLoved`: Field yang menandakan apakah desain ini sedang di like atau tidak.

## Implementasi fitur API

Terdapat 3 fitur yang ingin ditambahkan. Berikut contoh cara berkomunikasi dengan API nya:
1. **Sign up user**: `POST /api/users` dengan data pada request body:
  ```js
  {
    "username": "helloworld",
    "email": "hello@gmail.com",
    "password": "hello123"
  }
  ```

2. **Filter designs by category**: `GET /api/designs?{query}` dengan query (parse dengan `qs`):
  ```js
  {
    populate: {
      category: { fields: ['code'] },
      users_permissions_user: { fields: ['username'] },
    },
    filters: {
      category: { code: { $eq: 'animation' } }
    }
  }
  ```

3. **Love a design**: `PUT /api/designs/{id}` dengan data pada request body:
  ```js
  {
    "isLoved": true // atau false
  }
  ```

## Get started

Diambil dari README strapi, berikut command yang bisa dijalankan:
- Start dengan autoReload: `npm run develop`
- Start tanpa autoReload: `npm run start`
- Build admin panel: `npm run build`
