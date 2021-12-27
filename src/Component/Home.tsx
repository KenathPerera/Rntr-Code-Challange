import { Container, ImageList, ImageListItem } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Services/Service';
import "../Styles/Custom.css"


/* This Home component let users to See The All Products */
function Home() {
  const [image, setImage] = useState('');
  Service.retrieveAllProducts()
    .then(
      (response: { data: { [x: string]: any; }; }) => {
        setImage('https://app.getrntr.com/api/media/' + response.data.product['images'][0])
      }
    ).catch(error => {
      console.log(error.response.data.error)
   })

  return (
    <div>
      <Container>
        <ImageList >
          <ImageListItem >
            <Link to={`/view/`}>
              <img
                src={image}
                loading="lazy"
                className="img-width"
              />
            </Link>
          </ImageListItem>
          <ImageListItem >
            <Link to={`/view/`}>
              <img
                src={image}
                loading="lazy"
                className="img-width"
              />
            </Link>
          </ImageListItem>
          <ImageListItem >
            <Link to={`/view/`}>
              <img
                src={image}
                loading="lazy"
                className="img-width"
              />
            </Link>
          </ImageListItem>
          <ImageListItem >
            <Link to={`/view/`}>
              <img
                src={image}
                loading="lazy"
                className="img-width"
              />
            </Link>
          </ImageListItem>
          <ImageListItem >
            <Link to={`/view/`}>
              <img
                src={image}
                loading="lazy"
                className="img-width"
              />
            </Link>
          </ImageListItem>
          <ImageListItem >
            <Link to={`/view/`}>
              <img
                src={image}
                loading="lazy"
                className="img-width"
              />
            </Link>
          </ImageListItem>
        </ImageList>
      </Container>
    </div>
  );
}

export default Home