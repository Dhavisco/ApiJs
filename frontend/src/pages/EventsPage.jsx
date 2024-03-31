import { Link } from "react-router-dom";

const EVENTS = [
  { id: "e1", title: "Event 1" },
  { id: "e2", title: "Event 2" },
  { id: "e3", title: "Event 3" },
];

const EventsPage = () => {
  return (
    <>
      <h1> EventsPage</h1>
      <ul>
{EVENTS.map(eve => <li key={eve.id}>
<Link to ={eve.id}>{eve.title}</Link>
</li>)}
      </ul>
    </>
  );
}

export default EventsPage