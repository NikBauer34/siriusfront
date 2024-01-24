import { Grid } from '@mantine/core';
interface ListProps<T> {
    items: T[] | null;
    renderItem: (item: T) => React.ReactNode
    notFoundMessage: string
}

export default function List<T>(props: ListProps<T>) {
    console.log('items')
    console.log(props.items)
    return (
        <Grid>
            {props.items != null && typeof props.items != 'string'
            ? props.items && props.items?.map(props.renderItem)
            : <h1>{props.notFoundMessage}</h1>
            }
        </Grid>
    )
}