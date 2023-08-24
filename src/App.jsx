import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import SearchBar from './views/SearchView'
import store from "./stores/Store"

const router = createBrowserRouter([
  {path:"/",element:<h1>hi</h1>},
  {path:"/search",element:<SearchBar/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
