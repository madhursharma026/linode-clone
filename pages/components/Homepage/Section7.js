import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1.25 },
    { width: 500, itemsToShow: 2.25 },
    { width: 768, itemsToShow: 3.25, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 4.25, itemsToScroll: 2 },
    { width: 1400, itemsToShow: 5, itemsToScroll: 2 },
];

export default function Section7() {
    return (
        <div className="px-3 py-5">
            <h1 className="text-center" style={{ fontSize: 'clamp(2.5rem, -0.9rem + 8.333333vw, 3.8rem)' }}>Trusted.</h1>
            <Carousel breakPoints={breakPoints} className="px-5 py-5">
                <div className="mx-2 text-center">
                    <img src="https://www.linode.com/wp-content/uploads/2023/02/hero-forge-craft-of-code-632x279.jpg" className='w-100 h-100' style={{ borderRadius: '15px', }} />
                </div>
                <div className="mx-2 text-center">
                    <img src="https://www.linode.com/wp-content/uploads/2022/11/jonathan-oliver-smarty-2-632x279.jpg" alt="#ImgNotFound" className='w-100 h-100' style={{ borderRadius: '15px', }} />
                </div>
                <div className="mx-2 text-center">
                    <img src="https://www.linode.com/wp-content/uploads/2022/08/codepath-header-632x279.jpg" alt="#ImgNotFound" className='w-100 h-100' style={{ borderRadius: '15px', }} />
                </div>
                <div className="mx-2 text-center">
                    <img src="https://www.linode.com/wp-content/uploads/2021/01/sheryl-villaroman-smaller-632x279.jpg" alt="#ImgNotFound" className='w-100 h-100' style={{ borderRadius: '15px', }} />
                </div>
                <div className="mx-2 text-center">
                    <img src="https://www.linode.com/wp-content/uploads/2020/12/brian-data-machines-background-MIN.jpg" alt="#ImgNotFound" className='w-100 h-100' style={{ borderRadius: '15px', }} />
                </div>
            </Carousel>
        </div>
    )
}
