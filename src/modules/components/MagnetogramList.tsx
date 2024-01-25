import { Grid } from "@mantine/core";
import { CreateMarkupCard } from ".";
interface MagnetogramListProps<T> {
    items: T[] | null
    renderItem: (item: T) => React.ReactNode
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
            <CreateMarkupCard pipe_id={props.pipe_id} />
        </Grid>
    )
}