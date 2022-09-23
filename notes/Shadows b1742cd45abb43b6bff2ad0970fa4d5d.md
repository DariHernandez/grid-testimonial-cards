# Shadows

```jsx
// Cards.jsx

function Card({ image, name, bgcolor, texts, color }) {
    return (
        //Regular shadow to cards
        <article className={`card text-start p-2 h-100 shadow-sm ${bgcolor} ${color}`}>
            ...
        </article>
    )
}
```