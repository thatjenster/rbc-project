export interface TeamMember {
  name: string;
  title: string;
  designation: string | string[];
  headshot: string;
  bio: string;
  number: string;
  email: string;
  linkedin: string;
}

export interface BioData {
  section_intro: {
    title: string;
    text: string;
  }[];
  team: TeamMember[];
  section_cta: {
    title: string;
    text: string;
    link: {
      url: string;
      title: string;
    };
  }[];
}