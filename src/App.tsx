import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons/Buttons";
import { useState } from "react";
import Like from "./components/Like";
import ThumbsUp from "./components/ThumbsUp";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import FormWithStateHook from "./components/FormWithStateHook";
import ReactHookForm from "./components/ReactHookForm";
import ExpenseForm from "./Expense Tracker/components/ExpenseForm";
// import ExpenseList from "./Expense Tracker/components/ExpenseTable";
import ExpenseTable from "./Expense Tracker/components/ExpenseTable";
import ExpenseFilter from "./Expense Tracker/components/ExpenseFilter";

function App() {
  let items = ["Paris", "Shahrood", "New York", "London", "Tokyo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  const [cartItems, setCartItems] = useState([
    "Product1",
    "Product2",
    "Product3",
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpense] = useState([
    { id: 1, description: "abc", amount: 1, category: "Utilities" },
    { id: 2, description: "dfe", amount: 10, category: "Entertainments" },
    { id: 3, description: "ghi", amount: 15, category: "Groceries" },
    { id: 4, description: "jkl", amount: 2, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const [tags, setTags] = useState(["happy ", "excited ", "cheered "]);

  const handleClick = () => {
    // setTags([...tags, "charmed "]);
    // setTags(tags.filter(tag => tag !== 'happy '))
    setTags(tags.map((tag) => (tag === "happy " ? "happiness " : tag)));
  };

  const [] = useState("");

  return (
    <>
      {alertVisible && (
        <Alert>
          <p>My Alert</p>

          <button
            className="btn-close position-absolute top-50 end-0 translate-middle"
            onClick={() => setAlertVisibility(false)}
          ></button>
        </Alert>
      )}

      <Buttons color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Buttons>

      <Like onClick={() => console.log("Clicked!!!")} />

      <ThumbsUp onClickF={() => console.log("Liked!")} />

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <NavBar cartItemsCount={cartItems.length} />

      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      {tags}
      <button
        onClick={handleClick}
        style={{
          color: "darkgreen",
          fontSize: 30,
          backgroundImage: "linear-gradient(to left, dodgerblue, gold)",
        }}
      >
        Update the tags
      </button>

      <ExpandableText maxChars={100}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, nisi
        ipsum? Architecto, dolore doloribus, placeat tenetur, iusto inventore
        quo soluta incidunt consectetur eum similique iste quas blanditiis
        magnam. Vel laboriosam magnam corrupti libero repellat ab officia.
        Quidem at veniam sed!
      </ExpandableText>

      <Form />

      <FormWithStateHook />

      <ReactHookForm />

      <ExpenseForm
        onSubmit={(expense) =>
          setExpense([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />

      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />

      <ExpenseTable
        expenses={visibleExpenses}
        onDelete={(id) => setExpense(expenses.filter((e) => e.id !== id))}
      />

      <select>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">HouseHold</option>
      </select>
    </>
  );   
}

export default App;
