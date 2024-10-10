import Loader from "./Loader";

const Saved = ({ saved, loader }) => {
  return (
    <>
      <div className="container-fluid text-center" id="top">
        {loader ? (
          <Loader />
        ) : (
          <div className="row">
            <div className="col d-flex flex-wrap gap-4 justify-content-center">
            {saved.map((image) => (
              <div key={image.id}>
                <img className="border w-100" src={image.src.medium} alt={image.photographer} />
              </div>
            ))}
            </div>
          </div>
        )}

        <div>
            {saved.length != 0 && (
                <a href="#top" className="btn btn-warning my-4">
                Back to Top
                </a>
            )}
        </div>
      </div>
    </>
  );
};
export default Saved;
