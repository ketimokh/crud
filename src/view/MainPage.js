import usePage from "../component/hook/usePage";
import UpdateForm from "./UpdateForm";

const MainPage = () => {
    const hook = usePage()
    console.log(hook.post)
    return (
        <div className= 'page-content'>
            <div className=''>
                <div className='todo-style'>
                    <div className='todo-form'>
                        <div>
                            <input
                                onChange={event => hook.setTitle(event.target.value)}
                                type='text'
                                className='title-input'
                                name='title'
                                value={hook.title}
                            >
                            </input>
                        </div>
                        <div className='mt-2'>
                            <textarea
                                onChange={event => hook.setBody(event.target.value)}
                                name='body'
                                className='body-input'
                                value={hook.body}
                            >
                            </textarea>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='bg-warning add-button'
                        onClick={() => hook.createPost(hook.title,hook.body)}
                    >
                        add content
                        </button>
                    </div>
            </div>
            <div className='flex-container '>
                {hook.aPIData.map((el) => {
                    return(
                        <div className=' overflow-hidden ' key={el.id} >
                            <div><h3 className='fs-5'>{el.title}</h3></div>
                            <div><p className=''>{ el.body}</p></div>
                            <div className='d-flex'>
                                <div>
                                    <button
                                        type='submit'
                                        className='btn bg-info mb-4'
                                        onClick={() => {
                                            hook.setPost(el)
                                        }}
                                    >
                                        edit post
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type='submit'
                                        className='btn bg-info mb-4'
                                        onClick={() => hook.deletePost(el.id)}
                                    >
                                        delete post
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {hook.post !== null ? <UpdateForm  hook={hook}/> :null}
            </div>
        </div>
    )
}


export default MainPage
