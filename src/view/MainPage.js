import usePage from "../component/hook/usePage";

const MainPage = () => {
    const { aPIData } = usePage()
    return (
        <>
            <div className='flex-container '>
                {aPIData.map((el) => {
                    return(
                        <div className=' bg-info overflow-hidden ' key={el.id} >
                            <div><h3 className='fs-5'>{el.title}</h3></div>
                            <div><p className=''>{ el.body}</p></div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default MainPage
