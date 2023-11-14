import '../styles/Cart.css'

export const Cart = () => {
    const prix_monstera = 8;
    const prix_lierre = 10;
    const prix_fleurs = 15;
    return(
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {prix_monstera}€</li>
                <li>Lierre : {prix_lierre}€</li>
                <li>Fleurs : {prix_fleurs}€</li>
            </ul>
            Total : {prix_monstera+prix_lierre+prix_fleurs}€
        </div>
    )
}