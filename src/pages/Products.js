import { Link } from "react-router-dom";

const Products = () => {
    return ( 
        <section>
            <h1>The Products page here</h1>
            <ul>
                <li><Link to="/products/A Book">A Book</Link></li>
                <li><Link to="/products/A Carpet">A Carpet</Link></li>
                <li><Link to="/products/An Online course">An Online course</Link></li>
            </ul>
        </section>
    )
};

export default Products;