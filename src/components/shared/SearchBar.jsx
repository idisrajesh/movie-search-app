import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from 'react-redux';
import './SerachBar.css'

export default function SearchBar({ handleSearch }) {
    const searchText = useSelector(state => state.movies.searchText);
    const [searchQuery, setSearchQuery] = useState(searchText);
    return (
        <div className='search'>
            <div className='search-Wrapper'>
                <input
                    id="search-bar"
                    className="search-input"
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                    value={searchQuery}
                    placeholder="Enter a Movie Title..."
                />
                <SearchIcon onClick={() => handleSearch(searchQuery)} className='search-icon' style={{ fill: "black" }} />
            </div>
        </div>

    )
}
