import React, { FC } from "react";
import '../../ui/styles/grid.css'
interface GridListProps<T> {
    items: T[] | null | string;
    renderItem: (item: T) => React.ReactNode
    notFoundMessage: string
}
export default function GridList<T>(props: GridListProps<T>) {
    return (
        <div className="grid_items">
            {props.items != null && typeof props.items != 'string'
            ? props.items && props.items?.map(props.renderItem)
            : <h1>{props.notFoundMessage}</h1>
            }
        </div>
    )
}