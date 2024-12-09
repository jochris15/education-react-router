# React Router
[Dokumentasi React Router](https://reactrouter.com/home)

**Fokus di section library, karena kita pake react**

## Konfigurasi Router
```
npm i react-router
```

Gunakan App.jsx untuk setup routingan apps kita.
Contoh pembuatan router :
```
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
```

[Dokumentasi konfigurasi](https://reactrouter.com/start/library/routing#configuring-routes)

## Navigating
Jika kita menggunakan anchor tag untuk berpindah halaman, yang terjadi adalah ada proses refresh ketika berpindah halaman, padahal kita menerapkan konsep SPA (Single Page Application), berarti masih ada yang salah untuk cara navigasinya. Kita bisa menggunakan **Link / NavLink Component**.

### - Link Component
Dengan menggunakan **Link Component** kita dapat berpindah halaman tanpa harus merefresh halaman. Link component itu bersifat seperti anchor tag biasa
<br>

[Dokumentasi Link Component](https://reactrouter.com/start/library/navigating#link)

### - NavLink Component
Jika kita membutuhkan styling yang berbeda ketika ditekan, kita dapat menggunakan **NavLink Component** , ketika **NavLink** aktif, otomatis akan memiliki className '.active' untuk mempermudah styling.
<br>

[Dokumentasi NavLink Component](https://reactrouter.com/start/library/navigating#navlink)

### - useNavigate
Jika kita membutuhkan navigasi secara otomatis tanpa interaksi user setelah melakukan proses tertentu, kita bisa menggunakan react hooks **useNavigate**
<br>
<br>
Contoh penggunaan :
- ketika sehabis login akan otomatis pindah ke halaman home

<br>

[Dokumentasi useNavigate](https://reactrouter.com/start/library/navigating#usenavigate)

## Nested Routes
Kita bisa membuat sebuah routingan yang bersarang.

Contoh, biasa digunakan untuk layouting. Ketika kita pas login, baru memunculkan navbar, navbarnya ada di halaman utama (parent page) dan halaman lainnya juga menggunakan navbar tersebut. Untuk merender children routes,kita bisa menggunakan **<Outlet/>** di parent routesnya
<br>

[Dokumentasi Nested Routes](https://reactrouter.com/start/library/routing#nested-routes)

### - Nested Path
Jika kita ingin menuliskan path di parent page dan childrennya pun masing2 memiliki pathnya, kita tidak boleh menuliskan path children dengan menggunakan "/" karena dianggap absolute. Jadi hanya perlu menuliskan pathnya tanpa "/"

```js
<Routes>
  <Route path="/home" element={BaseLayout}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="edit" element={<Edit />} />
  </Route>
</Routes>

// index routes = element default dari parent routesnya
```

## - Params
Untuk menangkap params yang dikirim lewat router, kita perlu menggunakan hooks **useParams**
<br>
[Dokumentasi useParams](https://reactrouter.com/start/library/url-values#route-params)

## Protected Routes
Protected Routes maksudnya adalah untuk memproteksi routingan kita, contoh ketika belum login , kita tidak bisa ke halaman home

```js
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router";

export default function BaseLayout() {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.access_token) {
            navigate('/login')
        }
    }, [navigate])

    return (
        <>
            <div className="p-5">
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

// Gunakan useEffect untuk melakukan navigasi sesuai dengan access_token nya
```
