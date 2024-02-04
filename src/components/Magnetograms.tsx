import { FC, useContext, useEffect, useState } from "react";
import { Context } from "../main";
import MagnetogramCard from "../modules/components/MagnetogramCard";
import { Loader } from "@mantine/core";
import { MagnetogramResponse } from "../modules/api";
// import { CreateMarkupCard, List } from "../modules/components";
// import { randomId } from "@mantine/hooks";
import '../ui/styles/grid.css'
import MagnetogramList from "../modules/components/MagnetogramList";
import { MagnetogramCreation } from "../modules/api/http/MagnetogramResponse";

interface MagnetogramsProps {
    pipe_id: string
}
const Magnetograms: FC<MagnetogramsProps> = ({ pipe_id }) => {
    const { magnetogram } = useContext(Context)
    const [data, setData] = useState<MagnetogramResponse[] | null>(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        console.log(data)
    }, [data])
    useEffect(() => {
        getMagnetograms()
    }, [pipe_id])
    const getMagnetograms = async () => {
        if (pipe_id != undefined) {
            setLoading(true)
            const response = await magnetogram.getPipeMagnetograms(pipe_id)
            setLoading(false)
            console.log('tyiff')
            console.log(response)
            if (response.length != 0) {
                setData(response)
            }
        }
    }
    const onModalConfirmed = (response: MagnetogramCreation) => {
        console.log('Done')
        if (data != null) {
            setData([...data, response])
        }
    }
    if (isLoading) {
        return <Loader h={300} />
    }
    if (magnetogram.isError) {
        return <h1 style={{ margin: 'auto' }}>Труба не выбрана</h1>
    }
    const setItems = (response: MagnetogramCreation) => {
        if (data != null) {
            setData([...data, response])
        }
    }
    return (
        <>

            {data != null
                ? <div className="grid_items" style={{marginTop: '450px'}}>
                    {/*                     
                    //<List
                        items={data}
                        notFoundMessage="Не найдено магнитограмм"
                        renderItem={(magnetograms: MagnetogramResponse) => <MagnetogramCard key={magnetograms._id} magnetogram={magnetograms} />}
                        lastComponentItems={data != null ? null : [0]}
                        renderLastComponentItems={(item: any) => <CreateMarkupCard key={item} pipe_id={data[0].pipe} />}
                    /> */}
                    <MagnetogramList
                        items={data}
                        setItems={(res: MagnetogramCreation) => setItems(res)}
                        notFoundMessage="Не найдено магнитограмм"
                        pipe_id={data[0].pipe}
                        onModalConfirmed={(response) => onModalConfirmed(response)}
                        renderItem={(magnetograms: MagnetogramResponse) => <MagnetogramCard
                            key={magnetograms._id}
                            magnetogram={magnetograms}
                        />}
                    />
                </div>
                : <h1 style={{ margin: 'auto' }}>Выберите трубу</h1>}
        </>
    )
}
export default Magnetograms;