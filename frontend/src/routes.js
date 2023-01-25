import { HomePage } from './pages/home-page.jsx'
import { LoginSignup } from './pages/login-signup.jsx'
import { WapDemos } from './pages/wap-demos-page.jsx'
import { Editor } from './pages/editor-page.jsx'
import { Drafts } from './pages/drafts.jsx'
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
        path: '/drafts',
        component: <Drafts />,
        label: 'Drafts',
    },
    {
        path: '/user',
        component: <LoginSignup />,
        label: 'Login',
    },
    {
        path: '/preview/:wapId',
        component: <Preview />,
        label: '',
    },
    {
        path: '/publish/:wapName',
        component: <Publish />,
        label: '',
    }
]


export default routes