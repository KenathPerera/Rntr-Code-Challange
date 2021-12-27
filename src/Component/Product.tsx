import 'pure-react-carousel/dist/react-carousel.es.css';
import React, { useEffect, useState } from 'react';
import Service from '../Services/Service';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Styles/Custom.css"

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    box: {
        height: "100%",
        width: "100%"
    },
    container: {
        height: "700px"
    },
    innerContainer: {
        height: "100%"
    },
    item: {
        flex: 1
    },
    button: {
        borderRadius: "5em",
        height: "10vh",
        marginBottom: '2%'
    },
    button2: {
        height: "8vh",
        marginBottom: '2%',
        width: '80%'
    },
    input: {
        display: "none"
    },
    gridBoarder:{
        padding:'10px'
    },
    priceColor:{
        color : 'red',
        fontWeight:'bold'
    }
});

let dateBetween: any = [];


function dateRange(startDate: string | number | Date, endDate: string | number | Date, steps = 1) {
    const dateArray = [];
    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
        let date = JSON.stringify(currentDate)
        date = date.slice(1, 11)
        dateArray.push(date);
        // Use UTC date to prevent problems with time zones and DST
        currentDate.setUTCDate(currentDate.getUTCDate() + steps);
    }

    return dateArray;
}

/* This Product component let users to View the Product */
function Product() {

    const classes = useStyles();
    let isLoaded = false;
    const [days, setDays] = useState<any[]>([]);
    const [price, setPrice] = useState('0');
    const [title, setTitle] = useState('');
    const [strId, setStrId] = useState('');
    const [description, setdescription] = useState('');
    const [holiday, setHoliday] = React.useState<Date[]>([]);
    const [images, setImages] = useState<any[]>([]);
    const [visible, setVisible] = useState(true);
    const [priceDays, setpriceDays] = useState(true);

    {/*const [date, setDate] = useState<Date | null>(new Date());*/ }
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates: [any, any]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        if (!isLoaded) {
            Service.retrieveAllProducts()
                .then(
                    (response: { data: { [x: string]: any; }; }) => {
                        var lengthPrice = Object.keys(response.data.SKUs[0]['pricing']).length
                        var lengthImage = Object.keys(response.data.product['images']).length
                        var lengthSku = Object.keys(response.data.product['images']).length

                        setTitle(response.data.product['title']);
                        setdescription(response.data.product['description']);

                        //forloop for get product all images
                        for (var i = 0; i < lengthImage; i++) {
                            images.push('https://app.getrntr.com/api/media/' + response.data.product['images'][i])

                        }

                        //forloop for get SKUI Details
                        for (var i = 0; i < lengthSku; i++) {
                            setDays(response.data.SKUs[i]['pricing'])
                            setStrId(response.data.SKUs[i]['strId'])
                            retriveSkuData(response.data.SKUs[i]['strId'])
                        }

                        setImages(images);

                    }

                )
        }

    }, []);

    function retriveSkuData(id: any) {
        Service.retriveSkuData(id)
            .then(
                response => {
                    var length2 = Object.keys(response.data).length
                    for (var i = 0; i < length2; i++) {
                        if (response.data[i]['status'] != 'available') {
                            let date2: any = '';
                            if (response.data[i]['dateFrom'] != null && response.data[i]['dateTo'] != null) {
                                //get dates between date range
                                date2 = dateRange(response.data[i]['dateFrom'].split('T')[0], response.data[i]['dateTo'].split('T')[0]);
                            }
                            dateBetween.push(date2)
                        }

                    }

                    for (var i = 0; i < dateBetween.length; i++) {
                        for (var k = 0; k < dateBetween[i].length; k++) {
                            holiday.push(new Date(dateBetween[i][k]));
                        }
                    }
                }
            )

    }



    function onPrice(price: any,days : any) {
        setVisible(false);
        setPrice(price)
        setpriceDays(days)
    }


    return (
        <div>
            <Container>

                <Grid container >
                    <Grid item xs={6} spacing={2}>
                        <Carousel NextIcon={<ArrowForwardIosIcon />}// Change the "inside" of the next button to "next"
                            PrevIcon={<ArrowBackIosNewIcon />} autoPlay swipe navButtonsAlwaysVisible indicators={false} interval={2000} animation="slide">
                            {
                                images.map((item, i) => (
                                    <img
                                        src={item}
                                        loading="lazy"
                                        className="img-width"
                                    />
                                ))
                            }
                        </Carousel>
                    </Grid>
                    <Grid item xs={6} className={classes.gridBoarder}>
                        <Grid item xs={12} spacing={2}>
                            <Box pt={3}>
                                <Typography variant="h3" component="div" gutterBottom  color="primary">
                                    {title}
                                </Typography>
                                <Typography variant="body1" gutterBottom  color="secondary">
                                    {description}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} >
                            <Box pt={3}>
                                {
                                    days.map((st: { price: any; value: any; }) => (
                                        <Button onClick={() => onPrice(st.price,st.value)} variant="outlined" className={classes.button}>
                                            {st.value} days
                                        </Button>

                                    ))
                                }
                                <Typography variant="h6" component="div" gutterBottom hidden={visible} className={classes.priceColor}>
                                    Price for {priceDays} Days : A$ {price}
                                </Typography>

                            </Box>
                            <Box pt={3}>
                                <Typography variant="h6" component="div" gutterBottom >
                                    Available Dates
                                </Typography>
                                <DatePicker
                                    selected={startDate}
                                    onChange={onChange}
                                    minDate={new Date()}
                                    excludeDates={holiday}
                                    inline
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>

                            <Box pt={3}>
                                <Button disabled={true} variant="outlined" className={classes.button2} color="primary" >
                                    Rent With Rntr
                                </Button>
                                <Link to={`/`}>
                                    <Button variant="contained" className={classes.button2} color="primary">
                                        See All Products
                                    </Button>
                                </Link>

                            </Box>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Product




