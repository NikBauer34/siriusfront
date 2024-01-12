import React, { FC, useEffect, useState } from 'react'
import { MapResponse } from '../modules/api/index'

const YMap: FC = () => {
    useEffect(() => {}, [])
    const [placemarks, setPlacemarks] = useState<MapResponse | null>(null)
}