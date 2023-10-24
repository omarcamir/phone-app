import { useForm, } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,handleSubmit,watch,formState: { errors },} = useForm();

  const onSubmitForm = (data) => {
    console.log("test",data);
  };
  console.log("errors",errors);
  return (
    <div className="login">
      <div className="container py-5">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="col-sm-12 col-md-6 mx-auto bg-light p-4 rounded rounded-3">
          <h2 className="mb-3">Login</h2>
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
              {...register("email",{
                required: true,
                pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
              />
              {
                errors?.email?.type === "required" &&
                <p className="text-danger small text-start ms-2 mt-2">Email is required.</p>
              }
              {
                errors?.email?.type === "pattern" &&
                <p className="text-danger small text-start ms-2 mt-2">Enter a valid email address.</p>
              }
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
              {...register("password",{
                required: true,
                pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i,
              })}
            />
            {
                errors?.password?.type === "required" &&
                <p className="text-danger small text-start ms-2 mt-2">Password is required.</p>
              }
            {
                errors?.password?.type === "pattern" &&
                  <dl className="small ms-2 mt-1">
                    <dt className=" text-start">For security purposes:</dt>
                    <dd>one lowercase letter (a-z), one uppercase letter (A-Z)</dd>
                    <dd>one number (0-9)</dd>
                    <dd>one special character (!@#$%^&*)</dd>
                    <dd>at least 8 characters long.</dd>
                  </dl>
              }
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
          <div className="register-link d-flex justify-content-around w-50 mt-2">
            <p>Don't have an account?</p>
          <Link className="btn-link" to={'/register'}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
