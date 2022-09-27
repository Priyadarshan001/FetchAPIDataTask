import React from 'react'

function Home() {






  return (
    <div>
              <div className="heading">
                <center>
                  <h1>Store</h1>
                </center>
                <div>
                  <img className="cart-img" alt="Cart here" />
                </div>
              </div>
              <div>
                {data.map((item) => (
                  <div key={item.id}>
                    <div className="item">
                      <img className="image" src={item.image} alt={item.id} />
                      <div className="item_detail">
                        <div className="inner">Title: {item.title}</div>
                        <div className="inner">Price: ${item.price}</div>
                        <div className="inner">Description: {item.description}</div>
                        <div className="inner">Category: {item.category}</div>
                      </div>
                      <div>
                        <span
                          type="button"
                          onClick={() => onAdd(item)}
                          className="addcartbutton"
                          cart-item-id={item.id}
                        >
                          Add to Cart
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    </div>
      
  )
}

export default Home