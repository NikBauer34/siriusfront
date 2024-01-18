import React, { FC, MouseEventHandler, useState } from "react";
import { Select } from "@mantine/core";
import './DS.css'
interface DefaultSelectProps {
    label?: string;
    data: string[] | null;
    onClick: (value: string) => void
}
const DefaultSelect: FC<DefaultSelectProps> = (props) => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <>
            {props.data !== null
            ? <Select
                searchable
                searchValue={searchValue}
                onSearchChange={setSearchValue}
                className="select"
                label={props.label}
                data={props.data}
                defaultValue={props.data[0]}
                allowDeselect
                mt="md"
                nothingFoundMessage="Nothing found..."
                onClick={() => props.onClick(searchValue)}
            />
            : <Select disabled/>
            }
        </>
    )
}
export default DefaultSelect