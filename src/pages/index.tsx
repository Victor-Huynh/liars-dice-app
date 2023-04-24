import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignUp,
  useUser,
} from "@clerk/nextjs";
import { type NextPage } from "next";
import NavigationBar from "~/components/navigationbar";
import { RouterOutputs, api } from "~/utils/api";

// type PostWithUser = RouterOutputs["posts"]["getAll"][number];
// const PostView = (props: PostWithUser) => {
//   const { post } = props;
//   return (
//     <div key={post.id} className="border-b border-slate-400 p-8">
//       {post.content}
//     </div>
//   );
// };

const Home: NextPage = () => {
  // const user = useUser();
  // const hello = api.example.hello;
  // console.log(hello);
  return (
    <>
      <NavigationBar />
      <main className="">
        <header>
          <div>content</div>
          <div>content</div>
          <div>content</div>
          <div>content</div>
        </header>
      </main>
    </>
  );
};

export default Home;
