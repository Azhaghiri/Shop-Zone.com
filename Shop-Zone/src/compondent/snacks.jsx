import CustomCard from "./CustomCard";

function Snacks(){
    const snacksList = [
        {
            name: 'Ladu',
            alt: 'Ladu',
            img: 'https://m.media-amazon.com/images/I/61djD6XC-AL._AC_UL320_.jpg',
            des: 'These are Ladu',
            url: 'https://www.amazon.in/s?k=ladu&crid=2SMBYOMUVHKU2&sprefix=lad%2Caps%2C1061&ref=nb_sb_noss_2',
            rate: '$18',
            dis: 'Offer -10%'
        },
        {
            name: 'Samosa',
            alt: 'Samosa',
            img: 'https://m.media-amazon.com/images/I/51bOkP+1RJL._AC_UL320_.jpg',
            des: 'These are Samosas',
            url: 'https://www.amazon.in/s?k=samosa&crid=37FO31MMN98SX&sprefix=samosa%2Caps%2C911&ref=nb_sb_noss_1',
            rate: '$15',
            dis: 'Offer -5%'
        },
        {
            name: 'Kachori',
            alt: 'Kachori',
            img: 'https://m.media-amazon.com/images/I/71iVhGIIyjL._AC_UL320_.jpg',
            des: 'These are Kachoris',
            url: 'https://www.amazon.in/s?k=Kachori&crid=3IOFZO6NOCI48&sprefix=kachori%2Caps%2C511&ref=nb_sb_noss_1',
            rate: '$20',
            dis: 'Offer -8%'
        },
        {
            name: 'Jalebi',
            alt: 'Jalebi',
            img: 'https://m.media-amazon.com/images/I/81sO0T9bpTS._AC_UL320_.jpg',
            des: 'These are Jalebis',
            url: 'https://www.amazon.in/s?k=jalebi&crid=3S4DG9NR77NWA&sprefix=jalebi%2Caps%2C316&ref=nb_sb_noss_1',
            rate: '$12',
            dis: 'Offer -12%'
        },
        {
            name: 'Pakora',
            alt: 'Pakora',
            img: 'https://m.media-amazon.com/images/I/71tod+43-9L._AC_UL320_.jpg',
            des: 'These are Pakoras',
            url: 'https://www.amazon.in/s?k=pakoda&crid=UOE37INPBCSU&sprefix=pakoda%2Caps%2C1058&ref=nb_sb_noss_1',
            rate: '$10',
            dis: 'Offer -7%'
        },
        {
            name: 'Dhokla',
            alt: 'Dhokla',
            img: 'https://m.media-amazon.com/images/I/61mnGmulO7L._AC_UL320_.jpg',
            des: 'These are Dhoklas',
            url: 'https://www.amazon.in/s?k=dhokla&crid=2OWSIDHYFXA94&sprefix=dhok%2Caps%2C477&ref=nb_sb_noss_2',
            rate: '$14',
            dis: 'Offer -6%'
        },
        {
            name: 'Chakli',
            alt: 'Chakli',
            img: 'https://m.media-amazon.com/images/I/51qdER2B5-L._AC_SR250,250_QL65_.jpg',
            des: 'These are Chaklis',
            url: 'https://www.amazon.in/s?k=chakli&crid=1GNALOMI1D7X0&sprefix=chakli%2Caps%2C443&ref=nb_sb_noss_1',
            rate: '$16',
            dis: 'Offer -9%'
        },
        {
            name: 'Pani Puri',
            alt: 'Pani Puri',
            img: 'https://m.media-amazon.com/images/I/71aSoTIQyVL._AC_UL320_.jpg',
            des: 'These are Pani Puris',
            url: 'https://www.amazon.in/s?k=pani+puri&crid=GIXDY7XT2BLI&sprefix=pani%2Caps%2C752&ref=nb_sb_ss_ts-doa-p_1_4',
            rate: '$8',
            dis: 'Offer -15%'
        },
    ]

    return(
        <div  className="card-container">
           {snacksList.map((item,index) =>(
           <CustomCard key={index} {...item} />
           ))}
        </div>
    )
}

export default Snacks