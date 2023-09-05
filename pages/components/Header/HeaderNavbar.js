import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../../../styles/Navbar/Navbar.module.css';

export default function HeaderNavbar() {
    return (
        <Navbar expand='lg' className="px-3 border-bottom fixed-top bg-white">
            <Navbar.Brand>
                <Link href='/'>
                    <img src="https://assets.linode.com/akamai-logo.svg" alt="#ImgNotFound" width='120px' />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <NavDropdown title={<b>Why Choose Us</b>} id="basic-nav-dropdown" className={`px-xl-3 px-2 ${styles.optionBeforeLGScrn}`}>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 01</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 02</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 03</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 04</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 05</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<b>Products</b>} id="basic-nav-dropdown" className={`px-xl-3 px-2 ${styles.optionBeforeLGScrn}`}>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 01</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 02</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 03</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 04</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 05</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<b>Industries</b>} id="basic-nav-dropdown" className={`px-xl-3 px-2 ${styles.optionBeforeLGScrn}`}>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 01</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 02</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 03</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 04</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 05</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<b>Marketplace</b>} id="basic-nav-dropdown" className={`px-xl-3 px-2 ${styles.optionBeforeLGScrn}`}>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 01</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 02</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 03</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 04</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 05</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<b>Pricing</b>} id="basic-nav-dropdown" className={`px-xl-3 px-2 ${styles.optionBeforeLGScrn}`}>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 01</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 02</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 03</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 04</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 05</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<b>Community</b>} id="basic-nav-dropdown" className={`px-xl-3 px-2 ${styles.optionBeforeLGScrn}`}>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 01</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 02</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 03</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 04</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link href='/' className='text-dark text-decoration-none'>Link 05</Link></NavDropdown.Item>
                </NavDropdown>
                <button type="button" className={`btn btn-success mx-3 ${styles.optionBeforeLGScrn}`}>Sign Up</button>

                <select class={`form-select mt-3 ${styles.optionAfterLGScrn}`} aria-label="Default select example">
                    <option selected>Why Choose Us</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class={`form-select mt-3 ${styles.optionAfterLGScrn}`} aria-label="Default select example">
                    <option selected>Products</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class={`form-select mt-3 ${styles.optionAfterLGScrn}`} aria-label="Default select example">
                    <option selected>Industries</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class={`form-select mt-3 ${styles.optionAfterLGScrn}`} aria-label="Default select example">
                    <option selected>Marketplace</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class={`form-select mt-3 ${styles.optionAfterLGScrn}`} aria-label="Default select example">
                    <option selected>Pricing</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class={`form-select mt-3 ${styles.optionAfterLGScrn}`} aria-label="Default select example">
                    <option selected>Community</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </Navbar.Collapse>
        </Navbar>
    );
}

