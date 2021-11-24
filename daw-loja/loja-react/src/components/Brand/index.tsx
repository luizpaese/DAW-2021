import imgBrand1 from '../../assets/images/brand1.png'
import imgBrand2 from '../../assets/images/brand2.png'
import imgBrand3 from '../../assets/images/brand3.png'
import imgBrand4 from '../../assets/images/brand4.png'
import imgBrand5 from '../../assets/images/brand5.png'

import './style.css';
import { Brand } from '../../@types'

type BrandProps = {
  items: Array<Brand>;
}

export function Brands(props: BrandProps) {
    return(
        <div className="brands">
            <ul>
              {props.items.map(item => {
                return(
                  <li><img src={item.source} alt={item.alt}/></li>
                )
              })}
            </ul>
          </div>
    )
}