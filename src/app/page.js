'use client'
import { useState } from 'react';

export default function Home() {
  const [arr, setArr] = useState([]); //need a dynamic number of objects
  // cannot use one state variable for each of them (because then we would have to instantiate an 
  // arbitrary number)
  // CAN use one state variable for the array (of objects)
  // assumes that each item added by the user is unique

  const [dateThingToDoToAdd, setDateThingToDoToAdd] = useState("");
  const [timeThingToDoToAdd, setTimeThingToDoToAdd] = useState("");
  const [thingToDoToRemove, setThingToDoToRemove] = useState("");

  //Create
  function addItem(formData) {
    const toAdd = formData.get("addItem"); // refactor
    setArr([...arr, {
      thingToDo: toAdd,
      date: "",
      time: ""
    }]);
  }

  // Update
  // The input must be given as one of "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", or "Sunday"
  function addDate(formData) {
    const toAddDate = formData.get("addDate");
    setArr(arr.map(a => {
      if (a.thingToDo == dateThingToDoToAdd) {
        return ({
          ...a,
          date: toAddDate
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
      if (a.thingToDo == timeThingToDoToAdd) {
        return ({
          ...a,
          time: toAddTime
        });
      } else {
        return a;
      }
    }));
  }

  // Delete
  function removeItem() {
    setArr(arr.filter(a => {
      if (a.thingToDo != thingToDoToRemove) {
        return a;
      }
    }));
    alert("You removed " + thingToDoToRemove);
  }

  // dateNames is list of inputs corresponding to the current todo items
  const dateNames = arr.map(a => 
    <input key={a.thingToDo} value={a.thingToDo} onClick={e => {
      setDateThingToDoToAdd(e.target.value);
    }} onChange={() => {}}>

    </input>
  );

  // timeNames is list of inputs corresponding to the current todo items
  const timeNames = arr.map(a => 
    <input key={a.thingToDo} value={a.thingToDo} onClick={e => {
      setTimeThingToDoToAdd(e.target.value);
    }} onChange={() => {}}>

    </input>
  );

  // removeNames is the list of inputs corresponding to the current todo items
  const removeNames = arr.map(a => 
    <input key={a.thingToDo} value={a.thingToDo} onClick={e => {
      setThingToDoToRemove(e.target.value);
    }} onChange={() => {}}>

    </input>
  );

  // Read
  const mappedArr = arr.map(a => {
    return (
      a.thingToDo + " " + a.date + " " + a.time
    );
  });


  // Read
  const mondayItems = arr.filter(a1 => a1.date == "Monday").map(a2 => a2.thingToDo);

  // Read
  const tuesdayItems = arr.filter(a1 => a1.date == "Tuesday").map(a2 => a2.thingToDo);

  // Read
  const wednesdayItems = arr.filter(a1 => a1.date == "Wednesday").map(a2 => a2.thingToDo);

  // Read
  const thursdayItems = arr.filter(a1 => a1.date == "Thursday").map(a2 => a2.thingToDo);

  // Read
  const fridayItems = arr.filter(a1 => a1.date == "Friday").map(a2 => a2.thingToDo);

  // Read
  const saturdayItems = arr.filter(a1 => a1.date == "Saturday").map(a2 => a2.thingToDo);

  // Read
  const sundayItems = arr.filter(a1 => a1.date == "Sunday").map(a2 => a2.thingToDo);

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
    {/* Read */}
    <p>Print out all of your todo items: </p>
    <button onClick={() => {
      for (let i = 0; i < mappedArr.length; i++) {
        alert(mappedArr[i]);
      }
    }}>
      Print
    </button>
    {/* Read */}
    <p>Print out all of your Monday items: </p>
    <button onClick={() => {
      for (let i = 0; i < mondayItems.length; i++) {
        alert(mondayItems[i]);
      }
    }}>
      Print
    </button>
    {/* Read */}
    <p>Print out all of your Tuesday items: </p>
    <button onClick={() => {
      for (let i = 0; i < tuesdayItems.length; i++) {
        alert(tuesdayItems[i]);
      }
    }}>
      Print
    </button>
    {/* Read */}
    <p>Print out all of your Wednesday items: </p>
    <button onClick={() => {
      for (let i = 0; i < wednesdayItems.length; i++) {
        alert(wednesdayItems[i]);
      }
    }}>
      Print
    </button>
    {/* Read */}
    <p>Print out all of your Thursday items: </p>
    <button onClick={() => {
      for (let i = 0; i < thursdayItems.length; i++) {
        alert(thursdayItems[i]);
      }
    }}>
      Print
    </button>
    {/* Read */}
    <p>Print out all of your Friday items: </p>
    <button onClick={() => {
      for (let i = 0; i < fridayItems.length; i++) {
        alert(fridayItems[i]);
      }
    }}>
      Print
    </button>
    {/* Read */}
    <p>Print out all of your Saturday items: </p>
    <button onClick={() => {
      for (let i = 0; i < saturdayItems.length; i++) {
        alert(saturdayItems[i]);
      }
    }}>
      Print
    </button>
    {/* Read */}
    <p>Print out all of your Sunday items: </p>
    <button onClick={() => {
      for (let i = 0; i < sundayItems.length; i++) {
        alert(sundayItems[i]);
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
    <input type="radio" name="addDate" value="Monday"></input>
    <label>Tuesday</label>
    <input type="radio" name="addDate" value="Tuesday"></input>
    <label>Wednesday</label>
    <input type="radio" name="addDate" value="Wednesday"></input>
    <label>Thursday</label>
    <input type="radio" name="addDate" value="Thursday"></input>
    <label>Friday</label>
    <input type="radio" name="addDate" value="Friday"></input>
    <label>Saturday</label>
    <input type="radio" name="addDate" value="Saturday"></input>
    <label>Sunday</label>
    <input type="radio" name="addDate" value="Sunday"></input>
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
    {removeNames}
    <button type="submit">
      Remove
    </button>
    </form>
    </>
  );
}
