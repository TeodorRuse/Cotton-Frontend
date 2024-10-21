
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid2';
import {useState} from "react";
import MyCard from "./MyCard";
import SideBar from "./SideBar";
import theme from "./theme"
import Content from "./Content";

function App() {


    const [noPerPage, setNoPerPage] = useState(1);
    const [isHome, setIsHome] = useState(true);
    const [searchURL,setSearchURL] = useState("");

    const article = {
        linkToImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Boston_Back_Bay_reflection.jpg/220px-Boston_Back_Bay_reflection.jpg',
        linkToArticle: 'https://your-article-link.com',                // URL to the article
        source: 'Digi24',                                              // Article source
        publishDate: '14-09-2020',                            // Article publish date
        publishTime: '14:00',                                          // Article publish time
        category: 'Politics',
        title: 'Lizard lizard lizard lizard lizard Lizard lizard lizard lizard lizard',  // Article title
        text: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.' +
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.' +
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.' +
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.' +
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.' +
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.' +
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.' +
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.' // Article text
    };

    return(
        <Box sx={{
            display: 'flex',
            backgroundColor: theme.palette.primary.dark,
            minHeight: '100vh',
        }}>
            <SideBar noPerPage={noPerPage} setNoPerPage={setNoPerPage} isHome={isHome} setIsHome={setIsHome} setSearchURL={setSearchURL}/>
            <Box sx={{marginLeft: 3, backgroundColor: theme.palette.primary.dark}}>
                <Content searchURL={searchURL} noPerPage={noPerPage}/>
            </Box>

        </Box>
  );
}

export default App;
