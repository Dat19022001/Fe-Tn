import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './style.scss'

const Banner = () => {

  const data = [
    {
      'img':'	https://theme.hstatic.net/200000549029/1000902525/14/bosuutap1_slider_image_1.jpg?v=2761',
      'title':"Áo mới",
      'subTitle':"abcd",
    },
    {
      'img':'	https://theme.hstatic.net/200000549029/1000902525/14/bosuutap1_slider_image_2.jpg?v=2761',
      'title':"Áo mới 2",
      'subTitle':"abcd",
    },
    {
      'img':'https://theme.hstatic.net/200000549029/1000902525/14/bosuutap1_slider_image_1.jpg?v=2761',
      'title':"Áo mới 2",
      'subTitle':"abcd",
    },
  ]
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true, 
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return(
    <div className="banner">
      <div className="banner__show">
        <Slider {...settings}>
          {data.map((item, index) =>(
            <div className="banner__item" key={index}>
              <a href="a"><img src={item.img} alt="ảnh dệp"/></a>
              {/* <div className="banner__content">
                <div className="banner__body">
                  <h2 className="banner__title">
                    <span>{item.title}</span>
                  </h2>
                  <h3 className="banner__subTitle">
                    <span>{item.subTitle}</span>
                  </h3>
                </div>
                <div  className="banner__btn">
                  <a href="a" className="btn">Xem Ngay</a>
                </div>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default Banner