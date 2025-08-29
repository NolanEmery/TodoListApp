'use client'
import { useReducer, useRef, useState } from 'react';
import { Provider } from "@/components/ui/provider";
import { Tabs, Button, ActionBar, Portal, Wrap, DataList, Center, Stack, CloseButton, RadioGroup, HStack } from "@chakra-ui/react";
import { RiArrowRightLine } from 'react-icons/ri';
import { Prose } from '@/components/ui/prose';

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
    <Center>
      <DataList.Root>
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
    </Center>
  );


  const printedMondayItems = (
    <Center>
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
    </Center>
  );

  const printedTuesdayItems = (
    <Center>
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
    </Center>
  );

  const printedWednesdayItems = (
    <Center>
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
    </Center>
  );

  const printedThursdayItems = (
    <Center>
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
    </Center>
  );

  const printedFridayItems = (
    <Center>
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
    </Center>
  );

  const printedSaturdayItems = (
    <Center>
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
    </Center>
  );

  const printedSundayItems = (
    <Center>
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
    </Center>
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
          <Center>
            <Stack>
              <HStack>
                <Prose>
                  <h4>What is the item you would like to add?</h4>
                </Prose>
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
              </HStack>
              <Button onClick={() => {
                setActionBarState(true);
              }}>Click for Further Options</Button>
              <Prose>
                <h4>Click on Item to Activate</h4>
              </Prose>
            </Stack>
          </Center>
          {printedArr}
          <ActionBar.Root open={actionBarState} lazyMount unmountOnExit>
            <Portal>
              <ActionBar.Positioner>
                <ActionBar.Content>
                  <Wrap>
                    <Prose>
                      <h4>Add a date to an item: </h4>
                    </Prose>
                    <form action={addDate}>
                      <label>Date: </label>
                      <RadioGroup.Root name="addDate">
                        <RadioGroup.Item value="Monday">
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>Monday</RadioGroup.ItemText>
                        </RadioGroup.Item>
                        <RadioGroup.Item value="Tuesday">
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>Tuesday</RadioGroup.ItemText>
                        </RadioGroup.Item>
                        <RadioGroup.Item value="Wednesday">
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>Wednesday</RadioGroup.ItemText>
                        </RadioGroup.Item>
                        <RadioGroup.Item value="Thursday">
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>Thursday</RadioGroup.ItemText>
                        </RadioGroup.Item>
                        <RadioGroup.Item value="Friday">
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>Friday</RadioGroup.ItemText>
                        </RadioGroup.Item>
                        <RadioGroup.Item value="Saturday">
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>Saturday</RadioGroup.ItemText>
                        </RadioGroup.Item>
                        <RadioGroup.Item value="Sunday">
                          <RadioGroup.ItemHiddenInput />
                          <RadioGroup.ItemIndicator />
                          <RadioGroup.ItemText>Sunday</RadioGroup.ItemText>
                        </RadioGroup.Item>
                      </RadioGroup.Root>
                      <Button type="submit">
                        Add date <RiArrowRightLine />
                      </Button>
                    </form>
                  </Wrap>
                  <Wrap>
                    <Prose>
                      <h4>Add a time to an item: </h4>
                    </Prose>
                    <form action={addTime}>
                      <label>Time: </label>
                      <input name="addTime">
                      </input>
                      <Button type="submit">
                        Add Time <RiArrowRightLine />
                      </Button>
                    </form>
                  </Wrap>
                  <Wrap>
                    <Prose>
                      <h4>What is the item you would like to remove?</h4>
                    </Prose>
                    <form action={removeItem}>
                      <Button type="submit">
                        Remove
                      </Button>
                    </form>
                  </Wrap>
                  <CloseButton onClick={() => {
                    setActionBarState(false);
                  }}></CloseButton>
                </ActionBar.Content>
              </ActionBar.Positioner>
            </Portal>
          </ActionBar.Root>
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
