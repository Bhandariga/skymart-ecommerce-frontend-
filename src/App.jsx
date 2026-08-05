import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './context/ThemeContext.jsx'
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollTOTop.jsx";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop /> 
        <AppRoutes />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#111827',
              color: '#f9fafb',
              borderRadius: '0.75rem',
              border: '1px solid #263244',
            },
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App