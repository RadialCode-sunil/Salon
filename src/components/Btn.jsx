import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

const Btn = (props) => {
  return (
    <div>  <a href="#" id={props.btn_id} className=' ff_Poppins fw_700 fs_md black button d-inline-block'>
      {props.any_text}
    </a>
    </div>
  )
}
// Btn.prototype = {
//   title: propTypes.string.isRequired,
// }

// Btn.defaultProps = {
//   title: "Button",
// };
export default Btn