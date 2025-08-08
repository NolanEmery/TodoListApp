'use client'
import { useReducer } from 'react';
import { Provider } from "@/components/ui/provider";
import { Tabs } from "@chakra-ui/react";
import { useRef } from 'react';
import { Button } from "@chakra-ui/react";

export default function Home() {
  const [arr, dispatch] = useReducer(arrReducer, []);
  // cannot use one state variable for each of them (because then we would have to instantiate an 
  // arbitrary number)
  // CAN use one state variable for the array (of objects)
  // assumes that each item added by the user is unique

  let dateThingToDoToAdd = useRef("");
  let timeThingToDoToAdd = useRef("");
  let thingToDoToRemove = useRef("");

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
      extra: dateThingToDoToAdd.current
    });
  }

  // Update
  function addTime(formData) {
    const toAddTime = formData.get("addTime");
    dispatch({
      type: 'time',
      time: toAddTime,
      extra: timeThingToDoToAdd.current
    });
  }

  // Delete
  function removeItem() {
    dispatch({
      type: 'remove',
      extra: thingToDoToRemove.current
    });
    alert("You removed " + thingToDoToRemove.current);
  }

  // Read
  const mondayItems = arr.filter(a1 => a1.date == "Monday").map(a2 => a2.thingToDo + " " + a2.time);

  // Read
  const tuesdayItems = arr.filter(a1 => a1.date == "Tuesday").map(a2 => a2.thingToDo + " " + a2.time);

  // Read
  const wednesdayItems = arr.filter(a1 => a1.date == "Wednesday").map(a2 => a2.thingToDo + " " + a2.time);

  // Read
  const thursdayItems = arr.filter(a1 => a1.date == "Thursday").map(a2 => a2.thingToDo + " " + a2.time);

  // Read
  const fridayItems = arr.filter(a1 => a1.date == "Friday").map(a2 => a2.thingToDo + " " + a2.time);

  // Read
  const saturdayItems = arr.filter(a1 => a1.date == "Saturday").map(a2 => a2.thingToDo + " " + a2.time);

  // Read
  const sundayItems = arr.filter(a1 => a1.date == "Sunday").map(a2 => a2.thingToDo + " " + a2.time);

  const printedArr = arr.map(a => {
    return (
      <p onClick={() => {
        dateThingToDoToAdd.current = a.thingToDo;
        timeThingToDoToAdd.current = a.thingToDo;
        thingToDoToRemove.current = a.thingToDo;
      }}>{a.thingToDo + " " + a.date + " " + a.time}</p>
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
          <Tabs.Root fitted>
            <Tabs.List>
              <Tabs.Trigger value="monday">Monday</Tabs.Trigger>
              <Tabs.Indicator />
              <Tabs.Trigger value="tuesday">Tuesday</Tabs.Trigger>
              <Tabs.Indicator />
              <Tabs.Trigger value="wednesday">Wednesday</Tabs.Trigger>
              <Tabs.Indicator />
              <Tabs.Trigger value="thursday">Thursday</Tabs.Trigger>
              <Tabs.Indicator />
              <Tabs.Trigger value="friday">Friday</Tabs.Trigger>
              <Tabs.Indicator />
              <Tabs.Trigger value="saturday">Saturday</Tabs.Trigger>
              <Tabs.Indicator />
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
          {/* <> */}
          <p>What is the item you would like to add?</p>
          <form action={addItem}>
          <input name="addItem">
          </input>
          <Button type="submit">
            Add
          </Button>
          </form>
          {printedArr}
          <p>Add a date to an item: </p>
          <form action={addDate}>
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
          <Button type="submit">
            Add date
          </Button>
          </form>
          <p>Add a time to an item: </p>
          <form action={addTime}>
          <label>Time: </label>
          <input name="addTime">
          </input>
          <Button type="submit">
            Add Time
          </Button>
          </form>
          <p>What is the item you would like to remove?</p>
          <form action={removeItem}>
          <Button type="submit">
            Remove
          </Button>
          </form>
          {/* </> */}
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
