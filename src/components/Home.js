import React from 'react'

function Home(props) {
    console.warn("props",props)
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                <img src="https://www.transparentpng.com/thumb/mobile/samsung-mobile-free-download-transparent-4.png" alt="samsung mobile free download transparent @transparentpng.com" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Samsung Galaxy
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button className='add-btn'
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                        <button className='remove-btn'
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home