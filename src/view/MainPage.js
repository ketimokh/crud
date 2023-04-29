import usePage from '../component/hook/usePage';
import UpdateForm from "./UpdateForm";
import CreateForm from "./CreateForm";
import logo from '../image/crud.jpeg'

const MainPage = () => {
    const hook = usePage()
    return (
        <div className='page-content'>
            <img className= 'm-lg-5' src={logo} alt='crud' width='90%' />
            {<CreateForm createHook={hook}/>}
            <div className='row d-flex p-4'>
                {hook.aPIData.map((el) => {
                    return(
                        <div className='col-md-6 mb-4 justify-content-center' key={el.id} >
                            <div className='card' style={{height: 300}}>
                                <div className='card-body post-wrapper'>
                                    <h5 className='card-title'>{el.title}</h5>
                                    <p className='card-text'>{ el.body}</p>
                                    <div className='d-flex'>
                                        <div className='align-items-end'>
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
                                        <div className='delete-button align-items-end'>
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
