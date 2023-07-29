import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    // paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} )`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 2)`,

  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 600,
    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },


  image: {
    width: "62vw",
    height: "100%",
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

}));

export default function Hero(img) {
  const { classes } = useStyles();
  return (
    <div>
      <div className={classes.inner}>
        <img src="https://onea.qodeinteractive.com/wp-content/uploads/2018/09/furniture-h-slider-1.jpg" className={classes.image} />
        <div className={classes.content}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ display: "flex", justifyContent: "flex-start", fontFamily: "monospace", fontWeight: "500", position: "relative", right: "4rem", top: "6rem", fontSize: "20px" }}>
              NEW COLLECTION
            </h1>
            <h1 style={{ display: "flex", justifyContent: "flex-start", fontFamily: "sans-serif", fontWeight: "800", position: "relative", right: "4rem", top: "3rem", fontSize: "50px", width: "35vw" }}>
              BEST SELLING PRODUCTS
            </h1>
            <h4 style={{ color: "grey", marginLeft: "15px", fontWeight: "500", fontFamily: "sans-serif" }}>
              We believe that your home should be a sanctuary of style, functionality, and relaxation. Our mission is to provide you with an unparalleled selection of modern furniture that not only adds a touch of elegance to your living spaces but also ensures utmost comfort.
            </h4>
          </div>
        </div>
      </div>

      <div className={classes.inner}>
        <div className={classes.content}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src="https://bidsanddibs.com/wp-content/uploads/2018/10/furniture-h-img-1.jpg" alt="Blue armchair" />
            <h2 style={{ display: "flex", justifyContent: "center", position: "relative", bottom: "7rem", fontFamily: "sans-serif" }}>Blue armchair</h2>
          </div>
        </div>
        <div>
          <img src="https://onea.qodeinteractive.com/wp-content/uploads/2018/09/h-4-img-2.jpg" className={classes.image} />
          <h1 style={{ display: "flex", justifyContent: "center", position: "relative", bottom: "12rem", fontFamily: "sans-serif", color: "white", fontSize: "2.5rem" }}>Modern Design</h1>
        </div>
      </div>


      <div className={classes.inner}>
        <div>
        <img src="https://onea.qodeinteractive.com/wp-content/uploads/2018/09/h-4-img-3-768x514.jpg" className={classes.image} />
        <h1 style={{ display: "flex", justifyContent: "flex-end",color:"white" , position: "relative", bottom: "15rem",right:"4rem", fontSize: "2.5rem"}}>Wooden Magic</h1>
        </div>
        <div className={classes.content}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src="https://onea.qodeinteractive.com/wp-content/uploads/2018/10/furniture-h-img-2.jpg"/>
            <h2 style={{ display: "flex", justifyContent: "center", position: "relative", bottom: "7rem", fontFamily: "sans-serif" }}>Wing chair</h2>
          </div>
        </div>
      </div>

    </div>




  );
}

