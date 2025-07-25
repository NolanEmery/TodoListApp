'use client'
import { useState } from 'react';
import { useReducer } from 'react';
import { Provider } from "@/components/ui/provider";
import { Tabs } from "@chakra-ui/react";

export default function Home() {
  const [arr, dispatch] = useReducer(arrReducer, []);
  // cannot use one state variable for each of them (because then we would have to instantiate an 
  // arbitrary number)
  // CAN use one state variable for the array (of objects)
  // assumes that each item added by the user is unique

  const [dateThingToDoToAdd, setDateThingToDoToAdd] = useState("");
  const [timeThingToDoToAdd, setTimeThingToDoToAdd] = useState("");
  const [thingToDoToRemove, setThingToDoToRemove] = useState("");

  //Create
  function addItem(formData) {
    const toAdd = formData.get("addItem");
    dispatch({
      type: 'add',
      thing: toAdd
    });
  }

  // Update
  // The input must be given as one of "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", or "Sunday"
  function addDate(formData) {
    const toAddDate = formData.get("addDate");
    dispatch({
      type: 'date',
      date: toAddDate,
      extra: dateThingToDoToAdd
    });
  }

  // Update
  function addTime(formData) {
    const toAddTime = formData.get("addTime");
    dispatch({
      type: 'time',
      time: toAddTime,
      extra: timeThingToDoToAdd
    });
  }

  // Delete
  function removeItem() {
    dispatch({
      type: 'remove',
      extra: thingToDoToRemove
    });
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

  const printedArr = mappedArr.map(m => {
    return (
      <p>{m}</p>
    );
  });

  const printedMondayItems = mondayItems.map(m => {
    return <p>{m}</p>;
  });

  const printedTuesdayItems = tuesdayItems.map(m => {
    return <p>{m}</p>;
  });

    const printedWednesdayItems = wednesdayItems.map(m => {
    return <p>{m}</p>;
  });

    const printedThursdayItems = thursdayItems.map(m => {
    return <p>{m}</p>;
  });

    const printedFridayItems = fridayItems.map(m => {
    return <p>{m}</p>;
  });

    const printedSaturdayItems = saturdayItems.map(m => {
    return <p>{m}</p>;
  });

    const printedSundayItems = sundayItems.map(m => {
    return <p>{m}</p>;
  });

  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Tabs.Root>
            <Tabs.List>
              <Tabs.Trigger value="monday">Monday</Tabs.Trigger>
              <Tabs.Trigger value="tuesday">Tuesday</Tabs.Trigger>
              <Tabs.Trigger value="wednesday">Wednesday</Tabs.Trigger>
              <Tabs.Trigger value="thursday">Thursday</Tabs.Trigger>
              <Tabs.Trigger value="friday">Friday</Tabs.Trigger>
              <Tabs.Trigger value="saturday">Saturday</Tabs.Trigger>
              <Tabs.Trigger value="sunday">Sunday</Tabs.Trigger>
              <Tabs.Indicator />
            </Tabs.List>
            <Tabs.Content value="monday">{printedMondayItems}</Tabs.Content>
            <Tabs.Content value="tuesday">{printedTuesdayItems}</Tabs.Content>
            <Tabs.Content value="wednesday">{printedWednesdayItems}</Tabs.Content>
            <Tabs.Content value="thursday">{printedThursdayItems}</Tabs.Content>
            <Tabs.Content value="friday">{printedFridayItems}</Tabs.Content>
            <Tabs.Content value="saturday">{printedSaturdayItems}</Tabs.Content>
            <Tabs.Content value="sunday">{printedSundayItems}</Tabs.Content>
          </Tabs.Root>
          <p>What is the item you would like to add?</p>
          <form action={addItem}>
          <input name="addItem">
          </input>
          <button type="submit">
            Add
          </button>
          </form>
          {printedArr}
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
        </Provider>
      </body>
    </html>
  );
}

function arrReducer(arr, action) {
  if (action.type == 'add') {
    return [...arr, {
      thingToDo: action.thing,
      date: "",
      time: ""
    }];
  } else if (action.type == 'date') {
    return arr.map(a => {
      if (a.thingToDo == action.extra) {
        return ({
          ...a,
          date: action.date
        });
      } else {
        return a;
      }
    });
  } else if (action.type == 'time') {
    return arr.map(a => {
      if (a.thingToDo == action.extra) {
        return ({
          ...a,
          time: action.time
        });
      } else {
        return a;
      }
    });
  } else if (action.type == 'remove') {
    return arr.filter(a => {
      if (a.thingToDo != action.extra) {
        return a;
      }
    });
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}
