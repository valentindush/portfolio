import bgImage from './assets/R.jpeg'

function App() {

  return (
    <div className="overflow-y-hidden w-screen h-screen py-24 bg-slate-800">
      <img className='w-screen brightness-75 z-0 absolute top-0 left-0 h-screen object-cover blur-sm' src="/img/R.jpeg" alt="" />
      <div className="bg-white/20 max-w-2xl h-[calc(100vh-12rem)] p-2 relative z-20 mx-auto rounded-xl border-2 border-white/20 backdrop-blur-sm">
        <div className="w-full h-full overflow-y-scroll p-4">
          <div className="text-white">
            <h1 className="text-4xl font-bold text-center">Hello World</h1>
            <div className="mt-2">
              <h1 className="text-3xl font-bold mb-4">Hello, I'm [Your Name]</h1>
              <p className="text-xl font-semibold mb-6">
                Software Engineer | Machine Learning Enthusiast | AI Aficionado
              </p>
              <p className="text-lg">
                <span className="text-yellow-500">🌟</span> Passionate about transforming ideas into elegant code and solving complex problems with technology.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">What I Bring to the Table:</h2>
                <ul className="list-disc ml-6">
                  <li className="text-lg">Expertise in Software Engineering: With a solid background in software development, I excel in crafting clean, efficient, and scalable code. I've honed my skills in a variety of programming languages, frameworks, and technologies.</li>
                  <li className="text-lg">Machine Learning Maven: Machine learning is not just a buzzword for me; it's a passion. I've delved into the depths of neural networks, deep learning, natural language processing, and computer vision. Whether it's predicting trends, optimizing processes, or making predictions, I'm up for the challenge.</li>
                  <li className="text-lg">AI Enthusiast: Artificial intelligence is more than just algorithms; it's the key to unlocking the potential of our digital world. I'm dedicated to exploring the frontiers of AI, from developing smart chatbots to creating intelligent recommendation systems.</li>
                  <li className="text-lg">Full-Stack Explorer: I'm not just confined to one layer of the tech stack. From front-end design that captivates users to back-end logic that powers applications, I'm well-versed in the entire development cycle.</li>
                  <li className="text-lg">Problem-Solver: My engineering mindset thrives on solving real-world problems. Whether it's optimizing business processes, enhancing user experiences, or tackling complex data analysis, I relish the opportunity to find innovative solutions.</li>
                  <li className="text-lg">Collaborative Team Player: I believe in the power of collaboration. Working closely with cross-functional teams, I've learned that the best solutions often arise from diverse perspectives and collective creativity.</li>
                  <li className="text-lg">Lifelong Learner: The tech world never stops evolving, and neither do I. I'm committed to continuous learning, staying updated with the latest trends, and constantly improving my skills.</li>
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">My Portfolio Highlights:</h2>
                <ul className="list-disc ml-6">
                  <li className="text-lg">
                    <a href="[Project 1 Link]" className="text-blue-500">[Project Name 1]</a>: [Brief description]
                    <br />
                    <span className="italic">[Key achievement or technology used]</span>
                  </li>
                  <li className="text-lg">
                    <a href="[Project 2 Link]" className="text-blue-500">[Project Name 2]</a>: [Brief description]
                    <br />
                    <span className="italic">[Key achievement or technology used]</span>
                  </li>
                  <li className="text-lg">
                    <a href="[Project 3 Link]" className="text-blue-500">[Project Name 3]</a>: [Brief description]
                    <br />
                    <span className="italic">[Key achievement or technology used]</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
                <p className="text-lg">
                  I'm always excited to connect with fellow tech enthusiasts, potential collaborators, or anyone who shares a passion for the limitless possibilities of programming, machine learning, and AI. Feel free to reach out to me at [Your Email] or connect with me on{' '}
                  <a href="[LinkedIn/GitHub/Other Social Media]" className="text-blue-500">[LinkedIn/GitHub/Other Social Media]</a> to start a conversation.
                </p>
                <p className="text-lg">
                  Let's build the future together, one line of code at a time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
