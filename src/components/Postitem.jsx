import React from "react";
import MyButton from "./UI/button/MyButtons";

const Postitem = (props) => {
    console.log(props)
    return (
    <div className='App'>
      <div className='post'>
        <div className='post_content'>
            <strong>{props.number}.{props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className='post_btns'>
          <MyButton onClick={()=> props.remove(props.post)}>Удалить</MyButton>
        </div>
      </div>
    </div>
    )
}

export default Postitem;