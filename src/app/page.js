'use client'
import { useReducer, useRef, useState } from 'react';
import { Provider } from "@/components/ui/provider";
import { Tabs, Button, ActionBar, Portal, Wrap, DataList, QrCode, Center } from "@chakra-ui/react";
import { RiArrowRightLine } from 'react-icons/ri';

export default function Home() {
  const [arr, dispatch] = useReducer(arrReducer, []);
  // cannot use one state variable for each of them (because then we would have to instantiate an 
  // arbitrary number)
  // CAN use one state variable for the array (of objects)
  // assumes that each item added by the user is unique

  let dateThingToDoToAdd = useRef("");
  let timeThingToDoToAdd = useRef("");
  let thingToDoToRemove = useRef("");

  const [actionBarState, setActionBarState] = useState(false);

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
  const mondayItems = arr.filter(a1 => a1.date == "Monday");

  // Read
  const tuesdayItems = arr.filter(a1 => a1.date == "Tuesday");

  // Read
  const wednesdayItems = arr.filter(a1 => a1.date == "Wednesday");

  // Read
  const thursdayItems = arr.filter(a1 => a1.date == "Thursday");

  // Read
  const fridayItems = arr.filter(a1 => a1.date == "Friday");

  // Read
  const saturdayItems = arr.filter(a1 => a1.date == "Saturday");

  // Read
  const sundayItems = arr.filter(a1 => a1.date == "Sunday");

  const printedArr = (
    <DataList.Root orientation="horizontal">
      {arr.map(a => (
        <DataList.Item key={a.thingToDo} onClick={() => {
          dateThingToDoToAdd.current = a.thingToDo;
          timeThingToDoToAdd.current = a.thingToDo;
          thingToDoToRemove.current = a.thingToDo;
        }}>
          <DataList.ItemLabel>Thing To Do:</DataList.ItemLabel>
          <DataList.ItemValue>{a.thingToDo}</DataList.ItemValue>
          <DataList.ItemLabel>Date:</DataList.ItemLabel>
          <DataList.ItemValue>{a.date}</DataList.ItemValue>
          <DataList.ItemLabel>Time:</DataList.ItemLabel>
          <DataList.ItemValue>{a.time}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  );


  const printedMondayItems = (
    <DataList.Root>
      {mondayItems.map(m => (
        <DataList.Item key={m.thingToDo} onClick={() => {
          dateThingToDoToAdd.current = m.thingToDo;
          timeThingToDoToAdd.current = m.thingToDo;
          thingToDoToRemove.current = m.thingToDo;
        }}>
          <DataList.ItemLabel>Thing To Do:</DataList.ItemLabel>
          <DataList.ItemValue>{m.thingToDo}</DataList.ItemValue>
          <DataList.ItemLabel>Time:</DataList.ItemLabel>
          <DataList.ItemValue>{m.time}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  );

  const printedTuesdayItems = (
    <DataList.Root>
      {tuesdayItems.map(m => (
        <DataList.Item key={m.thingToDo} onClick={() => {
          dateThingToDoToAdd.current = m.thingToDo;
          timeThingToDoToAdd.current = m.thingToDo;
          thingToDoToRemove.current = m.thingToDo;
        }}>
          <DataList.ItemLabel>Thing To Do:</DataList.ItemLabel>
          <DataList.ItemValue>{m.thingToDo}</DataList.ItemValue>
          <DataList.ItemLabel>Time:</DataList.ItemLabel>
          <DataList.ItemValue>{m.time}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  );

  const printedWednesdayItems = (
    <DataList.Root>
      {wednesdayItems.map(m => (
        <DataList.Item key={m.thingToDo} onClick={() => {
          dateThingToDoToAdd.current = m.thingToDo;
          timeThingToDoToAdd.current = m.thingToDo;
          thingToDoToRemove.current = m.thingToDo;
        }}>
          <DataList.ItemLabel>Thing To Do:</DataList.ItemLabel>
          <DataList.ItemValue>{m.thingToDo}</DataList.ItemValue>
          <DataList.ItemLabel>Time:</DataList.ItemLabel>
          <DataList.ItemValue>{m.time}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  );

  const printedThursdayItems = (
    <DataList.Root>
      {thursdayItems.map(m => (
        <DataList.Item key={m.thingToDo} onClick={() => {
          dateThingToDoToAdd.current = m.thingToDo;
          timeThingToDoToAdd.current = m.thingToDo;
          thingToDoToRemove.current = m.thingToDo;
        }}>
          <DataList.ItemLabel>Thing To Do:</DataList.ItemLabel>
          <DataList.ItemValue>{m.thingToDo}</DataList.ItemValue>
          <DataList.ItemLabel>Time:</DataList.ItemLabel>
          <DataList.ItemValue>{m.time}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  );

  const printedFridayItems = (
    <DataList.Root>
      {fridayItems.map(m => (
        <DataList.Item key={m.thingToDo} onClick={() => {
          dateThingToDoToAdd.current = m.thingToDo;
          timeThingToDoToAdd.current = m.thingToDo;
          thingToDoToRemove.current = m.thingToDo;
        }}>
          <DataList.ItemLabel>Thing To Do:</DataList.ItemLabel>
          <DataList.ItemValue>{m.thingToDo}</DataList.ItemValue>
          <DataList.ItemLabel>Time:</DataList.ItemLabel>
          <DataList.ItemValue>{m.time}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  );

  const printedSaturdayItems = (
    <DataList.Root>
      {saturdayItems.map(m => (
        <DataList.Item key={m.thingToDo} onClick={() => {
          dateThingToDoToAdd.current = m.thingToDo;
          timeThingToDoToAdd.current = m.thingToDo;
          thingToDoToRemove.current = m.thingToDo;
        }}>
          <DataList.ItemLabel>Thing To Do:</DataList.ItemLabel>
          <DataList.ItemValue>{m.thingToDo}</DataList.ItemValue>
          <DataList.ItemLabel>Time:</DataList.ItemLabel>
          <DataList.ItemValue>{m.time}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  );

  const printedSundayItems = (
    <DataList.Root>
      {sundayItems.map(m => (
        <DataList.Item key={m.thingToDo} onClick={() => {
          dateThingToDoToAdd.current = m.thingToDo;
          timeThingToDoToAdd.current = m.thingToDo;
          thingToDoToRemove.current = m.thingToDo;
        }}>
          <DataList.ItemLabel>Thing To Do:</DataList.ItemLabel>
          <DataList.ItemValue>{m.thingToDo}</DataList.ItemValue>
          <DataList.ItemLabel>Time:</DataList.ItemLabel>
          <DataList.ItemValue>{m.time}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  );

  return (
    <html suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Provider>
          <Tabs.Root fitted lazyMount unmountOnExit>
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
          <Wrap>
            <p>What is the item you would like to add?</p>
            <form action={addItem}>
              <Wrap>
                <input name="addItem">
                </input>
                <Button type="submit">
                  Add
                  <RiArrowRightLine />
                </Button>
              </Wrap>
            </form>
          </Wrap>
          <Button onClick={() => {
            setActionBarState(!actionBarState);
          }}>Click for Further Options</Button>
          {printedArr}
          <ActionBar.Root open={actionBarState} lazyMount unmountOnExit>
            <Portal>
              <ActionBar.Positioner>
                <ActionBar.Content>
                  <div>
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
                        Add date <RiArrowRightLine />
                      </Button>
                    </form>
                  </div>
                  <div>
                    <p>Add a time to an item: </p>
                    <form action={addTime}>
                      <label>Time: </label>
                      <input name="addTime">
                      </input>
                      <Button type="submit">
                        Add Time <RiArrowRightLine />
                      </Button>
                    </form>
                  </div>
                  <div>
                    <p>What is the item you would like to remove?</p>
                    <form action={removeItem}>
                      <Button type="submit">
                        Remove
                      </Button>
                    </form>
                  </div>
                </ActionBar.Content>
              </ActionBar.Positioner>
            </Portal>
          </ActionBar.Root>
          <Center>
            <QrCode.Root value="https://github.com/NolanEmery/TodoListApp" size="2xs">
              <QrCode.Frame>
                <QrCode.Pattern />
              </QrCode.Frame>
            </QrCode.Root>
          </Center>
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
