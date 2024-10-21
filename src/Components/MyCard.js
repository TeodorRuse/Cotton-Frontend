import {Card, CardActions, CardContent, CardMedia, IconButton, Link} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import theme from "./theme";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Snackbar from '@mui/material/Snackbar';
import {useState} from "react";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function MyCard( {article} ){

    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState("");

    const handleCloseSnack = (event, reason) => {
        setOpenSnackBar(false);
    };

    return (
        <div>
            <Card sx={{ display: 'flex', alignItems: 'center',  backgroundColor: theme.palette.primary.light, }}>
                <CardMedia
                    component="img"
                    sx={{ height: 250, width: 250 , padding: 2, borderRadius: "10%"}}
                    image={article.linkToImage}
                    title={article.title}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', padding: 1 }}>

                    <CardContent>
                        <Link href={article.linkToArticle} underline="none" sx={{ color: 'inherit' }}>
                            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                                {article.source + " • " + article.publishDate + " • " + article.publishTime}
                            </Typography>
                            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginTop: 0 }}>
                                {article.title}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                                {article.category ? article.category : "undefined"}
                            </Typography>
                        </Link>
                    </CardContent>


                    <CardContent>
                        <Link href={article.linkToArticle} underline="none" sx={{ color: 'inherit' }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {article.text.length > 1000 ? article.text.substring(0, 1000) + '...' : article.text}
                            </Typography>
                        </Link>
                    </CardContent>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'left',
                        flexDirection: 'vertical'
                    }}>
                        <CardActions>
                            <IconButton
                                size="medium"
                                aria-label="save"
                                color="secondary"
                                onClick={() => {setSnackBarMessage("Article Saved"); setOpenSnackBar(true)}}
                            >
                                <BookmarkIcon style={{ fontSize: '30px' }}/>
                            </IconButton>
                        </CardActions>

                        <CardActions>
                            <IconButton
                                size="medium"
                                aria-label="compare"
                                color="secondary"
                                onClick={() => {setSnackBarMessage("Article Compared"); setOpenSnackBar(true)}}
                            >
                                <CompareArrowsIcon style={{ fontSize: '30px' }}/>
                            </IconButton>
                        </CardActions>
                    </Box>
                </Box>
            </Card>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={openSnackBar}
                autoHideDuration={1500}
                onClose={handleCloseSnack}
                message={snackBarMessage}
                sx={{
                    '& .MuiSnackbarContent-root': {
                        backgroundColor: theme.palette.primary.light,
                        border: '5px solid #FCE09D',
                        color: '#FFFFFF',
                    },
                }}
            />
        </div>
    );
}

export default MyCard;