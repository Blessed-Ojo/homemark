import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "./silder.scss";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../lib/swiper/Swiper";
const Silder = () => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={9}
      slidesPerView={3}
      pagination={{clickable: true }}
      onSwiper={(Swiper) => console.log(Swiper)}
      onSlideChange={() => console.log("slide change")}
      className="Swiper"
    >
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="Silder">
            <span>
            <img src={item.img} />
            </span>
            <h3>{item.title}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Silder;
