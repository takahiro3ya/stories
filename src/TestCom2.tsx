import { useCount } from "./testHooks";

export const TestCom2 = () => {
  const { count, handleCount } = useCount();
  return (
    <div style={{ width: 100, height: 100, backgroundColor: "skyblue" }}>
      <div>{count}</div>
      <button onClick={handleCount}>click</button>
    </div>
  );
};
