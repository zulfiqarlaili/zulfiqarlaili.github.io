import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Zul</GradientText> 👋
        </>
      }
      description={
        <>
          Unraveling complex problems and try to find a solution. Transform an
          ideas into lines of code is what I do. From{' '}
          <GradientText>web</GradientText> applications to supporting{' '}
          <GradientText>backend</GradientText>. Ensure the project{' '}
          <GradientText>hosted</GradientText> securely and run like a clockwork
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a className="mx-2" href="https://www.linkedin.com/in/zulfiqarlaili/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a
            className="mx-2"
            href="https://stackoverflow.com/users/9064937/zulfiqar-laili"
          >
            <HeroSocial
              src="/assets/images/stackoverflow-icon.png"
              alt="Stackoverflow icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
