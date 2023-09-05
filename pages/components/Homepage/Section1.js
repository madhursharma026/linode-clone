import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1.25 },
    { width: 500, itemsToShow: 2.25 },
    { width: 768, itemsToShow: 3.25, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 4.25, itemsToScroll: 2 },
    { width: 1400, itemsToShow: 5, itemsToScroll: 2 },
];

export default function Section1() {
    return (
        <div className="px-3 pt-lg-5">
            <div className="container-lg">
                <div className="row pt-lg-5">
                    <div className="col-lg-7 mt-3">
                        <h1 style={{ fontSize: 'clamp(2.5rem, -0.9rem + 8.333333vw, 3.8rem)' }}>Cloud Computing Services Developers Trust</h1>
                        <h4 style={{ fontWeight: '400' }}>Build, run, and secure your cloud workloads on Akamai Connected Cloud, a massively distributed edge and cloud platform. Sign up today or contact us to learn more.</h4>
                    </div>
                    <div className="col-lg-5 px-5 mt-3">
                        <div class="card w-100" style={{ boxShadow: '0 10px 10px 15px rgba(0, 0, 0, 0.03)', border: 'none' }}>
                            <div class="card-body p-xl-5 p-3">
                                <button type="button" class="btn text-white w-100 p-2" style={{ background: '#02b159', fontWeight: '500', fontSize: '20px' }}><i class="fa fa-google"></i> Sign Up With Google</button>
                                <hr />
                                <button type="button" class="btn text-muted w-100 p-2" style={{ background: '#EDEDF4', fontWeight: '500', fontSize: '20px' }}><i class="fa fa-github"></i> Github</button>
                                <button type="button" class="btn mt-3 text-muted w-100 p-2" style={{ background: '#EDEDF4', fontWeight: '500', fontSize: '20px' }}><i class="fa fa-envelope"></i> Email</button>
                                <p className="text-center mt-3" style={{ fontSize: '14px' }}>By providing your email address or using a single sign-on provider to create an account, you agree to our Terms of Service and that you have reviewed our Privacy Policy and Cookie Policy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel breakPoints={breakPoints} className="px-5 mt-5 pt-5">
                <div className="mx-2 text-center">
                    <img src="https://www.linode.com/wp-content/uploads/2023/06/mostTrustedCardv1-Sum23-632x355.jpg" alt="#ImgNotFound" className='w-100 h-100' style={{ borderRadius: '15px' }} />
                </div>
                <div className="mx-2 text-center">
                    <img src="https://www.linode.com/wp-content/uploads/2023/07/jul23Announcement-HomepageSlider-632x372-50.jpg" alt="#ImgNotFound" className='w-100 h-100' style={{ borderRadius: '15px' }} />
                </div>
                <div className="mx-2 text-center">
                    <img src="https://www.linode.com/wp-content/uploads/2022/11/computeCardv1-632x355.jpg" alt="#ImgNotFound" className='w-100 h-100' style={{ borderRadius: '15px' }} />
                </div>
                <div className="mx-2 text-center">
                    <img src="https://www.linode.com/wp-content/uploads/2022/11/securityCardv1-632x355.jpg" alt="#ImgNotFound" className='w-100 h-100' style={{ borderRadius: '15px' }} />
                </div>
                <div className="mx-2 text-center">
                    <img src="https://www.linode.com/wp-content/uploads/2022/11/deliveryCardv2-632x355.jpg" alt="#ImgNotFound" className='w-100 h-100' style={{ borderRadius: '15px' }} />
                </div>
            </Carousel>

            <h4 className="text-center text-success mt-4">Trusted by developers since 2003. Get an overview.</h4>
        </div>
    )
}

