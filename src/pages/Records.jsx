import { CheckBox } from '@mui/icons-material'
import { Box, Button, Checkbox, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PauseIcon from '@mui/icons-material/Pause';
import DeleteIcon from '@mui/icons-material/Delete';

const data = [
    {
        name: "Unknown",
        date: "02/01/24 12:53am",
        play: " Paused"
    },
    {
        name: "Unknown2",
        date: "02/01/24 12:53am",
        play: " Paused"
    },
    {
        name: "Unknown3",
        date: "02/01/24 12:53am",
        play: " Paused"
    },
    {
        name: "Unknown4",
        date: "02/01/24 12:53am",
        play: " Paused"
    }
]

function Records() {

    const [checkValue, setCheckValue] = useState(false)
    const [allCheckValue, setAllCheckValue] = useState(false)
    const [isHover, setIsHover] = useState(null)
    const handleChange = (event) => {
        setCheckValue(event.target.checked)
        setAllCheckValue(true)
    }
    const onMouseHover = (index) => {
        setIsHover(index)
    }
    const onMouseHoverOut = () => {
        setIsHover(null)
    }
    const handleAllChecked = (event) => {
        setAllCheckValue(event.target.checked)
    }

    const deleteSelectedChecked = () => {
        setCheckValue(false)
    }
    return (
        <Grid container >
            <Grid item xs={12}>
                <Button fullWidth variant="outlined" color='primary'>START A VISIT</Button>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", borderBottom: "1px solid #ccc" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Checkbox onChange={handleAllChecked} value={allCheckValue} />
                        {!checkValue ? <Typography sx={{ marginLeft: 3 }}>All Notes</Typography> : <Button color="error" onClick={deleteSelectedChecked}>DELETE SELECTED</Button>}

                    </Box>
                    <Box>
                        <ArrowDropDownIcon />
                    </Box>
                </Box>
                {data.map((e, i) => {
                    return (
                        <Box key={i} onMouseOver={() => onMouseHover(i)} onMouseOut={onMouseHoverOut} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px", backgroundColor: isHover === i || (!isHover && i == 0) ? "#edf4fb" : "#fff" }}>

                            <Box sx={{ position: "absolute" }}>
                                {isHover === i ? <Checkbox sx={{ color: '#A9A9A9' }} value={checkValue} onChange={handleChange} /> : ""}
                            </Box>
                            <Box sx={{ marginLeft: "32%" }}>
                                <Typography>{e.name}</Typography>
                                <Typography>{e.date}</Typography>
                                <Typography>{e.play}</Typography>
                            </Box>
                            <Box>
                                {isHover === i ? <DeleteIcon sx={{ color: "#A9A9A9" }} /> : ""}
                            </Box>
                            <PauseIcon sx={{ color: "#A9A9A9" }} />
                        </Box>
                    )
                })}


            </Grid >
        </Grid >
    )
}

export default Records