import { FC, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Context } from "../main";
import { MagnetogramMarkupData } from "../modules/api";
import { Loader } from "@mantine/core";

const Markup: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const {magnetogram} = useContext(Context)
    const [data, setData] = useState<MagnetogramMarkupData | null>(null)
    useEffect(() => {
        getMarkup()
    }, [])
    const getMarkup = async() => {
        const response = await magnetogram.getMagnetogramMarkupData(searchParams.get("id") || '0', Number(searchParams.get("i")) || 0)
        console.log(response)
        setData(response)
    }
    if (magnetogram.isLoading) {
        return <Loader h={300} />
    }
    if (magnetogram.isError) {
        return <h1>Ошибочка</h1>
    }
    return (
        <div>
            {/* Ждемс */}
        </div>
    )
}
export default Markup