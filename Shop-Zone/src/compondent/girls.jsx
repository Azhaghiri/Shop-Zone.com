
import CustomCard from "./CustomCard";

const getRandomColor = () => {
    const colors = ['Blue ', 'Green ', 'Orange ','Black ','White ','yellow ','Gray ','Red '];
    return colors.sort(() => 0.5 - Math.random()).slice(0, 3);
};

const getRandomSize = () => {
    const sizes = ['S ', 'M ', 'L ', 'XL ', 'XX ', 'XXX '];
    return sizes.sort(() => 0.5 - Math.random()).slice(0, 3);
};

function Girls(){

    const girlsList = [
        {
            name: 'Saree',
            alt: 'Saree',
            img: 'https://m.media-amazon.com/images/I/51tEXYs770L._AC_SR250,250_QL65_.jpg',
            size: getRandomSize(),
            des: 'This is a Saree',
            color: getRandomColor(),
            url: 'https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0MzA5NjA0NDYyNTA5NTE1OjE3NDI3NDM5NDU6c3BfYXRmOjMwMDM0ODU0MDc4NDQzMjo6MDo6&url=%2FDHRUVI-TRENDZ-Banarasi-Cotton-DT-S1337_Black_One%2Fdp%2FB07QJV4FWL%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.t6nf2_rWle6t7a4JJcEFc8sjtj5xVkv0YdgMXHubJzJGIz-cCoDT7989UwchJgRcFd6Y34but1Mwju96imCW9F60H25U7dEdVm2hKRjr3RzJ81X_ri8XpdNvuXC2T8TbzsPvcFOoAvJ774xQHsFE7FIK2QoZsKCsvRPKo2zqgBWKi793u7l-7jS35LloewGyOiaXIMzA_4idSpxIT6O2RfMqtGQhgQxDSvuiIveghcC0lEg6-LEjAVjo54Dmg-dfQTCzzUMVhFfo9IFYOGg7XoWNzs0njcLaS5WbzvF_WAM.Wc7lew_k-dUkrASkphb4mpADamGq_fijICnC8DnZlJY%26dib_tag%3Dse%26keywords%3DSaree%26qid%3D1742743945%26s%3Dapparel%26sr%3D1-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1',
            rate: '$10',
             dis: 'Offer -10%'
        },
        {
            name: 'Top',
            alt: 'Dress',
            img: 'https://m.media-amazon.com/images/I/81a7Dd7wM0L._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a Dress',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=tops+for+women+western&i=apparel&crid=19YWBTZK6OT8I&sprefix=top%2Capparel%2C1988&ref=nb_sb_ss_ts-doa-p_1_3',
            rate: '$20',
             dis: 'Offer -10%'
        },
        {
            name: 'Skirt',
            alt: 'Skirt',
            img: 'https://m.media-amazon.com/images/I/51uhMp6TyrL._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a Skirt',
            color: getRandomColor(),
            url: 'https://m.media-amazon.com/images/I/51uhMp6TyrL._AC_UL320_.jpg',
            rate: '$15',
             dis: 'Offer -10%'
        },
        {
            name: 'Hals Saree',
            alt: 'Hals Saree',
            img: 'https://m.media-amazon.com/images/I/41TVHCJ9ucL._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a Blouse',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=half+saree&rh=n%3A1953602031&ref=nb_sb_noss',
            rate: '$12',
             dis: 'Offer -10%'
        },
        {
            name: 'Jeans',
            alt: 'Jeans',
            img: 'https://m.media-amazon.com/images/I/612+ZjkLFoL._AC_UL320_.jpg',
            size: getRandomSize(),
            des: 'This is a pair of Jeans',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=jeans+women&rh=n%3A1953602031&ref=nb_sb_noss',
            rate: '$25',
             dis: 'Offer -10%'
        },
        {
            name: 'Leggings',
            alt: 'Leggings',
            img: 'https://m.media-amazon.com/images/I/31vwoB+vKqL._AC_SR250,250_QL65_.jpg',
            size: getRandomSize(),
            des: 'These are Leggings',
            color: getRandomColor(),
            url: 'https://www.amazon.in/s?k=Leggings&rh=n%3A1953602031&ref=nb_sb_noss',
            rate: '$18',
             dis: 'Offer -10%'
        } 
    ];

    return(
        <div  className="card-container">
            {girlsList.map((item, index) => (
                <CustomCard
                    key={index}
                    {...item}
                />
            ))}
        </div>
    )
}

export default Girls