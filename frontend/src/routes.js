import { HomePage } from './pages/home-page.jsx'
import { LoginSignup } from './pages/login-signup.jsx'
import { WapDemos } from './pages/wap-demos-page.jsx'
import { Editor } from './pages/editor-page.jsx'
import { Drafts } from './pages/drafts.jsx'

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
        path: '/drafts',
        component: <Drafts />,
        label: 'Drafts',
    },
    {
        path: '/user',
        component: <LoginSignup />,
        label: 'Login',
    }
]

export default routes