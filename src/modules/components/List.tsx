import { Grid } from '@mantine/core';
import '../../ui/styles/liststyles.css'
interface ListProps<T> {
    items: T[] | null;
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {
    console.log('items')
    console.log(props.items)
    return (
        <Grid>
            {props.items != null && props.items[0] != undefined &&
                props.items && props.items.map(props.renderItem)
            }
        </Grid>
    )
}