# Cutomize styles

require [boostrab installed with node](Bootstrap%20in%20React%207d3f4caccce84e7c804daacb3d0b27ec.md)

# Custom font

## Link font

```html
<head>
    ...
    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;700&display=swap" rel="stylesheet">
    ...
</head>
```

## Update bootstrap variables in custom sass

```sass
// src/css/custom.sass

$font-family-sans-serif: 'Barlow Semi Condensed', sans-serif
    
@import "../../node_modules/bootstrap/scss/bootstrap"
```

![Untitled](Cutomize%20styles%20e687f4def35143f399fca1473a283055/Untitled.png)

# Custom colors

## Update sass variables

```sass
$font-family-sans-serif: 'Barlow Semi Condensed', sans-serif

$primary: #733FC8
$success: #49556B
$dark: #18202D
$secondary: #EDF2F8
    
@import "../../node_modules/bootstrap/scss/bootstrap"
```

## Update text color for each card

```jsx
// App.jsx
...
return (
  <main className='container w-100'>
      <div className='row'>
          <div className='col-12 col-lg-9'>
              <div className='row'>
                  <div className='col-12 col-lg-8 p-2'>
                      {/* Submit text color class  */}
                      <Card
                          image='daniel'
                          name='daniel clifford'
                          bgcolor='bg-primary'
                          texts={[text, text]}
                          color="text-light"
                      />
                  </div>

                  <div className='col-12 col-lg-4 p-2'>
                      <Card
                          image='jonathan'
                          name='jonathan walters'
                          bgcolor='bg-success'
                          texts={[text]}
                          color="text-light"
                      />
                  </div>

                  <div className='col-12 col-lg-4 p-2'>
                      <Card
                          image='jeanette'
                          name='jeanette harmon'
                          bgcolor='bg-secondary'
                          texts={[text]}
                          color="text-body"
                      />
                  </div>

                  <div className='col-12 col-lg-8 p-2'>
                      <Card
                          image='patrick'
                          name='patrick abrams'
                          bgcolor='bg-dark'
                          texts={[text, text]}
                          color="text-light"
                      />
                  </div>
              </div>
          </div>

          <div className='col-12 col-lg-3 p-2'>
              <Card
                  image='kira'
                  name='kira whittle'
                  bgcolor='bg-secondary'
                  texts={[text, text, text]}
                  color="text-body"
              />
          </div>
      </div>
  </main>
  )
...
```

![Untitled](Cutomize%20styles%20e687f4def35143f399fca1473a283055/Untitled%201.png)

```jsx
// Cards.jsx

function Card({ image, name, bgcolor, texts, color }) {
    return (
        // Add text color class to card
        <article className={`card text-start p-2 h-100 ${bgcolor} ${color}`}>
            ...
        </article>
    )
}

Card.propTypes = {
    ...
    color: PropTypes.string.isRequired,
}

export default Card
```

# Custom media queries

Move media queries to custom.sass

```html
<!-- index.html -->

<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + Boostrab</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;700&display=swap" rel="stylesheet">

    <!-- Remove embebed styles -->
</head>
```

```sass
// custom.sass

$font-family-sans-serif: 'Barlow Semi Condensed', sans-serif

$primary: #733FC8
$success: #49556B
$dark: #18202D
$secondary: #EDF2F8

// Media query
@media screen and (min-width: 992px)
    .height-100-vh
        height: 100vh

@import "../../node_modules/bootstrap/scss/bootstrap"
```

No visible changes

# Background image in sass

```sass
// custom.sass

...
.bg-card-img
		// get image from public folder
    background-image: url("imgs/bg-pattern-quotation.svg")
    background-repeat: no-repeat
    background-position: 85% top

@import "../../node_modules/bootstrap/scss/bootstrap"
```

![Untitled](Cutomize%20styles%20e687f4def35143f399fca1473a283055/Untitled%202.png)

```jsx
// App.jsx

...
<div className='col-12 col-lg-8 p-2'>
    {/* New class "bg-card-img" only for this card */}
    <Card
        image='daniel'
        name='daniel clifford'
        bgcolor='bg-primary bg-card-img'
        texts={[text, text]}
        color="text-light"
    />
</div>
....
```

![Untitled](Cutomize%20styles%20e687f4def35143f399fca1473a283055/Untitled%203.png)

# Container max width

```sass
// custom.sass

...
$container-max-widths: (sm: 540px, md: 720px, lg: 960px, xl: 960px, xxl: 960px)

@import "../../node_modules/bootstrap/scss/bootstrap"
```

![2022-09-23 12-00-02.gif](Cutomize%20styles%20e687f4def35143f399fca1473a283055/2022-09-23_12-00-02.gif)