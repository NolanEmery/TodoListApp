'use client'
import { useState } from 'react';

export default function Home() {
  const [arr, setArr] = useState([]);

  function addItem(formData) {
    const toAdd = formData.get("addItem");
    setArr([...arr, toAdd]);
  }

  function removeItem(formData) {
    const toRemove = formData.get("removeItem");
    setArr(arr.filter(a => {
      if (a !== toRemove) {
        return a;
      }
    }));
    alert("You removed " + toRemove);
  }

  return (
    <>
    <p>What is the item you would like to add?</p>
    <form action={addItem}>
    <input name="addItem">
    </input>
    <button type="submit">
      Submit
    </button>
    </form>
    <p>Print out all of your todo items: </p>
    <button onClick={e => {
      for (let i = 0; i < arr.length; i++) {
        alert(arr[i]);
      }
    }}>
      Submit
    </button>
    <p>What is the item you would like to remove?</p>
    <form action={removeItem}>
    <input name="removeItem">
    </input>
    <button type="submit">
      Submit
    </button>
    </form>
    </>
  );
}
