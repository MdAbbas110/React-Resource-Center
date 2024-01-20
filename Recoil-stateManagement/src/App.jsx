import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { notification, sumUpAll } from './atmos';

function App() {
  return (
    <RecoilRoot>
      <NavBar />
    </RecoilRoot>
  );
}

function NavBar() {
  const [notifications, setNotification] = useRecoilState(notification);
  const totalNotification = useRecoilValue(sumUpAll);
  return (
    <>
      <button>Home</button>
      <button>Network ({notifications.network})</button>
      <button>Message ({notifications.message})</button>
      <button>Jobs {notifications.jobs}</button>
      <button>notification ({notifications.notifications})</button>
      <button>Me ({totalNotification})</button>
    </>
  );
}

export default App;
