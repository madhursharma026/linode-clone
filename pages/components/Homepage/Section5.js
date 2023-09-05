import styles from '../../../styles/Homepage/Section5.module.css'

export default function Section5() {
    return (
        <div className="container-lg my-5 py-5">
            <h1 className="text-center" style={{ fontSize: 'clamp(2.5rem, -0.9rem + 8.333333vw, 3.8rem)' }}>Affordable.</h1>
            <h4 className="text-center" style={{ fontWeight: '400' }}>Cut your cloud bills in half with bundled extras like DDoS Protection, cloud firewalls, and generous transfer.</h4>
            <div class="card my-3">
                <div class="card-body text-center p-4">
                    <h2>Leading price-performance</h2>
                    <p className="fs-5">Cut your cloud infrastructure bills in half without sacrificing performance.</p>
                    <div className="row px-5 mt-4">
                        <div className="col-lg-1 col-sm-2 col-3">
                            <img src="https://www.linode.com/wp-content/uploads/2021/06/akamai-logo-rgb.svg" alt="#ImgNotFound" className="w-100" style={{ maxWidth: '100px', maxHeight: '50px' }} />
                        </div>
                        <div className="col-lg-6 col-md-5 col-sm-4 col-3">
                            <div class="progress" role="progressbar" aria-label="Basic example" style={{ height: "40px" }}>
                                <div class="progress-bar w-100" style={{ background: '#2CB35A' }}></div>
                            </div>
                        </div>
                        $36.00 / mo
                    </div>
                    <div className="row px-5 mt-4">
                        <div className="col-lg-1 col-sm-2 col-3">
                            <img src="https://www.linode.com/wp-content/uploads/2021/01/aws-logo.svg" alt="#ImgNotFound" className="w-100" style={{ maxWidth: '100px', maxHeight: '50px' }} />
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm-6 col-4">
                            <div class="progress" role="progressbar" aria-label="Basic example" style={{ height: "40px" }}>
                                <div class="progress-bar w-0"></div>
                            </div>
                        </div>
                        $62.78 / mo
                    </div>
                    <div className="row px-5 mt-4">
                        <div className="col-lg-1 col-sm-2 col-3">
                            <img src="https://www.linode.com/wp-content/uploads/2021/01/azure-logo.svg" alt="#ImgNotFound" className="w-100" style={{ maxWidth: '100px', maxHeight: '50px' }} />
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-7 col-5">
                            <div class="progress" role="progressbar" aria-label="Basic example" style={{ height: "40px" }}>
                                <div class="progress-bar w-0"></div>
                            </div>
                        </div>
                        $72.27 / mo
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={`col-lg-4 col-md-6 mt-3 ${styles.imgContainer}`}>
                    <img src="https://www.linode.com/wp-content/uploads/2022/11/test-idea-3.jpg" alt="#ImgNotFound" className={`w-100`} />
                    <div className={`${styles.imgContent} px-3 text-center`}>
                        <h1>
                            Free 100% human support
                        </h1>
                        <h5>No-handoffs, no-tiers, 24/7/365 support you can actually talk to.</h5>
                    </div>
                </div>
                <div className={`col-lg-4 col-md-6 mt-3 ${styles.imgContainer}`}>
                    <img src="https://www.linode.com/wp-content/uploads/2022/11/test-idea-3.jpg" alt="#ImgNotFound" className={`w-100`} />
                    <div className={`${styles.imgContent} px-3 text-center`}>
                        <h1>
                            Free 100% human support
                        </h1>
                        <h5>No-handoffs, no-tiers, 24/7/365 support you can actually talk to.</h5>
                    </div>
                </div>
                <div className={`col-lg-4 col-md-6 mt-3 ${styles.imgContainer}`}>
                    <img src="https://www.linode.com/wp-content/uploads/2022/11/test-idea-3.jpg" alt="#ImgNotFound" className={`w-100`} />
                    <div className={`${styles.imgContent} px-3 text-center`}>
                        <h1>
                            Free 100% human support
                        </h1>
                        <h5>No-handoffs, no-tiers, 24/7/365 support you can actually talk to.</h5>
                    </div>
                </div>
            </div>
            <div className='text-center mt-3'>
                <button type="button" class=" mt-2 btn text-white fs-5 p-2 mx-2" style={{background: '#2CB35A'}}>Compare Prices</button>
                <button type="button" class=" mt-2 btn bg-white border fs-5 p-2 mx-2">Compare Cloud Providers</button>
                <button type="button" class=" mt-2 btn bg-white border fs-5 p-2 mx-2">Cloud Pricing Calculator</button>
            <h5 className="mt-4 text-success">View our price list and free bundled services</h5>
            </div>
        </div>
    )
}
