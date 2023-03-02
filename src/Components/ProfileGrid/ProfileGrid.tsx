import "./ProfileGrid.css";

import TypedText from "../TypedText/TypedText";

import { randomEyeColor } from "../../utils/misc";

type ProfileGridProps = {
  agent?: Object | any;
  children?: Array<JSX.Element>;
};

const ProfileGrid = ({ agent, children }: ProfileGridProps) => {
  if (!agent) return <p>... loading</p>;
  console.log(agent);
  return (
    <div className="profilegrid">
      <div className="profile-picture">
        <img src={agent.picture.large} />
        <TypedText
          isTitle
          texts={[
            "Codename: ...Loading",
            `Codename: ${agent.name.title} ${agent.login.username}`,
          ]}
        />
      </div>
      <div className="profile-description">
        <TypedText texts={[`First name: ${agent.name.first}`]} />
        <TypedText texts={[`Last name: ${agent.name.last}`]} />
        <TypedText texts={[`City: ${agent.location.city}`]} />
        <TypedText texts={[`State: ${agent.location.state}`]} />
        <TypedText texts={[`Country: ${agent.location.country}`]} />
        <TypedText texts={[`Gender: ${agent.gender}`]} />
        <TypedText texts={[`Date of birth: ${agent.dob.date}`]} />
        <TypedText texts={[`Eye color: ${randomEyeColor}`]} />
        <TypedText
          texts={[`Timezone offset: ${agent.location.timezone.offset}`]}
        />
        <TypedText
          texts={[
            `Timezone description: ${agent.location.timezone.description}`,
          ]}
        />
      </div>
    </div>
  );
};

export default ProfileGrid;
