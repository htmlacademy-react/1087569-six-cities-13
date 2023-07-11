import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  cardsCount: number;
}

function App({cardsCount}: AppScreenProps): JSX.Element {
  return(
    <MainScreen
      cardsCount={cardsCount}
    />
  );
}

export default App;
