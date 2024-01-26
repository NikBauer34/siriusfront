import { Grid } from "@mantine/core";
import { CreateMarkupCard } from ".";
import { MagnetogramCreation } from "../api/http/MagnetogramResponse";
interface MagnetogramListProps<T> {
    items: T[] | null
    setItems: (res: MagnetogramCreation) => void
    renderItem: (item: T) => React.ReactNode
    onModalConfirmed: (response: MagnetogramCreation) => void
    notFoundMessage: string
    pipe_id: string
}
export default function MagnetogramList<T> (props: MagnetogramListProps<T>){
    return (
        <Grid>
            {props.items != null && typeof props.items != 'string'
            ? props.items && props.items?.map(props.renderItem)
            : <h1>{props.notFoundMessage}</h1>
            }
            <CreateMarkupCard pipe_id={props.pipe_id} setItems={(res) => props.setItems(res)}/>
        </Grid>
    )
}