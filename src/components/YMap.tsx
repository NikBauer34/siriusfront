import React, { FC, useContext, useEffect, useState } from 'react'
import { MapResponse } from '../modules/api/index'
import { Context } from '../main'
import {YMaps, Map, Placemark, Button} from 'react-yandex-maps'
import { Modal} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { GetClosestMark } from '../modules/helpers'
import {Text} from '@mantine/core'
const YMap: FC = () => {
    const {pipe} = useContext(Context)
    const [placemarks, setPlacemarks] = useState<MapResponse[] | null>([{_id: '4', location: [43.413310938222764, 39.950190770390044], users: ['f'], magnetograms: ['df']}])
    const [opened, { open, close }] = useDisclosure(false)
    const [userGeolocation, setUserGeolocation] = useState<[number, number]>([40, 50])
    const [chosenPlacemark, setChosenPlacemark] = useState<MapResponse | null>(null)
    const getGeolocationSucces = (position: any) => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        setUserGeolocation([position.coords.latitude, position.coords.longitude])
    }
    const getGeolocationError = () => {
        setUserGeolocation([40, 50])
    }
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(getGeolocationSucces, getGeolocationError)
        } else {
            getGeolocationError()
        }
    }, [])
    const onModalConfirmed = () => {
        // 
    }
    const onClickPlacemark = (placemark: MapResponse) => {
        open();
        setChosenPlacemark(placemark)
    }
    return (
        <>
            <YMaps apikey='361bda94-9a2c-4af2-bae4-8796cee17db6'>
                <Map state={{ center: userGeolocation, zoom: 9 }}>
                    {placemarks?.map(placemark =>
                        <Placemark defaultGeometry={placemark.location} onClick={onClickPlacemark} key={placemark._id}></Placemark>    
                    )}
                    {placemarks != null &&
                        <Button data={{content: 'Близ. труба'}} onClick={() => setUserGeolocation(GetClosestMark(placemarks, userGeolocation))}></Button>
                    }
                </Map>
            </YMaps>
            <Modal opened={opened} onClose={close} transitionProps={{ transition: 'rotate-left' }}>
                <Text>Добавить новую трубу</Text>
                <button>Добавить</button>
            </Modal>
        </>
    )
}
export default YMap