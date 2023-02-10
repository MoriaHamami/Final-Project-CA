import { HomePage } from './pages/home-page.jsx'
import { LoginSignup } from './pages/login-signup.jsx'
import { WapDemos } from './pages/wap-demos-page.jsx'
import { Editor } from './pages/editor-page.jsx'
import { Dashboard } from './pages/dashboard.jsx'
import { Preview } from './pages/preview.jsx'
import { Publish } from './pages/publish.jsx'

const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home',
    },
    {
        path: '/WapDemos',
        component: <WapDemos />,
        label: 'Templates',
    },
    {
        path: '/editor/:wapId',
        component: <Editor />,
        label: 'Editor',
    },
    {
        path: '/dashboard',
        component: <Dashboard />,
        label: 'Dashboard',
    },
    {
        path: '/user/:isSignup',
        component: <LoginSignup />,
        label: 'LoginSignup',
    },
    {
        path: '/preview/:wapId',
        component: <Preview />,
        label: '',
    },
    {
        path: '/:wapName',
        component: <Publish />,
        label: '',
    }
]


export default routes