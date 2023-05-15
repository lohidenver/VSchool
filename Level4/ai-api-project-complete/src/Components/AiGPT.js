import {AiFillPlusCircle} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {GiArtificialIntelligence} from "react-icons/gi";
import {useState, useEffect, useRef} from "react";
import {IconContext} from "react-icons";
import "./aiGPT.css";

const AiGPT = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [prevChats, setPrevChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const lastMessageRef = useRef(null);

  const createNewChat = () => {
    setMessage("");
    setInputValue("");
    setCurrentTitle("");
  };

  const setCurrentChat = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
    setMessage("");
    setInputValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("attempted");
      getMessages();
    }
  };

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: inputValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView();
  }, [prevChats]);

  useEffect(() => {
    console.log(currentTitle, inputValue, message);

    if (!currentTitle && inputValue && message) {
      setCurrentTitle(inputValue);
    }
    if (currentTitle && inputValue && message) {
      setPrevChats((prevChats) => [
        ...prevChats,
        {
          title: currentTitle,
          role: "user",
          content: inputValue,
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, currentTitle]);

  console.log("Previous Chats: " + JSON.stringify(prevChats));

  const currentChat = prevChats.filter(
    (prevChat) => prevChat.title === currentTitle
  );
  const uniqueTitles = Array.from(
    new Set(prevChats.map((prevChat) => prevChat.title))
  );

  //
  return (
    <div className='aiGPT'>
      <div className='aiGPT-wrapper'>
        <section className='side-bar' id='side-bar'>
          <button className='new-chat' onClick={createNewChat}>
            <AiFillPlusCircle /> New Chat
          </button>

          <ul className='history'>
            {uniqueTitles?.map((uniqueTitle, index) => (
              <li key={index} onClick={() => setCurrentChat(uniqueTitle)}>
                {uniqueTitle}
              </li>
            ))}
          </ul>
          <nav>
            <p>Made by Dave</p>
          </nav>
        </section>
        {/*  */}
        {/*  */}
        <section className='main' id='main'>
          {!currentTitle && <h1 className="gpt-title">DaveGPT</h1>}
          <div className='chat-body' id='chat-body'>
            <ul className='feed'>
              {currentChat?.map((chatMessage, index) => (
                <li
                  key={index}
                  className={
                    chatMessage.role === "user"
                      ? "user chat-message"
                      : "ai chat-message"
                  }
                >
                  <p className={chatMessage.role === "user" ? "user" : "ai"}>
                    {chatMessage.role === "user" ? (
                      <>
                        <IconContext.Provider value={{size: "100px"}}>
                          <div>
                            <AiOutlineUser />
                          </div>
                        </IconContext.Provider>
                      </>
                    ) : (
                      <IconContext.Provider value={{size: "100px"}}>
                        <GiArtificialIntelligence />
                      </IconContext.Provider>
                    )}
                  </p>
                  <p className='chat-content'>{chatMessage.content}</p>
                </li>
              ))}
              <div ref={lastMessageRef} id="lastMessage" className='last-message'/>
            </ul>
          </div>
          <div className='bottom-section'>
            <div className='input-container'>
              <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div id='submit' onClick={getMessages}>
                ➢
              </div>
            </div>
            <p className='info'>
              Our goal is to make AI systems more natural and safe to interact
              with. Your feedback will help us improve.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiGPT;
