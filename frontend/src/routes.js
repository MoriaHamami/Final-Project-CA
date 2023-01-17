import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { CarIndex } from './pages/car-index.jsx'
import { ReviewIndex } from './pages/review-index.jsx'
import { ChatApp } from './pages/chat-app.jsx'
import { AdminApp } from './pages/admin-app.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home 🏠',
    },
    {
        path: '/tamplates',
        component: <Tamplates />,
        label: 'tamplates',
    },
   
    {
        path: 'admin',
        component: <AdminApp />,
        label: 'Admin Only'
    }
   
]

export default routes