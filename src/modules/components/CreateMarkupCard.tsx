import { FC } from "react";
import { useDisclosure } from "@mantine/hooks";
import { IconCirclePlus } from "@tabler/icons-react";
import '../../ui/styles/magCard.css';
import CreateModalMag from "./CreateModalMag";
import { MagnetogramCreation } from "../api/http/MagnetogramResponse";

interface CreateMagnetogramCardProps {
    pipe_id: string,
    setItems: (res: MagnetogramCreation) => void
}
const CreateMagnetogramCard: FC<CreateMagnetogramCardProps> = (props) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>

            <div className="magCard" style={{ textAlign: 'center', width: 'calc(100%/4)' }}>
                {/* <MagnetogramCard /> */}
                <IconCirclePlus
                    style={{
                        cursor: 'pointer',
                        width: '90px',
                        height: '90px',
                        margin: 0
                    }}
                    onClick={open}
                />
                <h3 style={{ margin: 0 }} >Создать новую магнитограмму</h3>
            </div>
            <CreateModalMag opened={opened} onClose={close} pipe_id={props.pipe_id} setItems={(res: MagnetogramCreation) => props.setItems(res)}/>
            {/* <ModalAddMag
                withCloseButton={false}
                title="Создать новую магнитограмму"
                opened={opened} 
                onClose={close}
                onModalConfirmed={onModalConfirmed}
            /> */}
        </>
    )
}
export default CreateMagnetogramCard;