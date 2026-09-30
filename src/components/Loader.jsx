const Loader = ({ title = 'Loading music…' }) => <div className="flex min-h-48 items-center justify-center gap-3 text-cyan-200" role="status"><span className="h-6 w-6 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" />{title}</div>;
export default Loader;
