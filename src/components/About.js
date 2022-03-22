import React, { useState } from "react";

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({ color: "white", backgroundColor: "black" });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({ color: "black", backgroundColor: "white" });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };
  document.title = "TextUtils | About";
  return (
    <>
      <div
        className={`container py-4 my-4 
          text-${props.mode === "light" ? "dark" : "light"}
          bg-${props.mode === "light" ? "light" : "dark"}`}
      >
        <h2
          className={`my-4 
          text-${props.mode === "light" ? "dark" : "light"}
          bg-${props.mode === "light" ? "light" : "dark"}`}
        >
          About TextUtils
        </h2>
        <div
          className={`accordion 
        text-${props.mode === "light" ? "dark" : "light"}
          bg-${props.mode === "light" ? "light" : "dark"}`}
          id="accordionExample"
        >
          <div
            className={`accordion-item text-${
              props.mode === "light" ? "dark" : "light"
            }
          bg-${props.mode === "light" ? "light" : "dark"}`}
          >
            <h2
              className={`accordion-header text-${
                props.mode === "light" ? "dark" : "light"
              }
          bg-${props.mode === "light" ? "light" : "dark"}`}
              id="headingTwo"
            >
              <button
                className={`accordion-button collapsed text-${
                  props.mode === "light" ? "dark" : "light"
                }
                bg-${props.mode === "light" ? "light" : "dark"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Why I created this?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className={`accordion-collapse collapse show text-${
                props.mode === "light" ? "dark" : "light"
              }
              bg-${props.mode === "light" ? "light" : "dark"}`}
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body text-${
                  props.mode === "light" ? "dark" : "light"
                }
          bg-${props.mode === "light" ? "light" : "dark"}`}
              >
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div
            className={`accordion-item text-${
              props.mode === "light" ? "dark" : "light"
            }
          bg-${props.mode === "light" ? "light" : "dark"}`}
          >
            <h2
              className={`accordion-header text-${
                props.mode === "light" ? "dark" : "light"
              }
          bg-${props.mode === "light" ? "light" : "dark"}`}
              id="headingThree"
            >
              <button
                className={`accordion-button collapsed text-${
                  props.mode === "light" ? "dark" : "light"
                }
                bg-${props.mode === "light" ? "light" : "dark"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Utility
              </button>
            </h2>
            <div
              id="collapseThree"
              className={`accordion-collapse collapse show text-${
                props.mode === "light" ? "dark" : "light"
              }
              bg-${props.mode === "light" ? "light" : "dark"}`}
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body text-${
                  props.mode === "light" ? "dark" : "light"
                }
          bg-${props.mode === "light" ? "light" : "dark"}`}
              >
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div onClick={toggleStyle} className="container py-4" style={myStyle}>
        <button className="btn btn-outline-dark" style={myStyle}>
          {btnText}
        </button>
      </div> */}
    </>
  );
}
