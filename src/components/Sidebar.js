import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({setShow}) => {
  let [newPage, setNewPage] = useState()

  //set initial sidebar content
  useEffect(() => {
    setNewPage(
        <>
          <div>
            Mein Markt
          </div>
          <ul className="Alle-Kategorien" role="menu">
            <li role="none"> <h4> Alle Kategorien </h4></li>
            <CategoryList setNewPage={setNewPage} data={dummyData.subs} />
          </ul>
        </>
    )
  }, [])

  //Hide sidebar on click outside
  let ref = useRef(null)
  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])
  const handleClick = (e) => {
    if (ref && !ref.current.contains(e.target)) handleHide()
  }
  const handleHide = () => {
    document.getElementById("sidebar-wrapper").classList.add("slide-out")
    document.getElementById("background").classList.add("fade-out")
    setTimeout(() => {
      setShow(false)
    }, 300);
  }

  return(
    <div id="background" className="background">
      <div id="sidebar-wrapper" className="sidebar-wrapper" ref={ref}>
        <div className="sidebar-top">
          <img src="./logo.png" className='logo'/>
          <button className="close-sidebar-btn" aria-label="Alle Kategorien schließen" onClick={handleHide}>
            <FontAwesomeIcon icon={faXmark}/>
          </button>
      </div>
        {newPage}      
      </div>
    </div>
  )
}
export default Sidebar


const CategoryList = ({data, setNewPage, }) => {

  const getParent = (data, find) => {
    let path = []
    let result = ""
    const search = (data, find) => {
      if (Array.isArray(data)){
        data.map(item => {
          path = [...path, item]
          search(item, find)
          if (!result) path.pop() 
        })
      }else{
        if (data.name === find) result = path.at(-2)
        else if (data.subs) search(data.subs, find)
      }
    }
    search(data, find)
    return result
  }
  const nextPage = (data) => {
    let currentDataBranch = data
    let prevPage = getParent(dummyData, data.name)
    if(data.name !== "Übersicht"){
      let page =  <>
                    <div>
                      <button onClick={() => nextPage(prevPage ? prevPage : dummyData)}> {prevPage ? `Zurück zu ${prevPage.name}` : "Zurück zur Übersicht" } </button>
                    </div>
                    <ul className="Alle-Kategorien" role="menu" key={data.name} >
                      <CategoryList setNewPage={setNewPage} data={data.subs} currentDataBranch = {currentDataBranch} />
                    </ul>
                  </>
      setNewPage(page)
    }
    else{
      let page =  <>
                    <div>
                      Mein Markt
                    </div>
                    <ul className="Alle-Kategorien" role="menu">
                      <li role="none"> <h4> Alle Kategorien </h4></li>
                      <CategoryList setNewPage={setNewPage} data={dummyData.subs} />
                    </ul>
                  </>
    setNewPage(page)
    }
  }
  
  if (data){
    return(
      <>
        {
          data.map(item => {
          if (!item.subs){
            return <li key={item.name} > {item.name} </li>
          }
          return(
            <li>
              <button onClick={e => nextPage(item, e)} key={item.name} >
                <span> {item.name} </span>
                <FontAwesomeIcon icon={faAngleRight}/>
              </button>
            </li>
          )
        })}
      </>
    )
  }
}

const dummyData = {
  name: "Übersicht",
  subs: [
  {
    name: "1",
    subs: [
      {
        name:"2"
      },
      {
        name:"2w",
        subs: [
          {
            name: "3"
          },
          {
            name: "3a"
          },
          {
            name: "3w",
            subs: [
              {
                name: "4w",
                subs: [
                  {
                    name: "5"
                  }
                ]
              },
              {
                name: "4"
              }
            ]
          }
        ]
      }
    ]
  },
   {
     name: "Angebote & Aktionen",
     subs: [
       {
         name: "Zu Angebote & Aktionen"
       },
       {
         name: "Unser Service",
         subs: [
           {
             name: "Zu Unser Service"
           },
           {
             name: "Miet mich!"
           },
           {
             name: "Fotoservice"
           },
           {
             name: "Aktuelle Gewinnspiele"
           },
           {
             name: "0% Finanzierung"
           },
         ]
       }
     ]
   },
   {
     name: "Computer & Büro",
     subs: [
       {
         name: "Zu Computer & Büro"
       },
       {
         name: "Notebooks & Zubehör",
         subs: [
           {
             name: "Zu Notebooks & Zubehör"
           },
           {
             name: "Notebooks"
           },
           {
             name: "2in1 Convertibles"
           },
           {
             name: "Ultrabooks"
           }
         ]
       },
       {
         name: "Notebook Kaufberatung"
       },
       {
         name: "Mac Konfigurator"
       },
     ]
   }
  
]}