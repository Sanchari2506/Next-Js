import {useRouter} from 'next/router';

function SingleDoc(){
    const router = useRouter();  
    let path = router.query.singleDoc;
    console.log(path); 
    return(
        <>
            <h1>It's the Single doc page</h1>
        </>
    )
}

export default SingleDoc;