import { Grid } from '@mantine/core';
import { ReactNode } from 'react';
interface ListProps<T> {
    items: T[] | null;
    renderItem: (item: T) => React.ReactNode
    notFoundMessage: string
    lastComponentItems?: any
    renderLastComponentItems?: (item: any) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {
    console.log('items')
    console.log(props.items)
    return (
        <Grid>
            {props.items != null && typeof props.items != 'string' && props.items.length != 0
            ? props.items && props.items?.map(props.renderItem)
            : <h1>{props.notFoundMessage}</h1>
            }
            {
                props?.lastComponentItems?.map(props.renderLastComponentItems)
            }
        </Grid>
    )
}