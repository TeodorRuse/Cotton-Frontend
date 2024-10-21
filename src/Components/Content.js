import {useEffect, useState} from "react";
import MyCard from "./MyCard";
import Grid from "@mui/material/Grid2";
import theme from "./theme";
import Box from "@mui/material/Box";

export default function Content({searchURL, noPerPage}){
    const [articles, setArticles] = useState(null);
    const baseURL = "http://localhost:8080/news";

    useEffect(() => {
        const fetchURL = searchURL || baseURL;

        console.log(searchURL)

        fetch(fetchURL)
            .then(res => res.json())
            .then(data => {
                setArticles(data);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    }, [searchURL]);
//
    return (
        // <Box sx={{backgroundColor: "red", flexGrow: 1}}>
            <Grid container spacing={3} sx={{ paddingRight: 2, paddingBottom: 10, marginTop: 2, }}>
                {articles &&
                    articles.map((article) => (
                        <Grid key={article.linkToArticle} size={12 / noPerPage}>
                            <MyCard article={article}></MyCard>
                        </Grid>
                    ))}
            </Grid>
        // </Box>
    );
}