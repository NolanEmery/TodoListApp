'use client'
import { useState } from 'react';

export default function Home() {
  const [arr, setArr] = useState([]); //need a dynamic number of objects
  // cannot use one start variable for each of them (because then we would have to instantiate an 
  // arbtrary number)
  // CAN use one state variable for the array (but likely need to declare the object)

  //Create
  function addItem(formData) {
    const toAdd = formData.get("addItem");
    setArr([...arr, {
      thingToDo: toAdd,
      date: "",
      time: ""
    }]);
  }

  // Update
  function addDate(formData) { //we need the value of the object and the date we are adding
    const toAddThingToDo = formData.get("addThingToDo");
    const toAddDate = formData.get("addDate");
    setArr(arr.map(a => {
      if (a.thingToDo === toAddThingToDo) {
        return ({
          thingToDo: a.thingToDo,
          date: toAddDate,
          time: a.time
        });
      } else {
        return a;
      }
    }));
  }

  // Update
  function addTime(formData) {
    const toAddThingToDo = formData.get("thingToDo");
    const toAddTime = formData.get("addTime");
    setArr(arr.map(a => {
      if (a.thingToDo === toAddThingToDo) {
        return ({
          thingToDo: a.thingToDo,
          date: a.date,
          time: toAddTime
        });
      } else {
        return a;
      }
    }));
  }

  // Delete
  function removeItem(formData) {
    const toRemove = formData.get("removeItem");
    setArr(arr.filter(a => {
      if (a.thingToDo !== toRemove) {
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
      Add
    </button>
    </form>
    <p>Print out all of your todo items: </p>
    <button onClick={e => {
      for (let i = 0; i < arr.length; i++) {
        alert(arr[i].thingToDo);
        if (arr[i].date !== "") {
          alert(arr[i].date);
        }
        if (arr[i].time !== "") {
          alert(arr[i].time);
        }
      }
    }}>
      Print
    </button>
    <p>Add a date to an item: </p>
    <form action={addDate}>
    <label>Item: </label>
    <input name="addThingToDo">
    </input>
    <label>Date: </label>
    <input name="addDate">
    </input>
    <button type="submit">
      Add Date
    </button>
    </form>
    <p>Add a time to an item: </p>
    <form action={addTime}>
    <label>Item: </label>
    <input name="thingToDo">
    </input>
    <label>Time: </label>
    <input name="addTime">
    </input>
    <button type="submit">
      Add Time
    </button>
    </form>
    <p>What is the item you would like to remove?</p>
    <form action={removeItem}>
    <input name="removeItem">
    </input>
    <button type="submit">
      Remove
    </button>
    </form>
    </>
  );
}
