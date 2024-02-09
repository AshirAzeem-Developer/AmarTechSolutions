import React, { useEffect } from "react";
// import { TiContacts } from "react-icons/ti";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ContactFormIcon from "../assets/Contact FormIcon.png";
import EmailIcon from "../assets/EmailIcon.png";
// import { Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contactus = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#F8F8F8",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className=" mx-auto lg:py-8 md:py-2">
        <h1 className=" flex items-center justify-center mt-28  font-bold  text-4xl sm:text-5xl lg:text-6xl bg-[#4BB5DE]  py-8 w-full">
          <span className=" p-4" data-aos="slide-down">
            <TfiHeadphoneAlt size={80} />
          </span>
          <span className=" p-4 headerFont" data-aos="slide-down">
            Get in Touch With Us
          </span>
        </h1>
        <div className="mx-12 pt-28 text-center gap-2 text-white grid  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 px-4 items-center justify-evenly">
          <div
            className="flex flex-col items-center justify-center"
            data-aos="zoom-in"
          >
            <img
              src={ContactFormIcon}
              alt=""
              className="w-[60%] md:w-[35%] lg:w-[25%]"
              onClick={handleOpen}
            />

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={style}
                className="rounded-lg md:w-[40%] w-[85%] h-[80%] md:h-[85%] my-18"
              >
                <Typography id="modal-modal-description">
                  <form>
                    <div className="mb-6 ">
                      <label className=" text-black p-4 md:py-6 py-2">
                        Requested Service{" "}
                      </label>
                      <br />
                      <select className="rounded-full border  w-full text-black p-4 shadow-md shadow-slate-200 my-2">
                        <option
                          className="text-black rounded-full"
                          selected
                          value={""}
                        >
                          ------ Select Service ------
                        </option>
                        <option className="text-black rounded-full">
                          Service 1
                        </option>
                        <option className="text-black rounded-full">
                          Service 2
                        </option>
                        <option className="text-black rounded-full">
                          Service 3
                        </option>
                        <option className="text-black rounded-full">
                          Service 4
                        </option>
                      </select>
                    </div>
                    <div className="grid  grid-cols-2 gap-5  md:pt-7 pt-2">
                      <input
                        placeholder="Full Name*"
                        className="rounded-full text-black p-4 shadow-md shadow-slate-200"
                        required
                      />
                      <input
                        placeholder="Country*"
                        required
                        className="rounded-full text-black p-4 shadow-md shadow-slate-200"
                      />
                    </div>
                    <div className="grid  grid-cols-2 gap-5  md:pt-7 pt-2">
                      <input
                        placeholder="Company Name*"
                        className="rounded-full text-black p-4 shadow-md shadow-slate-200"
                        required
                      />
                      <input
                        placeholder="Job Title*"
                        className="rounded-full text-black p-4 shadow-md shadow-slate-200"
                        required
                      />
                    </div>
                    <div className="grid  grid-cols-2 gap-5  md:pt-7 pt-2">
                      <input
                        className="rounded-full text-black p-4 shadow-md shadow-slate-200"
                        placeholder="Email*"
                        variant="outlined"
                        required
                      />
                      <input
                        className="rounded-full text-black p-4 shadow-md shadow-slate-200"
                        placeholder="Phone Number*"
                        variant="outlined"
                        required
                      />
                    </div>
                    <div className="md:pt-5 pt-2">
                      <textarea
                        placeholder="Add Your Message here"
                        multiline
                        rows={3}
                        className="rounded-md text-black p-4 w-full shadow-md shadow-slate-200 "
                        required
                        fullWidth
                      />
                    </div>
                    <div className="text-center">
                      <button className="bg-[#1C98ED] rounded-full p-2 text-1xl mt-2 w-fit px-8 shadow-md shadow-slate-500 my-4">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </Typography>
              </Box>
            </Modal>
            <h2 className=" text-xl  lg:text-2xl bg-[#4BB5DE]  w-fit text-center p-2 rounded-sm px-12 headerFont">
              Contact Form
            </h2>
          </div>
          <div
            className="flex flex-col items-center justify-center "
            data-aos="zoom-in"
          >
            <img
              src={EmailIcon}
              alt=""
              className="w-[60%] md:w-[35%] lg:w-[25%]"
            />

            <h2 className="text-xl lg:text-2xl bg-[#4BB5DE]  w-fit text-center p-2 rounded-sm px-12 headerFont">
              Drop us an Email
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
