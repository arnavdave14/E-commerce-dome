import React from 'react'
import {DescriptionBoxbody, DescriptionBoxNavi , DescriptionBoxNavibox , DescriptionBoxNaviboxdescription} from './DescriptionBoxstyle.js'

const DescriptionBox = () => {
  return (
    <DescriptionBoxbody>
        <DescriptionBoxNavi>
            <DescriptionBoxNavibox>Description</DescriptionBoxNavibox>
            <DescriptionBoxNavibox >Review (248)</DescriptionBoxNavibox>
        </DescriptionBoxNavi>
        <DescriptionBoxNaviboxdescription>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste dolores numquam amet est a consectetur quasi doloribus inventore maxime eveniet, natus, commodi dolor. Deserunt possimus obcaecati omnis commodi rem?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste dolores numquam amet est a consectetur quasi doloribus inventore maxime eveniet, natus, commodi dolor. Deserunt possimus obcaecati omnis commodi rem?</p>
        </DescriptionBoxNaviboxdescription>
    </DescriptionBoxbody>
  )
}

export default DescriptionBox