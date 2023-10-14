import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Born Date"
        description="Based on numerology given by your birth date. We used it to calculate the elements for you personality. Generate an image as a guide for you to discover your strength and weakness"
        link="https://borndate.web.app"
        img={{ src: '/assets/images/borndate.jpg', alt: 'Borndate' }}
        category={
          <>
            <Tags color={ColorTags.GREEN}>Next.js</Tags>
            <Tags color={ColorTags.SKY}>Tailwind</Tags>
            <Tags color={ColorTags.EMERALD}>FastAPI</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
            <Tags color={ColorTags.YELLOW}>Python</Tags>
          </>
        }
      />
      <Project
        name="Just Type"
        description="Are you having trouble to WhatsApp someone but you don`t want to save their number? Just type their number and hit enter."
        link="/"
        img={{ src: '/assets/images/justtype.jpg', alt: 'JustType' }}
        category={
          <>
            <Tags color={ColorTags.RED}>Angular.js</Tags>
            <Tags color={ColorTags.YELLOW}>Firebase</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="KomunitiChat"
        description="KomunitiChat app brings the community together. A single chat room where members can send messages for the whole group to see"
        link="https://komunitichat.web.app"
        img={{ src: '/assets/images/komunitichat.jpg', alt: 'KomunitiChat' }}
        category={
          <>
            <Tags color={ColorTags.CYAN}>React.js</Tags>
            <Tags color={ColorTags.INDIGO}>Material Design</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Salem Mood Meter"
        description="Helping person with mental illness to show the world their current state of mental without explaining. Simple yet effective."
        link="https://salemmoodmeter.web.app"
        img={{
          src: '/assets/images/salemmoodmeter.jpg',
          alt: 'Salem Mood Meter',
        }}
        category={
          <>
            <Tags color={ColorTags.RED}>Angular.js</Tags>
            <Tags color={ColorTags.YELLOW}>Firebase</Tags>
            <Tags color={ColorTags.INDIGO}>Material Design</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
