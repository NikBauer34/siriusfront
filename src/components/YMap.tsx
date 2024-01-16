import React, { FC, useContext, useEffect, useState } from 'react'
import { MapResponse } from '../modules/api/index'
import { Context } from '../main'
import {YMaps, Map, Placemark, Button} from 'react-yandex-maps'
import { Modal} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { GetClosestMark } from '../modules/helpers'
import {Text} from '@mantine/core'
import { toJS } from 'mobx'
const YMap: FC = () => {
    const {pipe} = useContext(Context)
    console.log(toJS(pipe.pipes))
    console.log('--------------')
    console.log('here')
    const [opened, { open, close }] = useDisclosure(false)
    const [userGeolocation, setUserGeolocation] = useState<[number, number]>([44, 39])
    const [chosenPlacemark, setChosenPlacemark] = useState<MapResponse>({} as MapResponse)
    const getGeolocationSucces = (position: any) => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        setUserGeolocation([position.coords.latitude, position.coords.longitude])
    }
    const getGeolocationError = () => {
        setUserGeolocation([44, 39])
    }
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(getGeolocationSucces, getGeolocationError)
        } else {
            getGeolocationError()
        }
    }, [])
    const onModalConfirmed = () => {
        pipe.newUserPipe(chosenPlacemark)
    }
    const onClickPlacemark = (placemark: MapResponse) => {
        open();
        setChosenPlacemark(placemark)
    }
    return (
        <>
            <YMaps apikey='361bda94-9a2c-4af2-bae4-8796cee17db6'>
                <Map state={{ center: userGeolocation, zoom: 9 }}>
                    {pipe.pipes?.map(placemark =>
                        <Placemark defaultGeometry={placemark.location} onClick={onClickPlacemark} key={placemark._id}></Placemark>    
                    )}
                    {pipe.pipes != null &&
                        <Button data={{content: 'Близ. труба'}} onClick={() => setUserGeolocation([50, 40])}></Button>
                    }
                </Map>
            </YMaps>
            <Modal opened={opened} onClose={close} transitionProps={{ transition: 'rotate-left' }}>
                <Text>Добавить новую трубу</Text>
                <button onClick={onModalConfirmed}>Добавить</button>
            </Modal>
        </>
    )
}
export default YMap