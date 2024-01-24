import React, { FC, useContext } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Context } from "../../main";
import { ModalAddMag } from ".";
import { IconCirclePlus } from "@tabler/icons-react";
import '../../ui/styles/magCard.css';

interface CreateMagnetogramCardProps {
    pipe_id: string
}
const CreateMagnetogramCard: FC<CreateMagnetogramCardProps> = ({ pipe_id }) => {
    const [opened, { open, close }] = useDisclosure(false);
    const { magnetogram } = useContext(Context)
    const onModalConfirmed = async (title: string, file: File | null) => {
        const formdata = new FormData()
        formdata.append("pipe_id", pipe_id)
        formdata.append("version", "1.0.0")
        formdata.append("title", title)
        if (file != null) {
            formdata.append("file", file)
        }
        const response = await magnetogram.createMagnetogram(formdata)
        console.log(response)
        close()
    }
    return (
        <>
            <div className="magCard" color="#4a9dce">
                {/* <MagnetogramCard /> */}
                <IconCirclePlus style={{cursor:'pointer', width:'90px', height:'90px', margin:0}}  onClick={open}/>
                <h3 style={{margin:0}} >Создать новую магнитограмму</h3>
            </div>
            <ModalAddMag
                withCloseButton={false}
                title="Создать новую магнитограмму"
                opened={opened} onClose={close}
                onModalConfirmed={onModalConfirmed}
            />
        </>
    )
}
export default CreateMagnetogramCard;