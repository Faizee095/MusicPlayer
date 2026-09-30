const Error = ({ message = 'Something went wrong while loading music.', error }) => {
  const detail = error?.data?.detail || error?.data?.message;
  const status = error?.status;
  return <div role="alert" className="my-8 rounded-xl border border-rose-400/30 bg-rose-400/10 p-5 text-rose-200">
    <p>{message}</p>
    {(detail || status) && <p className="mt-2 text-sm text-rose-100/70">{status ? `API ${status}: ` : ''}{typeof detail === 'string' ? detail : 'The music service did not return usable data.'}</p>}
  </div>;
};
export default Error;
