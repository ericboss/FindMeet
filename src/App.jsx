import Footer from "./components/Footer";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import SectionIconLeft from "./components/SectionIconLeft";
import SectionIconLeftList from "./components/SectionIconLeftList";
import SectionIconRight from "./components/SectionIconRight";
import SectionInter from "./components/SectionInter";
import SectionToken from "./components/SectionToken";
import Teams from "./components/Teams";
import Timelines from "./components/Timelines";
import Tokenomics from "./components/Tokenomics";
function App() {
  return (
    <div className="App">
      
      <Header />
      <Section1 />
      
          <SectionIconRight
           title="Huge Opportunity"
           text="With the spread of various social network on a global scale, humans realized that finding new friends or lovely mates has never been so much easier.
           Many families have grown all over the world thanks to dating apps and social network."
           image_url="/images/ImageHUGE.png"
           />
           <SectionIconLeftList
           />

           <SectionInter />
           <SectionIconRight
           title="Find people instantly"
           text="With FindMeet app users can find people around them, or around the
           world instantly, based on interest, passions, or needs.
           
           Everything it's easy to use for everyone on thier smartphone with FindMeet app.
           "
           image_url="/images/dat1.png"
           />

    <SectionIconLeft
           title="Get in touch with your rules"
           text="Chat, super-private video call or share anything with full control about it.Users can decide their own rules,
                    as for example how many $MEET it cost to get in touch, to talk, to share private content."
           image_url="/images/relationship.png"
           />
           <SectionIconRight
           title="Life in the metaverse"
           text="Users have access to the FindMeet metaverse gaming platform where they can create their own life. Think about the famous game The Sims,
                  except that our game is real life on the metaverse. With $MEET, you can buy your own property, that instantly become a NFT with value, 
                  buy things go to the gym or start a new business."
           image_url="/images/basket.png"
           />
           <SectionIconLeft
           title="From the app to the metaverse"
           text="In FindMeet app you can invite people to meet you in the metaverse. You can invite new friends to your FindMeet-House, 
                   bring people out for dinner, make gifts, parties, have fun and also have intimate relationship in your bedroom."
           image_url="/images/House.png"
           />
            <SectionIconRight
           title="Play to Earn"
           text="The more you play the more you earn. User can receive $MEET rewards or NFTs. Based on the behaviour that users have inside FindMeet, they can earn or donate $MEET
                  Token. On our NFT marketplace user can buy clothes, watches, cars, luxury things and much more with utility in the game."

                  image_url="/images/Token.png"
           />
           <SectionIconLeft
           title="NFT Anonymous Login"
           text="Users data is really important.FindMeet have a unique function for LOGIN with data stored which make FindMeet safe and anonymous, for those who needs."
           image_url="/images/et1.png"
           />
      <SectionToken />
      <Teams />
      <Timelines />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;
