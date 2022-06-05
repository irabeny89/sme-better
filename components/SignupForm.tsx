import Image from "next/image";

export default function SignupForm() {
  return (
    <section className="text-white bg-blue-500 h-full">
      <div className="max-w-xs py-20 px-2 mx-auto">
        <h2 className="font-medium mb-11">SME Better</h2>
        <h3 className="font-medium">Log into your Business Manager</h3>
        <br />
        <form>
          <label>
            <p className="text-slate-100 mb-1">Email Address</p>
            <div>
              <input
                type="email"
                name="email"
                placeholder="someone@email.com"
                className="placeholder:text-stone-300 px-3 py-1 rounded w-full text-black"
              />
            </div>
          </label>
          <br />
          <label>
            <p className="text-slate-100 mb-1">Enter Your Password</p>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="placeholder:text-stone-300 px-3 py-1 rounded w-full text-black"
              />
            </div>
          </label>
          <br />
          <button className="ring-1 ring-slate-200 rounded w-full py-2">
            SIGN IN
          </button>
        </form>
        <br />
        <p className="text-slate-300 text-center">
          Don&apos;t have an account? <b className="text-white">Sign Up</b>
        </p>
        <br />
        <p className="text-center">Forgot password?</p>
        <br />
        <button className="bg-white rounded w-full py-2 text-slate-400">
          <div className="flex justify-center items-center">
            <Image
              src="/logo_google_g_icon.svg"
              width="25"
              height="25"
              alt="google logo icon"
            />{" "}
            <span className="ml-3 mb-1 align-middle">Log in with Google</span>
          </div>
        </button>
      </div>
    </section>
  );
}
