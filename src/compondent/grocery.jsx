import CustomCard from "./CustomCard";

function Grocery(){
    const groceryList=[
        {
            name: 'Rice',
            alt: 'Rice',
            img: 'https://m.media-amazon.com/images/I/71c62J5botL._AC_UL320_.jpg',
            des: 'These are Rice',
            url: 'https://www.amazon.in/s?k=rice&ref=nb_sb_noss',
            rate: '$18',
             dis: 'Offer -10%'
        },
        {
            name: 'Weet',
            alt: 'Weet',
            img: 'https://m.media-amazon.com/images/I/81syXzfKUTL._AC_SR180,120_QL70_.jpg',
            des: 'These are Weet',
            url: 'https://www.amazon.in/s?k=weet&crid=OC8MUR964Q0P&sprefix=weet%2Caps%2C364&ref=nb_sb_noss_1',
            rate: '$18',
             dis: 'Offer -10%'
        },
        {
            name: 'Moondal',
            alt: 'Moondal',
            img: 'https://m.media-amazon.com/images/I/61CRx5rpLbL._AC_UL320_.jpg',
            des: 'These are Moondal',
            url: 'https://www.amazon.in/s?k=moondal&crid=2ZRP8VSGGG7W4&sprefix=mondal%2Caps%2C557&ref=nb_sb_noss_1',
            rate: '$18',
             dis: 'Offer -10%'
        },
        {
            name: 'Salt',
            alt: 'Salt',
            img: 'https://m.media-amazon.com/images/I/61AZt0aOGoL._AC_UL320_.jpg',
            des: 'These are Salt',
            url: 'https://www.amazon.in/s?k=salt&crid=2TZD1HZN4GUA0&sprefix=salt%2Caps%2C535&ref=nb_sb_noss_2',
            rate: '$18',
             dis: 'Offer -10%'
        },
        {
            name: 'Sugar',
            alt: 'Sugar',
            img: 'https://m.media-amazon.com/images/I/71a0aaWvTLL._AC_UL320_.jpg',
            des: 'These are Sugar',
            url: 'https://www.amazon.in/s?k=sugar&crid=1NSCSJ7XQQ5K8&sprefix=su%2Caps%2C1004&ref=nb_sb_noss_2',
            rate: '$18',
             dis: 'Offer -10%'
        },
        {
            name: 'Gee',
            alt: 'Gee',
            img: 'https://m.media-amazon.com/images/I/71pYpkxrg4L._AC_UL320_.jpg',
            des: 'These are Gee',
            url: 'https://www.amazon.in/s?k=gee&crid=3G3I098Q8LITP&sprefix=ge%2Caps%2C300&ref=nb_sb_noss_2',
            rate: '$18',
             dis: 'Offer -10%'
        },
        {
            name: 'Oil',
            alt: 'Oil',
            img: 'https://m.media-amazon.com/images/I/713wdAUh8dL._AC_SR115,105_QL70_.jpg',
            des: 'These are Oil',
            url: 'https://www.amazon.in/s?k=oil&ref=nb_sb_noss',
            rate: '$18',
             dis: 'Offer -10%'
        },
        {
            name: 'Boost',
            alt: 'Boost',
            img: 'https://m.media-amazon.com/images/I/41lnHSjGM5L._AC_SR250,250_QL65_.jpg',
            des: 'These are Boost',
            url: 'https://www.amazon.in/s?k=boost&crid=1PJ0BZRSFK07I&sprefix=boost%2Caps%2C1530&ref=nb_sb_noss_2',
            rate: '$18',
             dis: 'Offer -10%'
        },
    ]

    return(
         <div className="card-container">
                    {
                        groceryList.map((item,index) =>
                        <CustomCard 
                        key={index}
                        {...item}/>
                        )
                    }
                </div>
    )
}

export default Grocery;