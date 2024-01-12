import React, { FC, useContext, useEffect, useState } from 'react'
import { MapResponse } from '../modules/api/index'
import { Context } from '../main'
import {YMaps, Map, Placemark} from 'react-yandex-maps'
const YMap: FC = () => {
    //const {pipe} = useContext(Context)
    //const [placemarks, setPlacemarks] = useState<MapResponse[] | null>(pipe.pipes)
    return (
        <YMaps apikey='361bda94-9a2c-4af2-bae4-8796cee17db6'>
            <Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}>
                <Placemark defaultGeometry={[55.751574, 37.573856]} />
            </Map>
        </YMaps>
    )
}
export default YMap