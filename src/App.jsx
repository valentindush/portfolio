import bgImage from './assets/R.jpeg'

function App() {

  return (
    <div className="overflow-y-hidden w-screen h-screen py-12 bg-slate-800 md:px-6">
      <img className='w-screen brightness-75 z-0 absolute top-0 left-0 h-screen object-cover blur-sm' src="/img/R.jpeg" alt="" />
      <div className="bg-white/10 max-w-2xl h-[calc(100vh-6rem)] p-2 relative z-20 mx-auto rounded-xl border border-white/20 backdrop-blur-md">
        <div className="w-full h-full overflow-y-scroll p-4">
          <div className="text-white">
            <div className="mt-2">
              <h1 className="text-3xl font-bold mb-4">Hello, I'm [Dushime Valentin]</h1>
              <p className="text-xl font-semibold mb-6">
                Software Engineer | Machine Learning Enthusiast | AI Aficionado
              </p>
              <p className="text-lg">
                <span className="text-yellow-500">🌟</span> Passionate about transforming ideas into elegant code and solving complex problems with technology.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">What I Bring to the Table:</h2>
                <ul className="list-disc ml-6">
                  <li className="text-lg mt-1">Expertise in Software Engineering: With a solid background in software development, I excel in crafting clean, efficient, and scalable code. I've honed my skills in a variety of programming languages, frameworks, and technologies.</li>
                  <li className="text-lg mt-1">Machine Learning Maven: Machine learning is not just a buzzword for me; it's a passion. I've delved into the depths of neural networks, deep learning, natural language processing, and computer vision. Whether it's predicting trends, optimizing processes, or making predictions, I'm up for the challenge.</li>
                  <li className="text-lg mt-1">AI Enthusiast: Artificial intelligence is more than just algorithms; it's the key to unlocking the potential of our digital world. I'm dedicated to exploring the frontiers of AI, from developing smart chatbots to creating intelligent recommendation systems.</li>
                  <li className="text-lg mt-1">Full-Stack Explorer: I'm not just confined to one layer of the tech stack. From front-end design that captivates users to back-end logic that powers applications, I'm well-versed in the entire development cycle.</li>
                  <li className="text-lg mt-1">Problem-Solver: My engineering mindset thrives on solving real-world problems. Whether it's optimizing business processes, enhancing user experiences, or tackling complex data analysis, I relish the opportunity to find innovative solutions.</li>
                  <li className="text-lg mt-1">Collaborative Team Player: I believe in the power of collaboration. Working closely with cross-functional teams, I've learned that the best solutions often arise from diverse perspectives and collective creativity.</li>
                  <li className="text-lg mt-1">Lifelong Learner: The tech world never stops evolving, and neither do I. I'm committed to continuous learning, staying updated with the latest trends, and constantly improving my skills.</li>
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">My Portfolio Highlights:</h2>
                <ul className="list-disc ml-6">
                  <li className="text-lg mt-3">
                    <a href="https://invictus.rmf.gov.rw/" className="text-blue-500">[INVCTUS RMF]</a>: Assets and Stock Managment System For RMF
                    <br />
                    <span className="text-sm font-light">Built with NextJS and ExpressJS</span>
                  </li>
                  <li className="text-lg mt-3">
                    <a href="https://ismis.minisports.gov.rw" className="text-blue-500">[MINISPORTS SMIS]</a>: A Management Information System for MINISPORTS
                    <br />
                    <span className="text-sm font-light">Built with PHP/Laravel Framework</span>
                  </li>
                  <li className="text-lg mt-3">
                    <a href="https://github.com/valentindush/santimental-analysis-project" className="text-blue-500">[SENTIMENTAL ANALYSIS]</a>: Sentimental Analysis project using python NTLK
                    <br />
                    <span className="text-sm font-light">Built with Natural Languange Processing Toolkit in Python</span>
                  </li>
                  <li className="text-lg mt-3">
                    <a href="https://github.com/valentindush/advanced-computer-vision-projects/tree/master/projects" className="text-blue-500">[COMPUTER VISION PROJECTS]</a>: Advanced Computer Vision Projects using OpenCv and Mediapipe
                    <br />
                    <span className="text-sm font-light">Built with openCV and Mediapipe in Python</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
                <p className="text-lg">
                  I'm always excited to connect with fellow tech enthusiasts, potential collaborators,
                   or anyone who shares a passion for the limitless possibilities of programming,
                    machine learning, and AI. Feel free to reach out to me at{' '}
                    <a href='mailto:codesvalentin@gmail.com' className='text-blue-500'>codesvalentin@gmail.com</a> or connect with me on{' '}
                  <a href="https://www.linkedin.com/in/valentin-dushime-26509a1b9/" className="text-blue-500">Linkedin</a> to start a conversation.
                </p>
                <p className="text-lg mt-2">
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
