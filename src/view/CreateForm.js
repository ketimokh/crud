const CreateForm = (props) => {
    return (
        <div className=''>
            <div className='todo-style'>
                <div className='todo-form'>
                    <div>
                        <input
                            onChange={event => props.createHook.setTitle(event.target.value)}
                            type='text'
                            className='title-input'
                            name='title'
                            value={props.createHook.title}
                        >
                        </input>
                    </div>
                    <div className='mt-2'>
                            <textarea
                                onChange={event => props.createHook.setBody(event.target.value)}
                                name='body'
                                className='body-input'
                                value={props.createHook.body}
                            >
                            </textarea>
                    </div>
                </div>
                <button
                    type='submit'
                    className='bg-warning add-button'
                    onClick={() => props.createHook.createPost(props.createHook.title,props.createHook.body)}
                >
                    add content
                </button>
            </div>
        </div>
    )
}


export default CreateForm
