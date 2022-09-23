# Purge CSS

Clean not used bootstrap code

# Install

```bash
npm i -D @fullhuman/postcss-purgecss
```

# Add command to package and run

```json
{
  ...
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "purgecss": "purgecss --css src/css/custom.css --content src/*.jsx src/components/*.jsx -o src/css/custom_reduced.css"
  },
  ...
}
```

```bash
npm run purgecss
```

# Update main component

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Use reduced file
import './css/custom_reduced.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
```