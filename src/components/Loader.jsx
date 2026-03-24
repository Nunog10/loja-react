function Loader({ message = 'A carregar...' }) {
  return (
    <div className="text-center my-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">{message}</span>
      </div>
      <p className="mt-3">{message}</p>
    </div>
  );
}

export default Loader;