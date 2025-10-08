# React Router
[Dokumentasi React Router](https://reactrouter.com/home)

**Fokus di section library, karena kita pake react**

## Konfigurasi Router
```
npm i react-router
```

Buatlah folder router/index.js untuk setup routingan apps kita.
Contoh pembuatan router :
```
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

export default router;
```

[Dokumentasi konfigurasi](https://reactrouter.com/start/data/installation#create-a-router-and-render)

## Navigating
Jika kita menggunakan anchor tag untuk berpindah halaman, yang terjadi adalah ada proses refresh ketika berpindah halaman, padahal kita menerapkan konsep SPA (Single Page Application), berarti masih ada yang salah untuk cara navigasinya. Kita bisa menggunakan **Link / NavLink Component**.

### - Link Component
Dengan menggunakan **Link Component** kita dapat berpindah halaman tanpa harus merefresh halaman. Link component itu bersifat seperti anchor tag biasa
<br>

[Dokumentasi Link Component](https://reactrouter.com/start/framework/navigating#link)

### - NavLink Component
Jika kita membutuhkan styling yang berbeda ketika ditekan, kita dapat menggunakan **NavLink Component** , ketika **NavLink** aktif, otomatis akan memiliki className '.active' untuk mempermudah styling.
<br>

[Dokumentasi NavLink Component](https://reactrouter.com/start/framework/navigating#navlink)

### - useNavigate
Jika kita membutuhkan navigasi secara otomatis tanpa interaksi user setelah melakukan proses tertentu, kita bisa menggunakan react hooks **useNavigate**
<br>
<br>
Contoh penggunaan :
- ketika sehabis login akan otomatis pindah ke halaman home

<br>

[Dokumentasi useNavigate](https://reactrouter.com/start/framework/navigating#usenavigate)

## Nested Routes
Kita bisa membuat sebuah routingan yang bersarang.

Contoh, biasa digunakan untuk layouting. Ketika kita pas login, baru memunculkan navbar, navbarnya ada di halaman utama (parent page) dan halaman lainnya juga menggunakan navbar tersebut. Untuk merender children routes,kita bisa menggunakan **<Outlet/>** di parent routesnya
<br>

[Dokumentasi Nested Routes](https://reactrouter.com/start/data/routing#nested-routes)

### - Nested Path
Jika kita ingin menuliskan path di parent page dan childrennya pun masing2 memiliki pathnya, kita tidak boleh menuliskan path children dengan menggunakan "/" karena dianggap absolute. Jadi hanya perlu menuliskan pathnya tanpa "/"

```js
 {
        element: <BaseLayout />,
        path : "/base"
        children: [
            {
                path: "home",
                element: <HomePage />
            },
            {
                path: "add",
                element: <AddProductPage />
            },
            {
                path: "detail/:id",
                element: <DetailPage />
            }
        ]
    }
```

## - Params
Untuk menangkap params yang dikirim lewat router, kita perlu menggunakan hooks **useParams**
<br>
[Dokumentasi useParams](https://reactrouter.com/api/hooks/useParams#summary)

## Protected Routes
Protected Routes maksudnya adalah untuk memproteksi routingan kita, contoh ketika belum login , kita tidak bisa ke halaman home. Disini kita akan memanfaatkan loader function yang ada di setiap route. Dan untuk navigasinya bisa menggunakan redirect.

```js
{
        path: "/login",
        element: <LoginPage />,
        loader: () => {
            if (localStorage.token) {
                // jika sudah login, redirect ke halaman home
                return redirect("/");
            }

            return null
        },
    },
```
