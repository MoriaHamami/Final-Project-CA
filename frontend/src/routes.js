import { HomePage } from './pages/home-page.jsx'
import { LoginSignup } from './pages/login-signup.jsx'
import { Templates } from './pages/templates/templates-page.jsx'
import { Editor } from './pages/editor/editor-page.jsx'

const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home',
    },
    {
        path: '/templates',
        component: <Templates />,
        label: 'Templates',
    },
    {
        path: '/editor/:wapId',
        component: <Editor />,
        label: 'Editor',
    },
    {
        path: '/user',
        component: <LoginSignup />,
        label: 'Login',
    }
]

export default routes