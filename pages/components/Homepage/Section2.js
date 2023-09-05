
export default function Section2() {
    return (
        <div className="px-3 my-5 pb-5" style={{ background: '#32363B' }}>
            <div className="container-lg">
                <div className="row text-white">
                    <div className="col-lg-4 mt-5">
                        <h4>FEATURED</h4>
                        <div class="card text-white mt-3 me-3" style={{ boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.15)', background: '#3B3F44' }}>
                            <div class="card-body row">
                                <div className="col-6">
                                    <img src="https://www.linode.com/wp-content/uploads/2023/06/roadToKube-Blog-NoText-632x332.jpg" alt="#ImgNotFound" className="w-100" />
                                </div>
                                <div className="col-6">
                                    <h6>Free Manning Ebook: Road to Kubernetes</h6>
                                </div>
                            </div>
                        </div>
                        <div class="card text-white mt-3 me-3" style={{ boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.15)', background: '#3B3F44' }}>
                            <div class="card-body row">
                                <div className="col-6">
                                    <img src="https://www.linode.com/wp-content/uploads/2023/06/MRK-4404-Portability-i632x372-px-1.jpg" alt="#ImgNotFound" className="w-100" />
                                </div>
                                <div className="col-6">
                                    <h6>Portability in the Cloud: Best Practices for Building SaaS-Based Applications</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <h4>LATEST BLOG POSTS</h4>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <h4>NEW ON LINODE.COM</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

