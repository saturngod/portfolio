import Layout from "../components/layout";
import PhotoBar from "../components/photo_bar";
import Tech from "../components/tech";
import DevOps from "../components/devops";
import Education from "../components/education";
import Projects from "../components/projects";
import UI from "../components/ui";
export default function Home({ user }) {
  return (
    <Layout title="Htain Lin Shwe">
      <div className="divide-y divide-dashed">
        <div className="mb-2">
          <PhotoBar
            name="Htain Lin Shwe"
            description="Tech Lead, iOS/Flutter/PHP Developer"
          ></PhotoBar>
        </div>
        <div className="pt-4 pb-4 text-sm px-2 lg:px-0 text-justify"></div>
        <div className="flex pt-4 flex-col md:flex-row w-screen m-3">
          <Education></Education>
          <Tech></Tech>
          <DevOps></DevOps>
          <UI></UI>
          <Projects follower={user.followers}></Projects>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await fetch(`https://api.github.com/users/saturngod`);
    const user = await res.json();

    return {
      props: { user },
    };
  } catch (err) {
    console.error(err);
  }
}
