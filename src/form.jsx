import { useState } from "react";

export default function Form({ data, dataHandler }) {
 
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState("wants");
  const [date, setDate] = useState();

  // Update expenses from parent component
  const submit = () => {
    dataHandler((oldData) => {

      return [
        ...oldData,
        {
          amount: amount,
          category: category,
          date: date,
        },
      ];
    });
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => window.expenseModal.showModal()}
      >
        New Expense
      </button>
      <dialog id="expenseModal" className="modal">
        <form
          method="dialog"
          className="modal-box"
          onSubmit={() => {
            submit();
          }}
        >
          <h1>Add Your Expenses</h1>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              className="input input-bordered "
              onChange={(event) => {
                setAmount(event.target.value);
              }}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="">Category</label>
            <select
              name="category"
              className="input input-bordered "
              defaultValue={category}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <option value="wants">Wants</option>
              <option value="needs">Needs</option>
            </select>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">Date</label>
            <input
              type="date"
              className="input input-bordered "
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Confirm
          </button>
        </form>
      </dialog>
    </div>
  );
}
