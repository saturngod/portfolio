import Layout from "../components/layout";
import PhotoBar from "../components/photo_bar";
import Tech from "../components/tech";
import DevOps from "../components/devops";
import Education from "../components/education";
import Projects from "../components/projects";
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
        <div className="pt-4 pb-4 text-sm">
          Founded COMQUAS at 2016. We focus on the mobile app development. For
          the backend, we are using the PHP laravel. Some of the projects are
          using the Golang. Sometime we use python, nodejs at the service.
          Working as not only founder but also Tech lead for my own startup. We
          have few product like SMSKit, SMS services for our clients.
        </div>
        <div className="flex pt-4">
          <Education></Education>
          <Tech></Tech>
          <DevOps></DevOps>
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
