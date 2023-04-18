import Layout from "../Layout";
import myPic from '../images/myself.jpg';
import '../styles/Owner.css';

const Owner = () => {

    return (
        <Layout>
            <>
                <div className="content">
                    <h1>Hi, I'm No.51 Mee-pooh from Group J</h1>
                    <img src={myPic} alt="myPic" />

                    <div className="myBio">
                        <h4>Short Biography:</h4>
                        <p>Hello, my name is Teerapat Limpawittayakul or you can call me Mee-pooh. I'm graduated from KMUTT with bachelor's degree in Chemical Engineering. I'm the most handsome in my group as you can see from my picture and nobody can argue with this statement of mind. Don't you think so, thank you💖.</p>
                    </div>
                </div>
            </>
        </Layout>
    )
}
  
  
  
  export default Owner