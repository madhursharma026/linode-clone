import styles from '../../../styles/Homepage/Section6.module.css'

export default function Section6() {
    return (
        <div style={{ background: '#F2F2F7' }}>
            <div className="py-5 px-3">
                <div className="container-lg py-5">
                    <h1 className="text-center" style={{ fontSize: 'clamp(2.5rem, -0.9rem + 8.333333vw, 3.8rem)' }}>Accessible.</h1>
                    <h4 className="text-center" style={{ fontWeight: '400' }}>The control, automation, and cloud architectures you need to build and scale faster.</h4>
                    <div className="row mt-3">
                        <div className={`col-md-6 col-12 mt-3 ${styles.imgContainer}`}>
                            <img src="https://www.linode.com/wp-content/uploads/2022/11/api-1-632x328.jpg" alt="#ImgNotFound" className="w-100" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} />
                            <div className={`p-3 ${styles.imgContent}`}>
                                <h2>API</h2>
                                <p>Configure, manage, and deploy user management, billing, support tickets, and more.</p>
                            </div>
                        </div>
                        <div className={`col-md-6 col-12 mt-3 ${styles.imgContainer}`}>
                            <img src="https://www.linode.com/wp-content/uploads/2022/11/cli-2-632x328.jpg" alt="#ImgNotFound" className="w-100" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} />
                            <div className={`p-3 ${styles.imgContent}`}>
                                <h2>API</h2>
                                <p>Configure, manage, and deploy user management, billing, support tickets, and more.</p>
                            </div>
                        </div>
                        <div className={`col-md-6 col-12 mt-3 ${styles.imgContainer}`}>
                            <img src="https://www.linode.com/wp-content/uploads/2022/11/iac-2-632x328.jpg" alt="#ImgNotFound" className="w-100" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} />
                            <div className={`p-3 ${styles.imgContent}`}>
                                <h2>API</h2>
                                <p>Configure, manage, and deploy user management, billing, support tickets, and more.</p>
                            </div>
                        </div>
                        <div className={`col-md-6 col-12 mt-3 ${styles.imgContainer}`}>
                            <img src="https://www.linode.com/wp-content/uploads/2022/11/ref-1-632x328.jpg" alt="#ImgNotFound" className="w-100" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} />
                            <div className={`p-3 ${styles.imgContent}`}>
                                <h2>API</h2>
                                <p>Configure, manage, and deploy user management, billing, support tickets, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
