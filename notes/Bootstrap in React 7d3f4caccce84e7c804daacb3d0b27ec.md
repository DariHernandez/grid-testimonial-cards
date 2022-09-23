# Bootstrap in React

# Install Boostrab with cdn

Add styles and js to html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + Boostrab</title>

    <!-- Import boostrab styles -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>

    <!-- Import boostrab script -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
  </body>
</html>
```

# Sample use

```jsx
// App.jsx
...
return (
    <>
      <div class="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button class="btn btn-primary">Primary button</button>
      </div>
      <script type="module" src="./js/main.js"></script>
    </>
)
...
```

![Untitled](Bootstrap%20in%20React%207d3f4caccce84e7c804daacb3d0b27ec/Untitled.png)

# Customize bootsrtrap

## Install with node

```bash
npm install bootstrap@5.2.1
```

## Remove cdn’s

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + Boostrab</title>

    <!-- no css cnd -->

    <style>
        @media screen and (min-width: 992px) {
            .height-100-vh {
                height: 100vh;
            }
        }
    </style>
</head>

<body>
    <div id="root" class="w-100"></div>

    <script type="module" src="/src/main.jsx"></script>

    <!-- no js cnd -->
    
</body>

</html>
```

## Import bootstrap to a custom sass

Crear carpeta “css”, crear archivo “css**/custom.sass**”, añadir import y compilar a “css/custom.css”

```sass
// src/css/custom.sass

@import "../../node_modules/bootstrap/scss/bootstrap"
```

![Untitled](Bootstrap%20in%20React%207d3f4caccce84e7c804daacb3d0b27ec/Untitled%201.png)

## Import custom.css to app

```jsx
// main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import custom bootstrap
import './css/custom.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
```