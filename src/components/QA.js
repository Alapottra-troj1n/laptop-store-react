import React from "react";

const QA = () => {
  return (
    <div>
      <h1>How React Works ?</h1>
      <p>
        React is a javascript framework. Even through it may look it is a blend
        of HTML, CSS, and JavaScript in syntax. But under the hood it is all
        JavaScript elements incapsulated in syntatic sugar like JSX to make it
        look simple and understandable for us. It is complied through a
        technology called Babel. Inside of React it mantains a tree or a virtual
        DOM for us that detects any change done on UI through state and updates
        that specific element without disturing the flow of the DOM. Which makes
        any change on UI seamless and fast and does not need to re-render the
        whole DOM.
      </p>
      <br />
      <h1>Difference between Props and State ?</h1>
      <p>1. Props are used to pass data through components while State stores a specific data that can be passed through props</p>
      <p>2. Props are cannot be changed and are not mutable while state can be changed and mutate and are also asynchronous</p>
      <p>3. Props are used to create a conenction between components while States are used to render dynamic changes in the UI</p>
      <p>4. States are internal and local to it's component while props are not local and are controlled by whatever component renders them</p>
      <br />
      <h1>How useState Works ? </h1>
      <p>useState is a React functionality often refers as a hook. It is like a mutable variable that can hold any element like array, object or values.You can set a inital value while calling useState or set the value dynamically later. Values inside the useState are dynamic and can be changed and mutate asynchronously using setter function. It is used to update or change elements or values of a component.</p>  
    </div>
  );
};

export default QA;
