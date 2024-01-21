
interface ListProps<T> {
    items: T[] | null;
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {
    console.log('items')
    console.log(props.items)
    return (
        <>
            {props.items != null &&
                props.items && props.items.map(props.renderItem)
            }
        </>
    )
}