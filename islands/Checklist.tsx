import ChecklistItem from "./ChecklistItem.tsx"
import useConfettiCheck from "../components/hooks/useConfettiCheck.ts";

const data = [
  {
    name: "Sleep",
    description: "Did you sleep well last night? The average adult requires 7-9 hours."
  },
  {
    name: "Read",
    description: "Grab a book, genre doesn’t matter. Read through 10 pages."
  },
  {
    name: "Workout",
    description: "Exercise, either cardio or weightlifting. At least 30 minutes, high intensity."
  },
  {
    name: "Journal",
    description: "What's the highlight of your day? What's upsetting you? Journal at least 1 page."
  },
  {
    name: "Dulce",
    description: "Make a random someone’s day. Compliment a stranger. Do at least 1 kind thing."
  },
  {
    name: "Food",
    description: "Eat what makes you feel good. Minimum of 2 real meals and 1 snack. "
  },
  {
    name: "Socialize",
    description: "Call a friend, parent or sibling. Tell them you love them."
  },
  {
    name: "Clean",
    description: "A neat room leads to a calm mind. Tidy up a bit."
  },
  {
    name: "Hobby",
    description: "Practice a hobby. Guitar, knitting, music production, anything! At least 30 minutes."
  },
  {
    name: "Goal",
    description: "Work towards a long term goal. At least 30 minutes."
  },
]

export default function ChecklistDescription() {
  const {numberClicked, setNumberClicked} = useConfettiCheck();
  return (
    <div className="lg:w-2/3 p-4 mx-auto mt-8 h-full flex flex-col h-full">
      <div className="flex lg:flex-row flex-col gap-4 items-center">
        <h1 className="font-normal text-2xl">Checklist</h1>
        <p style={
          {
            color: "#555555"
          }
        } className="font-normal text-base">List is loosely ordered but should attempt to be followed in sequence. </p>
      </div>
      <div className="flex flex-col gap-4 mt-4 items-center h-full">
        {data.map((item) => {
          return (
            <ChecklistItem name={item.name} description={item.description} setNumberClicked={setNumberClicked} />
          )
        })}
      </div>
    </div>
  )
}