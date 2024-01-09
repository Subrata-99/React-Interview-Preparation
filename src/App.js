import logo from './logo.svg';
import './App.css';
import UseEffectHook from './Components/Hooks/ImportantHooks/UseEffectHook';
import ParentComponent from './Components/LifeCycle/ParentComponent';
import UserReducerHook from './Components/Hooks/ImportantHooks/UserReducerHook';
import Counter1 from './Components/HOC/Counter1';
import Counter2 from './Components/HOC/Counter2';
import { useContext } from 'react';
import { demoContext } from './Components/Hooks/ImportantHooks/Context';
import CustomUseMemoCounter from './Components/Hooks/CustomHooks/CustomUseMemo/CustomUseMemoCounter';
import CustomUseEffectComponent from './Components/Hooks/CustomHooks/CustomUseEffect/CustomUseEffectComponent';

function App() {
  const { count, setCount } = useContext(demoContext)
  return (
    <div className="App">
      <h1>All About React {count}<span onClick={() => setCount(prev => prev + 1)}>+</span></h1>
      {/* <UseStateHook /> */}
      {/* <UseEffectHook />
      <ParentComponent />
      <UserReducerHook />
      <Counter1 />
      <Counter2 /> */}
      {/* <CustomUseMemoCounter /> */}
      <CustomUseEffectComponent />
    </div>
  );
}

export default App;
