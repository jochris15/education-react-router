# [React Router](https://reactrouter.com/home)

**Fokus di section library, karena kita pake react**

## [Konfigurasi Router](https://reactrouter.com/start/declarative/installation)
```
npm i react-router
```

Kita akan menggunakan `App.jsx` sebagai komponen utama tempat setup routernya. Buatlah folder `views` untuk tempat komponen yang sifatnya adalah halaman.

Contoh pembuatan router :
```jsx
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from './views/LoginPage'
import HomePage from './views/HomePage'
import AddProductPage from './views/AddProductPage'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add" element={<AddProductPage />} />
                </Routes>
            </BrowserRouter>,
        </>
    )
}
```

## Navigating
Jika kita menggunakan anchor tag untuk berpindah halaman, yang terjadi adalah ada proses refresh ketika berpindah halaman, padahal kita menerapkan konsep SPA (Single Page Application), berarti masih ada yang salah untuk cara navigasinya. Kita bisa menggunakan **Link / NavLink Component**.

### [Link Component ](https://reactrouter.com/start/declarative/navigating#link)
Dengan menggunakan **Link Component** kita dapat berpindah halaman tanpa harus merefresh halaman. Link component itu bersifat seperti anchor tag biasa

### [NavLink Component](https://reactrouter.com/start/declarative/navigating#navlink)
Jika kita membutuhkan styling yang berbeda ketika ditekan, kita dapat menggunakan **NavLink Component** , ketika **NavLink** aktif, otomatis akan memiliki className '.active' untuk mempermudah styling.

### [useNavigate](https://reactrouter.com/start/declarative/navigating#usenavigate)
Jika kita membutuhkan navigasi secara otomatis tanpa interaksi user setelah melakukan proses tertentu, kita bisa menggunakan react hooks **useNavigate**
<br>
<br>
Contoh penggunaan :
- ketika sehabis login akan otomatis pindah ke halaman home
- ketika sehabis menambah produk akan otomatis pindah ke halaman home

## [Nested Routes](https://reactrouter.com/start/declarative/routing#nested-routes)
Kita bisa membuat sebuah routingan yang bersarang. Path di parent routes otomatis akan menjadi prefix di children routesnya. Path pada children tidak boleh diawali dengan '/'. Jika path children ingin diawali dengan '/', maka path pada parent routesnya harus dihilangkan.

```jsx
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route index element={<Home />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
```
Untuk merender children routes,kita bisa menggunakan **<Outlet/>** di parent routesnya (Pada contoh disini, dashboard adalah parent routesnya).

### [Layout routes](https://reactrouter.com/start/declarative/routing#layout-routes)
`Layout routes` biasa digunakan hanya untuk dasar layouting saja, biasanya routes ini tidak memiliki `path`. Maka dari itu path children routes dari layout routes diawali dengan '/'.

### [Index routes](https://reactrouter.com/start/declarative/routing#index-routes)
`Index routes` adalah routes default ketika kita mengakses parent routesnya. Untuk membuat index routes, kita bisa menambahkan atribut `index` pada routenya.

### [Dynamic Segments](https://reactrouter.com/start/declarative/routing#dynamic-segments)
Kita bisa menambahkan params yang dinamis pada path routingan kita, dengan menambahkan `:` pada pathnya. Dengan seperti itu, path kita memiliki params yang bisa digunakan di komponen tujuan routingnya. Untuk menangkap params yang dikirim lewat router, kita perlu menggunakan hooks **useParams**
```jsx
<Route path="teams/:teamId" element={<Team />} />
```

```jsx
import { useParams } from "react-router";

export default function Team() {
  const {teamId} = useParams();
}
```
## Protected Routes
Protected Routes maksudnya adalah untuk memproteksi routingan kita, contoh ketika belum login , kita tidak bisa ke halaman home. Disini kita akan memanfaatkan perkondisian dan [`Navigate`](https://reactrouter.com/api/components/Navigate#navigate) component untuk melakukan redirect. 

Kenapa kita menggunakan `Navigate` component? Karena jika kita menggunakan `useNavigate` hooks, hooks tersebut hanya bisa digunakan di dalam function component, sedangkan kita butuh melakukan pengecekan di luar function component. Kita tidak bisa menggunakan `Link` atau `NavLink` component, karena kedua component tersebut hanya digunakan untuk navigasi yang dilakukan oleh user (ada interaksi usernya). 

```js
import { Navigate } from "react-router";

export default functio BaseLayout() {
    if (!localStorage.access_token) {
        return <Navigate to="/login" />
    }
}
```
