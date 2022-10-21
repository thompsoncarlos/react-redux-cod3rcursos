import './ProductTable.css'
import products from "../../data/products";

export default (props) => {
    
    function getLine() {
        return products.map((product, i) => {
            return (
                <tr key={product.id} 
                    className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className="ProductTable">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price (€)</th>
                    </tr>
                </thead>
                <tbody>
                    {getLine()}
                </tbody>
            </table>
        </div>
    );
};
