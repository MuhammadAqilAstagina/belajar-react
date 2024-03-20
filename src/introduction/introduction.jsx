// function component
function Introduction(props) {
  return (
    <div>
      <h3>Introduction {props.judul}</h3>
      <p>Perkenalan serta belajar di dalam Sesi {props.judul}</p>
    </div>
  );
}

export default Introduction;
