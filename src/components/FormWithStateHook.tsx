import { useEffect, useRef, useState, type FormEvent } from "react";

const FormWithStateHook = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });

  const focusRef = useRef<HTMLInputElement>(null);

  //For making the browser focus on an input on the first render use the "useEffect()" below

  useEffect(() => {
    //   if (focusRef.current) focusRef.current.focus();
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          ref={focusRef}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form label">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>

      <button className="btn btn-secondary" type="submit">
        Submit With State Hook
      </button>
    </form>
  );
};

export default FormWithStateHook;
