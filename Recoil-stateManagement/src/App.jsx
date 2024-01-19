import { RecoilRoot, useRecoilValue } from 'recoil';
import {
  jobsCount,
  messageCount,
  networkCount,
  notificationCount,
} from './atmos';

function App() {
  return (
    <RecoilRoot>
      <NavBar />
    </RecoilRoot>
  );
}

function NavBar() {
  const network = useRecoilValue(networkCount);
  const messages = useRecoilValue(messageCount);
  const jobs = useRecoilValue(jobsCount);
  const notification = useRecoilValue(notificationCount);
  return (
    <>
      <button>Home</button>
      <button>Network({network})</button>
      <button>Message({messages})</button>
      <button>Jobs{jobs}</button>
      <button>notification({notification})</button>
      <button>Me</button>
    </>
  );
}

export default App;
