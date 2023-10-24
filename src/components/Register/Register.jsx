import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Select from "react-select";
function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    console.log("test", data);
  };

  console.log("errors", errors);

  const options = [
    { value: "photography", label: "Photography" },
    { value: "writing", label: "Writing" },
    { value: "traveling", label: "Traveling" },
    { value: "reading", label: "Reading" },
    { value: "poetry", label: "Poetry" },
    { value: "chess", label: "Chess" },
  ];
  return (
    <div className="login">
      <div className="container py-5">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="col-sm-12 col-md-6 mx-auto bg-light p-4 rounded rounded-3"
        >
          <h2 className="mb-3">Register</h2>
          <div class="mb-3">
          <label for="username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Enter username"
              {...register("username", {
                required: true,
                pattern:/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
              })}
            />
            {
              errors?.username?.type === "required" && (
                <p className="text-danger small text-start ms-2 mt-2">
                  Username is required.
                </p>
            )}
            {
              errors?.username?.type === "pattern" && (
                <p className="text-danger small text-start ms-2 mt-2">
                  Enter a valid username.
                </p>
            )}
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="text-danger small text-start ms-2 mt-2">
                Email is required.
              </p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className="text-danger small text-start ms-2 mt-2">
                Enter a valid email address.
              </p>
            )}
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              })}
            />
            {errors?.password?.type === "required" && (
              <p className="text-danger small text-start ms-2 mt-2">
                Password is required.
              </p>
            )}
            {errors?.password?.type === "pattern" && (
              <dl className="small ms-2 mt-1">
                <dt className=" text-start">For security purposes:</dt>
                <dd>one lowercase letter (a-z), one uppercase letter (A-Z)</dd>
                <dd>one number (0-9)</dd>
                <dd>one special character (!@#$%^&*)</dd>
                <dd>at least 8 characters long.</dd>
              </dl>
            )}
            <label for="exampleInputPassword2" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword2"
              name="password_repeat"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                /* validate: value =>value === password.current || "The passwords do not match" , */
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i,
              })}
            />
            {errors?.password?.type === "required" && (
              <p className="text-danger small text-start ms-2 mt-2">
                Password is required.
              </p>
            )}
          </div>
          <div className="my-3">
            <Select options={options}
            placeholder="Select hobbies..."
            isMulti
            />
          </div>
          <div class="mb-3 age">
            <input
              type="number"
              class="form-control"
              id="selectAge"
              placeholder="Age:"
              min={0}
              max={99}
              {...register('age' ,{
                required:true,
                minLength:0,
                min:18,
                max:99,
              })}
            />
            {errors?.age?.type==="required"&&(
              <p className="text-danger small text-start ms-2 mt-2">
                required.
              </p>
            )
            }
            {errors?.age?.type==="min"&&(
              <p className="text-danger small text-start ms-2 mt-2">
                Min age is 18!
              </p>
            )
            }
            {errors?.age?.type==="max"&&(
              <p className="text-danger small text-start ms-2 mt-2">
                Max age is 99!
              </p>
            )
            }
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              {...register('checkbox' ,{
                required:true,
              })}
            />
            <label class="form-check-label" for="exampleCheck1">
            "Terms and Conditions"
            </label>
            {errors?.checkbox?.type==="required"&&(
              <p className="text-danger small text-start">
                required.
              </p>
            )
            }
          </div>
          <button type="submit" class="btn btn-primary">
            Register
          </button>
          <div className="register-link d-flex justify-content-around w-75 mt-2">
            <p>Already have an account?</p>
            <Link className="btn-link" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
