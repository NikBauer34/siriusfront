import React, { FC, MouseEventHandler, useState } from "react";
import { Select } from "@mantine/core";
import './DS.css'
interface DefaultSelectProps {
    label?: string;
    data: string[] | null;
    onChange: (value: string) => void;
    width?: string;
}
const DefaultSelect: FC<DefaultSelectProps> = (props) => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <>
            {props.data !== null
                ? <Select
                    style={{width:`${props.width}`}}
                    searchable
                    value={searchValue}
                    searchValue={searchValue}
                    onSearchChange={setSearchValue}
                    className="select"
                    label={props.label}
                    data={props.data}
                    allowDeselect
                    mt="md"
                    nothingFoundMessage="Nothing found..."
                    onChange={() => props.onChange(searchValue)}
                />
                : <Select disabled />
            }
        </>
    )
}
export default DefaultSelect