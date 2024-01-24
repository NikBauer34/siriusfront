import React, { FC, useContext } from "react";
import { Context } from "../main";
import { Dropzone } from "@mantine/dropzone";
import { Button } from "@mantine/core";

const FormDataTest: FC = () => {
    const formdata = new FormData()
    const {magnetogram} = useContext(Context)
    const onClick = async() => {
        formdata.append('pipe_id', '65aba801804ec013face41b3')
        formdata.append('version', '1.0.0')
        formdata.append('title', 'Нью магнитограмма')
        const response = await magnetogram.createMagnetogram(formdata)
        console.log(response)
    }
    return (
        <>
            <Dropzone maxSize={5 * 1024 ** 2} onDrop={(files) => formdata.append('file', files[0])}></Dropzone>
            <Button onClick={onClick}>Click me</Button>
        </>
    )
}
export default FormDataTest