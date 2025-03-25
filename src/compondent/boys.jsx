import CustomCard from "./CustomCard";

const getRandomColor = () => {
    const colors = ['Blue ', 'Green ', 'Orange ','Black ','White ','yellow ','Gray ','Red '];
    return colors.sort(() => 0.5 - Math.random()).slice(0, 3);
};

const getRandomSize = () => {
    const sizes = ['S ', 'M ', 'L ', 'XL ', 'XX ', 'XXX '];
    return sizes.sort(() => 0.5 - Math.random()).slice(0, 3);
};

// import Circle from './Circle';
function Boys(){

    const boysList = [
        {
            name: 'T-Shart',
            alt: 'T-Shart',
            img: 'https://m.media-amazon.com/images/I/71x4rLhMkML._SY741_.jpg',
            size: getRandomSize(),
            des: 'This is a T-Shart',
            color: getRandomColor(),
            url: 'https://www.amazon.in/T-Shirt-Plain-Shirt-Polo-18-21-Grey/dp/B0CZ498VSM/ref=asc_df_B0CZ498VSM/?gad_source=1&hvadid=709907238363&hvdev=c&hvdvcmdl&hvlocint&hvlocphy=9148784&hvnetw=g&hvpone&hvpos&hvptwo&hvqmt&hvrand=354491508767630971&hvtargid=pla-2297143364523&linkCode=df0&mcid=90153dd4983a3f798377537c09eb8e69&psc=1&tag=googleshopdes-21',
            rate: '$10'
        },
        {
            name: 'Jeans',
            alt: 'Jeans',
            img: 'https://m.media-amazon.com/images/I/616xchp1ECL._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a pair of Jeans',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=jeans+for+man&i=apparel&crid=80MJ5GCA8RXH&sprefix=je%2Capparel%2C574&ref=nb_sb_ss_ts-doa-p_1_2',
            rate: '$30'
        },
        {
            name: 'Jacket',
            alt: 'Jacket',
            img: 'https://m.media-amazon.com/images/I/617PqifhwSL._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a Jacket',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=jacket&i=apparel&crid=2QY02DSEGN84N&sprefix=jacket%2Capparel%2C601&ref=nb_sb_noss_2',
            rate: '$20'
        },
        {
            name: 'Shoes',
            alt: 'Shoes',
            img: 'https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a pair of Shoes',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=shoes&i=apparel&crid=AHWNAN5HS456&sprefix=shoes%2Capparel%2C575&ref=nb_sb_noss_2',
            rate: '$10'
        },
        {
            name: 'Cap',
            alt: 'Cap',
            img: 'https://m.media-amazon.com/images/I/41zi2pa-j3L._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a Cap',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=cap&i=apparel&crid=TEXPPJYG5VYK&sprefix=cap%2Capparel%2C2217&ref=nb_sb_noss_2',
            rate: '$40'
        },
        {
            name: 'Socks',
            alt: 'Socks',
            img:'https://m.media-amazon.com/images/I/91Pn1srtmoL._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a pair of Socks',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=socks&i=apparel&crid=4POFZOOJWMEM&sprefix=socks%2Capparel%2C552&ref=nb_sb_noss_2',
            rate: '$50'
        },
        {
            name: 'Sweater',
            alt: 'Sweater',
            img: 'https://m.media-amazon.com/images/I/41KeNECL1aL._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a Sweater',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=sweater&i=apparel&crid=1VZ1QNHTS3OUJ&sprefix=sweater%2Capparel%2C447&ref=nb_sb_noss_2',
            rate: '$30'
        },
        {
            name: 'Shorts',
            alt: 'Shorts',
            img: 'https://m.media-amazon.com/images/I/61Q2um14P+L._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a pair of Shorts',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=shorts&i=apparel&crid=22UBSUP0LCY7F&sprefix=shorts%2Capparel%2C672&ref=nb_sb_noss_2',
            rate: '$20'
        },
        {
            name: 'Scarf',
            alt: 'Scarf',
            img: 'https://m.media-amazon.com/images/I/71eDbxweKLL._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a Scarf',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=scarf+men&i=apparel&crid=24XY6ILWT1ASN&sprefix=scarf+m%2Capparel%2C750&ref=nb_sb_ss_ts-doa-p_1_7',
            rate: '$10'
        },
        {
            name: 'Belt',
            alt: 'Belt',
            img: 'https://m.media-amazon.com/images/I/71hEGHI6AnL._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a Belt',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=BELT&i=apparel&ref=nb_sb_noss',
            rate: '$50'
        },
        {
            name: 'Watch',
            alt: 'Watch',
            img: 'https://m.media-amazon.com/images/I/61CH3n9EO5L._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a Watch',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=backpack&i=apparel&crid=37303HVWGTUWJ&sprefix=backpac%2Capparel%2C607&ref=nb_sb_noss_2',
            rate: '$20'
        },
        {
            name: 'Backpack',
            alt: 'Backpack',
            img: 'https://m.media-amazon.com/images/I/61CWJx+G+xL._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a Backpack',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=backpack&i=apparel&crid=37303HVWGTUWJ&sprefix=backpac%2Capparel%2C607&ref=nb_sb_noss_2',
            rate: '$10'
        },
    ];

    return(
        <div className="card-container">
            {
                boysList.map((item,index) =>
                <CustomCard 
                key={index}
                {...item}/>
                )
            }
        </div>
    )

}

export default Boys;