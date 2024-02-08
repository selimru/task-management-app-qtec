import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Rouert.jsx'
import TaskContext from './TaskContext/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContext>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </TaskContext>
  </React.StrictMode>,
)
