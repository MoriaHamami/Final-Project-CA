import { HomePage } from './pages/home-page.jsx'
import { Tamplates } from './pages/templates/templates-page.jsx'
import { Editor } from './pages/editor/editor-page.jsx'
// import { AboutUs } from './pages/about-us.jsx'
// import { CarIndex } from './pages/car-index.jsx'
// import { ReviewIndex } from './pages/review-index.jsx'
// import { ChatApp } from './pages/chat-app.jsx'
// import { AdminApp } from './pages/admin-app.jsx'

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
        path: '/editor',
        component: <Editor />,
        label: 'editor',
    }
    // {
    //     path: 'car',
    //     component: <CarIndex />,
    //     label: 'Cars'
    // },
    // {
    //     path: 'review',
    //     component: <ReviewIndex />,
    //     label: 'Reviews'
    // },
    // {
    //     path: 'chat',
    //     component: <ChatApp />,
    //     label: 'Chat'
    // },
    // {
    //     path: 'about',
    //     component: <AboutUs />,
    //     label: 'About us'
    // },
    // {
    //     path: 'admin',
    //     component: <AdminApp />,
    //     label: 'Admin Only'
    // }
]

export default routes