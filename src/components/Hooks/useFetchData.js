import { useEffect, useState } from "react"

function useFetchData(url) {
    const [state,setState] = useState([])
    useEffect(()=>{
        fetch(url).then(res=> res.json()).then(data => setState(data))
    },[])

  return [state]
}

export default useFetchData