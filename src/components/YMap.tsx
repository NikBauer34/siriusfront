import React, { ChangeEvent, FC, useContext, useEffect, useState } from 'react'
import { MapResponse } from '../modules/api/index'
import { Context } from '../main'
import { YMaps, Map, Placemark, Button } from 'react-yandex-maps'
import { LoadingOverlay } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { GetClosestMark } from '../modules/helpers'
import { YMapModal } from '../modules/components'
import { toJS } from 'mobx'
const YMap: FC = () => {
    const { pipe } = useContext(Context)
    
    const [opened, { open, close }] = useDisclosure(false)
    const [userGeolocation, setUserGeolocation] = useState<[number, number]>([50, 49])
    const [chosenPlacemark, setChosenPlacemark] = useState<MapResponse>({} as MapResponse)
    // const getGeolocationSucces = (position: any) => {
    //     console.log(position.coords.latitude)
    //     console.log(position.coords.longitude)
    //     setUserGeolocation([position.coords.latitude, position.coords.longitude])
    // }
    // const getGeolocationError = () => {
    //     setUserGeolocation([44, 39])
    // }
    // useEffect(() => {
    //     if ('geolocation' in navigator) {
    //         navigator.geolocation.getCurrentPosition(getGeolocationSucces, getGeolocationError)
    //     } else {
    //         getGeolocationError()
    //     }
    // }, [])
    const onModalConfirmed = () => {
        console.log(toJS(chosenPlacemark))
        pipe.newUserPipe(chosenPlacemark)
    }
    const onClickPlacemark = (placemark: MapResponse) => {
        open();
        setChosenPlacemark(placemark)
    }
    return (
        <>
            <YMaps apikey='361bda94-9a2c-4af2-bae4-8796cee17db6'>
                <LoadingOverlay visible={pipe.isLoading}></LoadingOverlay>
                <Map state={{ center: userGeolocation, zoom: 9 }} width={1200} height={'440px'} >
                    {pipe.pipes?.map(placemark =>
                        <Placemark defaultGeometry={placemark.location} onClick={() => onClickPlacemark(placemark)} key={placemark._id}></Placemark>
                    )}
                    {pipe.pipes.length
                        ? <Button data={{ content: 'Близ. труба' }} onClick={() => setUserGeolocation(GetClosestMark(pipe.pipes, userGeolocation))} />
                        : <Button data={{ content: 'Нет труб' }} />
                    }
                </Map>
            </YMaps>
            <YMapModal opened={opened} onModalConfirmed={onModalConfirmed} onClose={close} />
        </>
    )
}
export default YMap;