import "./hero.css";

const Home = () => {
  return (
    <div className='hero'>
      <h1 className='hero-text'>
        This is an exploration of two of the available applications on OpenAI
        platform.
      </h1>
      <div className='hero-text hero-content'>
      <h2 className='hero-text hero-section'>Chat</h2>
        <p>
          Using the OpenAI Chat API, you can build your own applications with
          gpt-3.5-turbo and gpt-4 to do things like:
        </p>
        <ul className='hero-list'>
          <li>Draft an email or other piece of writing</li>
          <li>Write Python code</li>
          <li>Answer questions about a set of documents</li>
          <li>Create conversational agents</li>
          <li>Tutor in a range of subjects</li>
          <li>Translate languages</li>
          <li>Simulate characters for video games and much more</li>
          <li>Give your software a natural language interface</li>
        </ul>
        <p>
          Chat models take a series of messages as input, and return a
          model-generated message as output.
        </p>
      </div>

      <div className='hero-text hero-content'>
      <h2 className='hero-text'>Image Generation</h2>
        <p>
          {" "}
          With OpenAI you are able generate or manipulate images with their
          DALL·E models
        </p>

        <ul>
          <li>Creating images from scratch based on a text prompt</li>
          <li>
            Creating edits of an existing image based on a new text prompt
          </li>
          <li>Creating variations of an existing image</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
