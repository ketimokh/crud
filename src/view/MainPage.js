import usePage from '../component/hook/usePage';
import UpdateForm from "./UpdateForm";
import CreateForm from "./CreateForm";

const MainPage = () => {
    const hook = usePage()
    return (
        <div className= 'page-content'>
            {<CreateForm createHook={hook}/>}
            <div className='posts-wrapper '>
                {hook.aPIData.map((el) => {
                    return(
                        <div className='mt-5 d-flex justify-content-center' key={el.id} >
                            <div className='card'>
                                <div className='card-body post-wrapper'>
                                    <h5 className='card-title'>{el.title}</h5>
                                    <p className='card-text'>{ el.body}</p>
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
                                        <div className='delete-button'>
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
