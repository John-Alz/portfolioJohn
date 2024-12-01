
import Marquee from 'react-fast-marquee';
import './marqueeWrapper.css'

type Item = {
  title: string
  img: string
}

const items: Item[] = [
  {title: "Diseño Web", img: "/imgs/react.svg"},
  {title: "Desarrollo Front-End", img: "/imgs/react.svg"},
  {title: "Desarrollo Back-End", img: "/imgs/react.svg"},
  {title: "Responsive Design", img: "/imgs/react.svg"},
]

export default function MarqueeWrapper() {


  return (
    <div className='text-[100px] text-white xl:text-[160px] font-bold mt-10'>
      <Marquee speed={70} >
        {
          items.map((item, i) => {
            return (
              <div className='flex gap-12 cursor-pointer'  key={i}>
                <h2 className='item-text opacity-60'>{item.title}</h2>
                <img className='xl:translate-y-5' src={item.img} alt="icon-react" />
                <div></div>
              </div>
            )
          })
        }
      </Marquee>
    </div>
  );
}