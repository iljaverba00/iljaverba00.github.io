import Main from '../components/Main.vue'
import AR from '../components/projects/ar/threejs/ThreeAR.vue'
import DownloadXRViewer from '../components/projects/ar/pages/DownloadXRViewerLayout.vue'

export const routes = [
    {path: '/', component: Main},
    {path: '/ar', component: AR},
    {path: '/ar/XRViewer', component: DownloadXRViewer}
]
