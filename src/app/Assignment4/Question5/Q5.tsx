'use client';
import { ChangeEvent, useState } from "react";

export default function Dropdown() {
    const [select, setSelect] = useState<string>('option1'); // Initial value as string

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value);
    };

    const selectData = ['option1', 'option2', 'option3'];

    return (
        <>
            <select value={select} onChange={handleSelect}>
                {selectData.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <h1>Your selected option is: {select}</h1>
        </>
    );
}
