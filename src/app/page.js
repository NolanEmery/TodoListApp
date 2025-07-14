'use client'
import { useState } from 'react';

export default function Home() {
  const [arr, setArr] = useState([]); //need a dynamic number of objects
  // cannot use one start variable for each of them (because then we would have to instantiate an 
  // arbtrary number)
  // CAN use one state variable for the array (but likely need to declare the object)

  const [dateToAdd, setDateToAdd] = useState("");
  const [timeToAdd, setTimeToAdd] = useState("");

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
  // The input must be given as one of "Monday", "Tuesday", "Wednesday", "Thursday", or "Friday"
  function addDate(formData) {
    const toAddDate = formData.get("addDate");
    setArr(arr.map(a => {
      if (a.thingToDo == dateToAdd) {
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
    const toAddTime = formData.get("addTime");
    setArr(arr.map(a => {
      if (a.thingToDo == timeToAdd) {
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
      if (a.thingToDo != toRemove) {
        return a;
      }
    }));
    alert("You removed " + toRemove);
  }

  const dateNames = arr.map(a => 
    <input value={a.thingToDo} onClick={e => {
      setDateToAdd(e.target.value);
    }}>

    </input>
  );

    const timeNames = arr.map(a => 
    <input value={a.thingToDo} onClick={e => {
      setTimeToAdd(e.target.value);
    }}>

    </input>
  );

  let temp;

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
        temp = arr[i];
        alert(temp.thingToDo + " " + temp.date + " " + temp.time);
      }
    }}>
      Print
    </button>
    <p>Add a date to an item: </p>
    <form action={addDate}>
    <label>Item: </label>
    {dateNames}
    <label>Date: </label>
    <label>Monday</label>
    <input type="radio" name="addDate" value="Monday">
    </input>
    <label>Tuesday</label>
    <input type="radio" name="addDate" value="Tuesday"></input>
    <label>Wednesday</label>
    <input type="radio" name="addDate" value="Wednesday"></input>
    <label>Thursday</label>
    <input type="radio" name="addDate" value="Thursday"></input>
    <label>Friday</label>
    <input type="radio" name="addDate" value="Friday"></input>
    <button type="submit">
      Add date
    </button>
    </form>
    <p>Add a time to an item: </p>
    <form action={addTime}>
    <label>Item: </label>
    {timeNames}
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
