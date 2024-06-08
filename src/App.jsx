import { useEffect, useState } from "react"


function App() {
  const [count, setcount] = useState([])

  useEffect(()=>{
    
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setcount(json))

  }, [])    
  return (
    <>
      <div className="allcards flex flex-wrap gap-10">
        {
          count.map((item)=>{
            return(
            <div className="singleUser w-[360px] h-[400px] bg-[#E80F88] rounded-[20px] p-5 flex items-center flex-col gap-5">
              <div className="imageCol w-[200px] h-[200px] rounded-full overflow-hidden">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_AK6nCYnJQ-uiSckoOMz8BJ5FKmHjWLnqA&s" alt="profile image" />
              </div>
              <div className="userText">
                <p className="text-xl font-semibold font-poppins">ID : {item.id}</p>
                <h1 className="text-19px font-bold font-poppins">Name : {item.name}</h1>
                <p className="text-15px font-semibold font-poppins">Email : {item.email}</p>
              </div>
            </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
