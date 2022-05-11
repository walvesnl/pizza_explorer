import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { AddPizzaForm } from "./AddPizzaForm";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizza = useSelector(selectPizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back <strong>{user.name}</strong>
      </p>
      <p>There are {pizza.length} pizzas in our list</p>
      {pizza.map((p) => (
        <div>
          <ul>
            <li>
              {p.name}, {p.description}, times bought: {p.bought}
            </li>
          </ul>
        </div>
      ))}
      <AddPizzaForm />
      <p>TODO: the list of pizzas</p>
    </div>
  );
}
