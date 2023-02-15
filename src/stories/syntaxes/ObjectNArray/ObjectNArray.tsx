const obj = { str: "Hello", num: 123 };

export const ObjectNArray = () => (
  <>
    <h1>Object and Array</h1>

    <h2>Array from Object</h2>

    <p>{`const obj = { str: "Hello", num: 123 }`}</p>

    <p>
      {`Object.keys(obj)`}
      <br />
      {`['str', 'num']`}
    </p>

    <p>
      {`Object.values(obj)`}
      <br />
      {`['Hello', 123]`}
    </p>

    <p>
      {`Object.entries(obj)`}
      <br />
      {`[["str", "Hello"], ["num", 123]]`}
    </p>
  </>
);
