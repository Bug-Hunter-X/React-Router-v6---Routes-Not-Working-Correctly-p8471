```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses the `Routes` and `Route` components from `react-router-dom` v6.  A common mistake is forgetting to wrap the routes with the `BrowserRouter` component. If the `BrowserRouter` is missing or not at the top-level of your app, routes won't work correctly.