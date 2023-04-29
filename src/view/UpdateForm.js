import {useEffect} from "react";
import ReactDom from "react-dom";

const UpdateForm = (props) => {
    // useEffect(() => {
    //     const outsideClick = e => {
    //         if (!e.target.closest('#global-modal-id')) props.hook.setPost(null)
    //     }
    //     document.body.addEventListener('click', outsideClick)
    //     return () => {
    //         document.body.removeEventListener('click', outsideClick)
    //     }
    // }, [])
    return ReactDom.createPortal(
       <>
           <div className='modal fade show ' style={{display: 'block'}}>
               <div className='modal-dialog '>
                   <div className='modal-content'>
                       <div className='modal-header'>
                           <h5 className='modal-title'>{props.title}</h5>
                           <input
                               onChange={event => props.hook.setPost(pre => ({...pre, title: event.target.value}))}
                               type='text'
                               className='title-input'
                               name='title'
                               value={props.hook.post.title}
                           >
                           </input>
                           <button type='button' className='btn-close' onClick={()=> props.hook.setPost(null)}></button>
                       </div>
                       <div className='modal-body'>
                        <textarea
                            onChange={event => props.hook.setPost(pre => ({...pre, body: event.target.value}))}
                            name='body'
                            className='body-input'
                            value={props.hook.post.body}
                        >
                            </textarea>
                       </div>
                       <div className='modal-footer'>
                           <button
                               type='button'
                               className='btn btn-secondary'
                               onClick={()=> props.hook.setPost(null)}
                           >Close
                           </button>
                           <button
                               type='button'
                               className='btn btn-primary'
                               onClick={() => props.hook.updatePost()}
                           >Save changes
                           </button>
                       </div>
                   </div>
               </div>
           </div>
           <div className="modal-backdrop fade show"></div>
       </>,
        document.body
    )

}

export default UpdateForm
