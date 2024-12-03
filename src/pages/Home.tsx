import { IonContent, IonPage } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div style={{width:'100%', height:"100vh"}}>
          <iframe style={{width:'100%', height:"100vh"}}
              src="https://app.wysebot.com" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
