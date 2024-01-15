import Feed from '@/components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br  className="max-md:hidden"/>
        <span className="orange_gradient text-center"> AI-Powered Promts</span>
      </h1>

      <p className="desc text-center">
        Promtdunia is an open-source AI 
        promting tool for mopdern world to discover,
         create and sharecreative promts-
      </p>

      <Feed/>

    </section>
  )
}

export default Home