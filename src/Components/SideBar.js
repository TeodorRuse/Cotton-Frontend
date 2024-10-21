import Drawer from "@mui/material/Drawer";
import logo from "../Data/logo.png";
import Typography from "@mui/material/Typography";
import {
    Button,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField
} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useEffect, useState} from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import "@fontsource/dejavu-sans/400.css";
import theme from "./theme"
import BookmarkIcon from '@mui/icons-material/Bookmark';

function SideBar({noPerPage, setNoPerPage, isHome, setIsHome, setSearchURL}){
    const drawerWidth = 300;

    const [isExtendedSearch, setIsExtendedSearch] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const [endDate, setEndDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    // const [endDate, setEndDate] = useState(dayjs(new Date()).add(1, "day"))
    // const [startDate, setStartDate] = useState(dayjs(new Date()))

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pageNumber]);


    var url = "http://localhost:8080/news";

    const handleSearch = (page = pageNumber) =>{
        var text = document.getElementById('search-field-text')?.value || '';
        var source = document.getElementById('search-field-source')?.value || '';
        var searchString = ''

        if(text.length > 0){
            if(searchString.length === 0)
                searchString = '?text=' + text
            else
                searchString = searchString + '&text=' + text
        }
        if(source.length > 0){
            if(searchString.length === 0)
                searchString = '?source=' + source
            else
                searchString = searchString + '&source=' + source
        }
        if(startDate){
            if(searchString.length === 0)
                searchString = '?startDate=' + formatTimestampsToDateString(startDate)
            else
                searchString = searchString + '&startDate=' + formatTimestampsToDateString(startDate)
        }
        if(endDate){
            if(searchString.length === 0)
                searchString = '?endDate=' + formatTimestampsToDateString(endDate)
            else
                searchString = searchString + '&endDate=' + formatTimestampsToDateString(endDate)
        }

        if(page && page > 0){
            if(searchString.length === 0)
                searchString = '?page=' + page
            else {
                searchString = searchString + '&page=' + page
            }
        }else{
            setPageNumber(1);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        setSearchURL(url + '/search' + searchString)

        console.log(url + '/search' + searchString)
    }

    const increasePage = () =>{
        setPageNumber(pageNumber+1)
        handleSearch(pageNumber+1);
    }
    const decreasePage = () =>{
        if(pageNumber > 1) {
            setPageNumber(pageNumber-1)
            handleSearch(pageNumber-1);
        }
    }

    const increaseNoPerPage = () =>{
        setNoPerPage(noPerPage+1);
    }

    const decreaseNoPerPage = () =>{
        if(noPerPage > 1)
            setNoPerPage(noPerPage-1);
    }

    const expandSearch = () =>{
        setIsExtendedSearch(!isExtendedSearch);
    }

    const changeLocation = () =>{
        setIsHome(!isHome);
    }

    return (
        <Box>
            <Drawer
                variant="permanent"
                anchor={"left"}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        paddingTop: 1,
                        boxSizing: 'border-box',
                        display: 'flex',
                        alignItems: "center",
                        overflowY: 'auto',
                        backgroundColor: theme.palette.primary.light,
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        scrollbarWidth: 'none',
                    },
                }}
            >

                <img src={logo} width={"200px"} height={"200px"} alt="logo" style={{
                    marginBottom: 4,
                }}/>
                <Typography variant={"h3"}
                            sx={{
                                marginBottom: 2.5,
                                fontFamily: "DejaVu Sans",
                                fontWeight: 'bold',
                            }}>
                    Cotton
                </Typography>

                <Button variant="contained" color="secondary" sx={{
                    width: "100%",
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 4,
                }} onClick={changeLocation}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {isHome ? <HomeIcon/> : <DashboardIcon/>}
                        <Box sx={{ ml: 1 }}> {/* Add margin-left to create space between icon and text */}
                            {isHome ? "Home" : "Dashboard"}
                        </Box>
                    </Box>
                    <NavigateNextIcon />
                </Button>



                <List
                    sx={{ width: '100%', maxWidth: 360, display: 'block'}}
                >
                    <ListItemButton onClick={expandSearch}>
                        <ListItemIcon>
                            <SearchIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Search"/>
                        {isExtendedSearch ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={isExtendedSearch} timeout="auto" unmountOnExit
                      sx={{
                          display: 'flex', // Enable flexbox layout
                          flexDirection: 'column', // Use flex column layout for stacked elements
                          alignItems: 'center', // Center items horizontally

                      }}
                    >
                        <Box sx={{
                            width: drawerWidth,
                            // boxSizing: 'border-box',
                            display: 'flex',
                            alignItems: "center",
                            alignContent: "center",
                            flexDirection: "column",
                        }}>
                            <TextField
                                id={"search-field-text"}
                                // onChange={handleSearch}
                                label={"Search..."}
                                variant={"outlined"}
                                sx={{
                                    marginTop: 1,
                                    marginBottom: 2,
                                    width: "90%",
                                }}
                            />
                            <Button
                                variant={"contained"}
                                onClick={handleSearch}
                                sx={{
                                    height: "60px",
                                    marginBottom: 6,
                                    width: "90%",
                                    color: theme.palette.primary.main,
                                    backgroundColor: theme.palette.secondary.main,
                                }}
                            > Search </Button>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    id={"start-date-field"}
                                    label={"Start Date"}
                                    value={startDate}
                                    onChange={(newValue) => setStartDate(newValue)}
                                    format="DD-MM-YYYY"
                                    sx={{
                                        marginBottom: 2,
                                        width: "90%",
                                    }}/>
                                <DatePicker
                                    id={"end-date-field"}
                                    label={"End Date"}
                                    value={endDate}
                                    onChange={(newendValue) => setEndDate(newendValue)}
                                    format="DD-MM-YYYY"
                                    sx={{
                                        marginBottom: 2,
                                        width: "90%",
                                    }}/>
                            </LocalizationProvider>

                            <TextField
                                id={"search-field-source"}
                                label={"Source..."}
                                variant={"outlined"}
                                sx={{
                                    marginBottom: 6,
                                    width: "90%",
                                    borderRadius: 0
                                }}
                            />

                            <Box sx={{
                                display: 'flex',
                                marginBottom: 2,
                                alignItems: 'center',
                            }}>
                                <NavigateBeforeIcon color="secondary" onClick={decreasePage} style={{ fontSize: '60px' }} />
                                <Typography variant={"h3"}>
                                    {pageNumber}
                                </Typography>
                                <NavigateNextIcon color="secondary" onClick={increasePage} style={{ fontSize: '60px' }}/>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                marginBottom: 2,
                                alignItems: 'center',
                            }}>
                                <Typography variant={"h5"}>
                                    Columns:
                                </Typography>
                                <RemoveIcon color="secondary" onClick={decreaseNoPerPage} style={{ fontSize: '40px' }} />
                                <Typography variant={"h4"}>
                                    {noPerPage}
                                </Typography>
                                <AddIcon color="secondary" onClick={increaseNoPerPage} style={{ fontSize: '40px' }}/>
                            </Box>

                        </Box>
                    </Collapse>
                    <ListItemButton>
                        <ListItemIcon>
                            <LocationSearchingIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Map" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <CompareArrowsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Compare" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <BookmarkIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Saved" />
                    </ListItemButton>
                </List>

            </Drawer>
        </Box>
    );
}

export default SideBar;

function formatTimestampsToDateString(timestamp) {
        const date = new Date(timestamp); // Create a Date object from the timestamp
        const day = String(date.getDate()).padStart(2, '0'); // Get the day and format it
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month (0-based) and format it
        const year = date.getFullYear(); // Get the year

        return `${day}-${month}-${year}`; // Return the formatted date string
}