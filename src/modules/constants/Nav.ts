import INav from './INav.ts'
import { client_url } from './index.ts'

export const nabvar: INav[] = [{
    title: 'analiticsPipe',
    path: client_url + '/analitics'
}, {
    title: 'mapOfDefects',
    path: client_url + '/map'
}, {
    title: 'activeRequests',
    path: client_url + '/requests'
}, {
    title: 'recentMagnetograms',
    path: client_url + '/recentMagnetograms'
}]

