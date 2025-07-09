// 7.Design a search filter component that consists of an input field. 
// As the user types into the input, use controlled components to filter a list of items displayed below. 
// The list should dynamically update to show only items matching the search query.
'use client'
import { ChangeEvent, useState } from "react";

export default function FilterCompo() {
    const items = ['Abhishek', 'Goku', 'Vegeta', 'Naruto', 'Luffy']; // full list
    const [query, setQuery] = useState("");

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value.toLowerCase());

    const filteredItems = items.filter(item => item.toLowerCase().includes(query));

    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInput}
            />
            <ul>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                ) : (
                    <li>No match found</li>
                )}
            </ul>
        </>
    );
}
