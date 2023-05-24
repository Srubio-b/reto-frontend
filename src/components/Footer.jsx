import './Footer.css'

export function Footer ({ filters }) {
    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            <h4>Reto- Frontend Engineer (SP)</h4>
            <span>Santiago Rubio</span>
            <h5>Lista de productos con filtrado y autenticación</h5>
        </footer>
    )
}