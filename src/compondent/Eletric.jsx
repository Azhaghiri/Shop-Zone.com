import CustomCard from "./CustomCard";

function Eletric(){
const eletricList = [
    {
        name: 'Fan',
        alt: 'Fan',
        img: 'https://m.media-amazon.com/images/I/519y8l8EDQL._AC_UY218_.jpg',
        des: 'This is a Fan',
        url: 'https://www.amazon.in/s?k=fan',
        rate: '$10',
        dis: 'Offer -5%'
    },
    {
        name: 'Air Conditioner',
        alt: 'Air Conditioner',
        img: 'https://m.media-amazon.com/images/I/51mMG2Dm5DL._AC_UY218_.jpg',
        des: 'This is an Air Conditioner',
        url: 'https://www.amazon.in/s?k=air+conditioner+1.5+ton&crid=366SE8MBIT1Q9&sprefix=air+con%2Caps%2C640&ref=nb_sb_ss_ts-doa-p_2_7',
        rate: '$300',
        dis: 'Offer -10%'
    },
    {
        name: 'Refrigerator',
        alt: 'Refrigerator',
        img: 'https://m.media-amazon.com/images/I/51WCn0G-X6L._AC_UL320_.jpg',
        des: 'This is a Refrigerator',
        url: 'https://www.amazon.in/s?k=refrigerator+double+door+3+star&crid=15PJTTLE9P9C5&sprefix=ref%2Caps%2C951&ref=nb_sb_ss_ts-doa-p_3_3',
        rate: '$500',
        dis: 'Offer -15%'
    },
    {
        name: 'Microwave',
        alt: 'Microwave',
        img: 'https://m.media-amazon.com/images/I/71uW6iODtLL._AC_UY218_.jpg',
        des: 'This is a Microwave',
        url: 'https://www.amazon.in/s?k=microwave+for+kitchen&crid=16EAQBQYAVP7I&sprefix=micr%2Caps%2C430&ref=nb_sb_ss_ts-doa-p_1_4',
        rate: '$100',
        dis: 'Offer -8%'
    },
    {
        name: 'Washing Machine',
        alt: 'Washing Machine',
        img: 'https://m.media-amazon.com/images/I/71Nn52xi20L._AC_UY218_.jpg',
        des: 'This is a Washing Machine',
        url: 'https://www.amazon.in/s?k=washing+machine+7kg&crid=1YUZJB0D2IR06&sprefix=washing%2Caps%2C522&ref=nb_sb_ss_ts-doa-p_1_7',
        rate: '$400',
        dis: 'Offer -12%'
    },
    {
        name: 'Heater',
        alt: 'Heater',
        img: 'https://m.media-amazon.com/images/I/61TISaUYEkL._AC_UY218_.jpg',
        des: 'This is a Heater',
        url: 'https://www.amazon.in/s?k=heater+for+cooking&crid=3NG4CI179GCHD&sprefix=heater%2Caps%2C692&ref=nb_sb_ss_ts-doa-p_2_6',
        rate: '$50',
        dis: 'Offer -7%'
    },
    {
        name: 'TV',
        alt: 'TV',
        img: 'https://m.media-amazon.com/images/I/71kiuNsUdHL._AC_UY218_.jpg',
        des: 'This is a TV',
        url: 'https://www.amazon.in/s?k=tv&crid=1UJZKFFAYO7JQ&sprefix=tv%2Caps%2C743&ref=nb_sb_noss_2',
        rate: '$40',
        dis: 'Offer -10% '
    },
];

return (
    <div  className="card-container"> 
    {eletricList.map((item, index) => (
        <CustomCard
         key={index}
         {...item} />
    ))}
    </div>
)

}

export default Eletric