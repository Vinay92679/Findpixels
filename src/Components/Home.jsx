import Loader from "./Loader";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ Images, loader, saved, setSaved }) => {

  const saveImage = (img) => {
    let flag = true;

    if (saved !== null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id == img.id) {
          flag = false;
        //   console.log("image is already exits");
        toast.info('image already saved', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          break;
        }
      }
    }
    if (flag) {
      setSaved([...saved, img]);
      
      toast.success('image saved', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  };

  return (
    <>
    <ToastContainer/>
      <div className="container-fluid text-center" id="top">
        {loader ? (
          <Loader />
        ) : (
          <div className="row">
            <div className="col d-flex flex-wrap justify-content-center gap-4">
            {Images.map((image) => (
              <div key={image.id} onClick={() => saveImage(image)}>
                <img className="border w-100" src={image.src.medium} alt={image.photographer} />
              </div>
            ))}
            </div>
          </div>
        )}

        <div>
          {Images.length != 0 && (
            <a href="#top" className="btn btn-warning my-4">
              Back to Top
            </a>
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
