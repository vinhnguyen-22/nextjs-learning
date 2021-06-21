import Head from "next/head";
import router from "next/router";

const user = () => {
  let firstName: String = "Vinh";
  let lastName: String = "Nguyen";
  let isLoading: boolean = true;

  const handleOnclick = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>User Details</title>
      </Head>
      <main>
        <div className="container-user">
          <h1 className="user-name">
            {firstName} {lastName} user detail
          </h1>
          <button className="btn" onClick={handleOnclick}>
            {" "}
            Go to home{" "}
          </button>
        </div>
      </main>
    </>
  );
};
export default user;
