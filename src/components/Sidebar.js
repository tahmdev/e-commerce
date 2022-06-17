import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ setShow, setShowMeinMarkt }) => {
  let [newPage, setNewPage] = useState();
  let ref = useRef(null);

  //set initial sidebar content
  useEffect(() => {
    setNewPage(
      <>
        <ul className="Alle-Kategorien" role="menu">
          <li className="mein-markt small-only">
            <button
              onClick={() => {
                setShowMeinMarkt(true);
                handleHide();
              }}
            >
              Mein Markt
            </button>
          </li>
          <li role="none">
            <h4> Alle Kategorien </h4>
          </li>
          <CategoryList
            setNewPage={setNewPage}
            data={dummyData.subs}
            setShowMeinMarkt={setShowMeinMarkt}
            handleHide={handleHide}
          />
        </ul>
      </>
    );
  }, []);

  useEffect(() => {
    //Focus on close button for screen-readers
    document.getElementById("close-sidebar-btn").focus();
    //Hide sidebar on click outside
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (document.getElementById("back-btn"))
      document.getElementById("back-btn").focus();
  }, [newPage]);

  const handleClick = (e) => {
    if (ref && !ref.current.contains(e.target)) handleHide();
  };

  const handleHide = () => {
    document.getElementById("sidebar-wrapper").classList.add("slide-out");
    document.getElementById("background").classList.add("fade-out");
    setTimeout(() => {
      setShow(false);
    }, 300);
  };

  return (
    <div id="background" className="background">
      <div id="sidebar-wrapper" className="sidebar-wrapper" ref={ref}>
        <div className="sidebar-top">
          <img src="./logo.png" className="logo" />
          <button
            id="close-sidebar-btn"
            className="close-sidebar-btn"
            aria-label="Alle Kategorien schließen"
            onClick={handleHide}
            autofocus
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        {newPage}
      </div>
    </div>
  );
};
export default Sidebar;

const CategoryList = ({ data, setNewPage, setShowMeinMarkt, handleHide }) => {
  const getParent = (data, find) => {
    let path = [];
    let result = "";
    const search = (data, find) => {
      if (Array.isArray(data)) {
        data.map((item) => {
          path = [...path, item];
          search(item, find);
          if (!result) path.pop();
        });
      } else {
        if (data.name === find) result = path.at(-2);
        else if (data.subs) search(data.subs, find);
      }
    };
    search(data, find);
    return result;
  };
  const nextPage = (data) => {
    let prevPage = getParent(dummyData, data.name);
    if (data.name !== "Übersicht") {
      let page = (
        <>
          <ul className="Alle-Kategorien" role="menu" key={data.name}>
            <li>
              <button
                id="back-btn"
                className="sidebar-back-button"
                onClick={() => nextPage(prevPage ? prevPage : dummyData)}
              >
                {prevPage
                  ? `Zurück zu ${prevPage.name}`
                  : "Zurück zur Übersicht"}
              </button>
            </li>
            <CategoryList
              setNewPage={setNewPage}
              data={data.subs}
              setShowMeinMarkt={setShowMeinMarkt}
              handleHide={handleHide}
            />
          </ul>
        </>
      );
      setNewPage(page);
    } else {
      let page = (
        <>
          <ul className="Alle-Kategorien" role="menu">
            <li className="mein-markt small-only">
              <button
                onClick={() => {
                  setShowMeinMarkt(true);
                  handleHide();
                }}
              >
                Mein Markt
              </button>
            </li>
            <li role="none">
              <h4> Alle Kategorien </h4>
            </li>
            <CategoryList
              setNewPage={setNewPage}
              data={dummyData.subs}
              setShowMeinMarkt={setShowMeinMarkt}
              handleHide={handleHide}
            />
          </ul>
        </>
      );
      setNewPage(page);
    }
  };

  return (
    <>
      {data.map((item) => {
        if (!item.subs) {
          return (
            <li key={item.name} className="final-li" role="none">
              <a href="https://tahmdev.github.io/e-commerce/" role="menuitem">
                {item.name}
              </a>
            </li>
          );
        }
        return (
          <li>
            <button
              aria-expanded="false"
              onClick={(e) => nextPage(item, e)}
              key={item.name}
            >
              <span> {item.name} </span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </li>
        );
      })}
    </>
  );
};

const dummyData = {
  name: "Übersicht",
  subs: [
    {
      name: "1",
      subs: [
        {
          name: "2",
        },
        {
          name: "2w",
          subs: [
            {
              name: "3",
            },
            {
              name: "3a",
            },
            {
              name: "3w",
              subs: [
                {
                  name: "4w",
                  subs: [
                    {
                      name: "5",
                    },
                  ],
                },
                {
                  name: "4",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Angebote & Aktionen",
      subs: [
        {
          name: "Zu Angebote & Aktionen",
        },
        {
          name: "Unser Service",
          subs: [
            {
              name: "Zu Unser Service",
            },
            {
              name: "Miet mich!",
            },
            {
              name: "Fotoservice",
            },
            {
              name: "Aktuelle Gewinnspiele",
            },
            {
              name: "0% Finanzierung",
            },
          ],
        },
      ],
    },
    {
      name: "Computer & Büro",
      subs: [
        {
          name: "Zu Computer & Büro",
        },
        {
          name: "Notebooks & Zubehör",
          subs: [
            {
              name: "Zu Notebooks & Zubehör",
            },
            {
              name: "Notebooks",
            },
            {
              name: "2in1 Convertibles",
            },
            {
              name: "Ultrabooks",
            },
          ],
        },
        {
          name: "Notebook Kaufberatung",
        },
        {
          name: "Mac Konfigurator",
        },
      ],
    },
  ],
};
