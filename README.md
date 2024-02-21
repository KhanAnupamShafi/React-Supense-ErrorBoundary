## Building a sample app with React Suspense [(Source)](https://blog.logrocket.com/data-fetching-react-suspense/)

**Using Suspense and the render-as-you-fetch approach, we will build a simple app that fetches data from an API and renders it to the DOM.**

With this approach:

- Both data fetching operations start in parallel before any component is rendered, avoiding the network waterfall problem.
- Suspense suspends rendering of the **`Children`** components until their respective data fetching promises resolve.
- The render-as-you-fetch approach ensures that data is fetched and rendered only when needed, improving performance by rendering components as their data becomes available rather than waiting for all data to load upfront.
