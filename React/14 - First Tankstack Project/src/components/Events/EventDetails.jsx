import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import Header from "../Header.jsx";
import { fetchEvent, deleteEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  const { mutate, isPending: deletepending } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  function handleDelete() {
    mutate({ id: params.id });
  }

  let content;

  if (isPending || deletepending) {
    content = (
      <div id='event-details-content' className=' center'>
        {isPending && <p>Fetching event data ...</p>}
        {deletepending && <p>Deleting event data ...</p>}
      </div>
    );
  }

  if (isError) {
    content = (
      <div id='event-details-content' className=' center'>
        <ErrorBlock
          title='failed to load event'
          message={
            error.info?.message ||
            "failed to fetch events data pls try again later"
          }
        />
      </div>
    );
  }

  if (data && !deletepending) {
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleDelete}>Delete</button>
            <Link to='edit'>Edit</Link>
          </nav>
        </header>
        <div id='event-details-content'>
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id='event-details-info'>
            <div>
              <p id='event-details-location'>{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {data.date} @ {data.time}
              </time>
            </div>
            <p id='event-details-description'>{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to='/events' className='nav-item'>
          View all Events
        </Link>
      </Header>
      <article id='event-details'>{content}</article>
    </>
  );
}
