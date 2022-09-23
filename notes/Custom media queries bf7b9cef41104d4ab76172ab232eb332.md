# Custom media queries

(no required in root component)

```html
<!-- index.html -->

<head>
    ...

    <!-- 100 vh only for desktop screens -->
    <style>
        @media screen and (min-width: 992px) {
            .height-100-vh {
                height: 100vh;
            }
        }
    </style>
</head>

<body>
    <!-- <div id="root" class="w-100"></div> -->

    <!-- Custom class -->
    <main class='container w-100 d-flex align-items-center justyfy-content-center height-100-vh'>
        <div class='row'>
            ...
        </div>
    </main>
		...
</body>

</html>
```