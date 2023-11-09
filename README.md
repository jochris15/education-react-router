# React Router
[Dokumentasi React Router](https://reactrouter.com/en/main/start/tutorial)

## Konfigurasi Router
```
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```
Jangan taro di app.jsx, kenapa? karena setiap kita merender app.jsx, routerny juga akan kerender ulang, harusnya routernya hanya sekali aja di render, jadi baiknya dipisah
<br>
<br>
Buatlah sebuah folder router berisikan index.js (kita akan createRouter disini)


## Navigation
Jika kita menggunakan anchor tag untuk berpindah halaman, yang terjadi adalah ada proses refresh ketika berpindah halaman, padahal kita menerapkan konsep SPA (Single Page Application), berarti masih ada yang salah untuk cara navigasinya. Kita bisa menggunakan **Link Component**.

### - Link Component
Dengan menggunakan **Link Component** kita dapat berpindah halaman tanpa harus merefresh halaman. Link component itu bersifat seperti anchor tag biasa
<br>
[Dokumentasi Link Component](https://reactrouter.com/en/main/components/link)


## Programmatic navigation
Jika kita tadi bisa melakukan navigasi menggunakan link component, selain itu kita juga bisa melakukan navigasi menggunakan **Programmatic navigation**. Kita juga bisa mengirim params menggunakan programmatic navigation. Programmatic navigation bukan bersifat seperti anchor tag

Contoh, ketika kita memencet gambar item, lalu berpindah ke halaman detail, kita dapat menggunakan **Programmatic navigation**


### - useNavigate
Untuk menggunakan programmatic navigation, kita perlu hooks **useNavigate**
<br>
[Dokumentasi useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)

### - useParams
Untuk menangkap params yang dikirim lewat router, kita perlu menggunakan hooks **useParams**
<br>
[Dokumentasi useParams](https://reactrouter.com/en/main/hooks/use-params)

## Nested Routes
Kita bisa membuat sebuah routingan yang bersarang.

Contoh, biasa digunakan untuk layouting. Ketika kita pas login, baru memunculkan navbar, navbarnya ada di halaman utama (parent page) dan halaman lainnya juga menggunakan navbar tersebut.
<br>
[Dokumentasi Nested Routes](https://reactrouter.com/en/main/start/overview#nested-routes)

### - Outlet
Nah, pada saat kita sudah membuat dan memindahkan halaman lain menjadi children dari parent page, kita berpindah ke halaman2 tersebut pasti sudah ada navbarnya, tetapi datanya tidak muncul. Maka dari itu kita perlu menggunakan hooks **Outlet**
<br>
[Dokumentasi Outlet](https://reactrouter.com/en/main/components/outlet)

### - Nested Path
Jika kita ingin menuliskan path di parent page dan childrennya pun masing2 memiliki pathnya, kita tidak boleh menuliskan path children dengan menggunakan "/" karena dianggap absolute. Jadi hanya perlu menuliskan pathnya tanpa "/"

```
{
        element: <Parent />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
                children: [
                  {
                    path: "description",
                    element: <Description />
                  }
                ]
            },
            {
                path: "/detail/:name",
                element: <Detail />
            }
        ]
}
```

## Protected Routes
Protected Routes maksudnya adalah untuk memproteksi routingan kita, contoh ketika belum login , kita tidak bisa ke halaman home

### Loader
kita bisa memproteksi routingan kita menggunakan **loader**. Selain itu kita juga menggunakan hooks **redirect** dari react-router-dom untuk meredirect ketika tidak sesuai dengan kondisi yg kita inginkan. Untuk penggunaan loader, harus mereturn suatu nilai, gaboleh undefined.
<br>
[Dokumentasi Loader](https://reactrouter.com/en/main/route/loader)
