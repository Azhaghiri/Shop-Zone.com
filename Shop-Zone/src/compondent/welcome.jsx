
    function Welcome() {
  

        function onClick(){
            window.open("https://www.amazon.in/?&ext_vrnc=hi&tag=googinhydr1-21&ref=pd_sl_3ap1ar232k_e&adgrpid=83593948486&hvpone=&hvptwo=&hvadid=664910747463&hvpos=&hvnetw=g&hvrand=6911647159319255846&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9148784&hvtargid=kwd-307354810064&hydadcr=24607_2344257&mcid=", "_blank");      }

    return (
        <div className="welcome">
            <h1>Welcome to Shop Zone</h1>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, autem recusandae alias harum delectus quia aliquid ratione? Voluptatem aut in odio velit, quia repellat magnam veniam ex nam eius aspernatur.</p>
            <br />
            <br />
            <button onClick={onClick}>Today Offers</button>
        </div>
    );
}

export default Welcome

