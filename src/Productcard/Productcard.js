function Productcard(props) {
    var prod = props.product;
    return ( 
        <div>
            <div>
                <img src={prod.images} height={200}/>
            </div>
          <div>{prod.id}</div>
          <div>{prod.title}</div>
          <div>{prod.price}</div>
          <div>{prod.discountPercentage}</div>
          <div>{prod.rating}</div>
          <div>{prod.stock}</div>
            <div>{prod.brand}</div>
            <div>{prod.category}</div>
            <div>{prod.thumbnail}</div>
        </div>
     );
}

export default Productcard;