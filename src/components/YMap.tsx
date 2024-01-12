import React, { FC, useContext, useEffect, useState } from 'react'
import { MapResponse } from '../modules/api/index'
import { Context } from '../main'
import {YMaps, Map, Placemark} from 'react-yandex-maps'
const YMap: FC = () => {
    //const {pipe} = useContext(Context)
    //const [placemarks, setPlacemarks] = useState<MapResponse[] | null>(pipe.pipes)
    return (
        <YMaps>
            <Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}>
                <Placemark defaultGeometry={[55.751574, 37.573856]} />
            </Map>
        </YMaps>
    )
}
export default YMap