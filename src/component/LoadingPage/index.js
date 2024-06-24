import './styles.css';

const Loading = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center loader-container">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-2xl font-semibold">Loading...</h2>
        <p className="text-gray-500">Please wait while we fetch the data.</p>
      </div>
    </div>
  );
};

export default Loading;