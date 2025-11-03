'use client';
import { useState, useEffect } from 'react';

export default function Store(){
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.join())
            .then(json => setProducts(json));
    }, []);

    const filtered = products.filter(p => 
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ margin: '2em' }}>
            <h2>Store</h2>
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                    padding: '0.5em',
                    marginBottom: '1em',
                    width: '100%',
                    maxwidth: '400px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}
            />
            <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map(p => (
                        <tr key={p.id}>
                            <td>{p.title}</td>
                            <td><img src={p.image} alt={p.title} width="50"/></td>
                            <td>${p.price}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}