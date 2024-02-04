import React, { FC, SetStateAction, useState } from "react";
import { MagnetogramVersion } from "../api";
import { Checkbox } from "@mantine/core";
import VersionCard from "./VersionCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { randomId } from "@mantine/hooks";
import '../../ui/styles/customH1.css';

interface VersionList {
    selection: boolean;
    setSelection: React.Dispatch<SetStateAction<boolean>>;
    data: MagnetogramVersion[] | null;
}
const VersionsList: FC<VersionList> = (props) => {
    let [checkboxvalue, setCheckboxvalue] = useState<string[]>([])
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    let [indeterminate] = useState(false)

    const HandleComparison = () => {
        if (checkboxvalue.length == 2) {
            navigate(`/comparison?id=${searchParams.get("id") || '0'}&first_version=${Number(checkboxvalue[0])}&second_version=${Number(checkboxvalue[1])}`)
        } else {
            alert('Можно сравнивать только две версии магнитограммы!')
        }
    }

    return (
        <>
            <div style={{ gridColumn: 3 }}>
                {props.selection
                    ? <span
                        className="customH1"
                        onClick={HandleComparison}>Сравнить</span>
                    : <span
                        className="customH1"
                        onClick={() => props.setSelection(true)}>Выбрать</span>
                }
            </div>
            <div style={{ gridRowEnd: 4, gridColumn: 2 }}>
                {props.selection
                    ? <Checkbox.Group value={checkboxvalue} onChange={setCheckboxvalue} >
                        {props.data?.map((markup_version, index) =>
                            <div
                                style={{
                                    cursor: 'pointer',
                                    border: '1px solid #cbcbcb',
                                    borderRadius: '10px',
                                    padding: '7px 13px',
                                }}
                                key={randomId()}>
                                <VersionCard
                                    _id={searchParams.get("id") || '0'}
                                    i={index} date={markup_version.date}
                                    key={randomId()}
                                    version={markup_version.version}
                                />
                                <Checkbox
                                    value={String(index)}
                                    variant="outline"
                                    indeterminate={indeterminate}
                                    key={randomId()}
                                >
                                </Checkbox>
                            </div>
                        )}
                    </Checkbox.Group>
                    : props.data?.map((markup_version, index) =>
                        <VersionCard
                            _id={searchParams.get("id") || '0'}
                            i={index} date={markup_version.date}
                            key={randomId()}
                            version={markup_version.version}
                        />
                    )
                }
            </div>
        </>
    )
}
export default VersionsList;