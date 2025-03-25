function Footer(){

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
    <div className="footer">
       <div className="Addres">
        <h3>TamilNadu</h3>
        <p>ph: 6558237687</p>
        <p>Email: sunday@gmail.com</p>
        <h6>our Branch</h6>
        <p>Salem, Chennai, Bengalur</p>
        </div> 
        <div className="Detail">
            <h6>Details</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium reiciendis omnis excepturi maiores dicta incidunt nisi doloribus quia voluptatem praesentium alias, laborum possimus veniam amet consequatur voluptatum saepe? Saepe numquam explicabo vitae officiis, laborum expedita aliquam. Eveniet, id cumque.</p>
        </div>
        <div>
        <button>Feed Back</button>
        <br />
        <br />
        <button onClick={scrollToTop}>Go to Top</button>
        </div>
    </div>
    )

}

export default Footer