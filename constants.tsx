
import React from 'react';
import { ExperienceItem, ProjectItem, BlogPost, NavLink } from './types';
import CodeBlockComponent from './components/ui/CodeBlock';
import {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  Palette,
  Cloud,
  Terminal,
  Cpu,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  Laptop,
  Mouse,
  Headphones,
  Smartphone,
  Coffee,
  Sparkles,
  ShieldAlert,
  ShieldCheck,
  Lock,
  Unlock,
  ArrowRight,
  Zap,
  Layers,
  Activity,
  Webhook
} from 'lucide-react';

const CodeBlock = (code: string) => React.createElement(CodeBlockComponent, { code });

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', path: '/#experience' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Projects', path: '/projects' },
];

const XIcon = ({ size = 24, className = "", ...props }: { size?: number | string, className?: string, [key: string]: any }) =>
  React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    ...props
  }, React.createElement("path", {
    d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
  }));

export const SOCIAL_LINKS = [
  { label: 'X (Twitter)', href: 'https://x.com/zxhandev', icon: XIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/zxhan', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/zxhan', icon: Github },
  { label: 'YouTube', href: 'https://www.youtube.com/@Foltairez', icon: Youtube },
  { label: 'Instagram', href: 'https://www.instagram.com/zxhandev.in?igsh=MXF3OXNobmFvOTd5aQ%3D%3D&utm_source=qr', icon: Instagram },
  { label: 'Email', href: 'mailto:zeeshan89819@gmail.com', icon: Mail },
];

export const SPOTIFY_CONFIG = {
  CLIENT_ID: process.env.REACT_APP_SPOTIFY_CLIENT_ID || '',
  CLIENT_SECRET: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET || '',
  REFRESH_TOKEN: process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN || '',
};

export const TECH_ICONS: Record<string, any> = {
  'React': Code2,
  'Next.js': LayoutTemplate,
  'Node.js': Server,
  'PostgreSQL': Database,
  'MongoDB': Database,
  'Figma': Palette,
  'AWS': Cloud,
  'TypeScript': Terminal,
  'Tailwind': Palette,
  'Go': Cpu,
  'AI': Sparkles,
  'Supabase': Database
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-2',
    company: 'Independent',
    role: 'Frontend / Full-Stack Developer',
    status: 'Working',
    location: 'Remote',
    period: '2025 – Present',
    description: [
      'Designed and developed complete web applications as a solo developer.',
      'Built production-ready UIs using Next.js, TypeScript, and Tailwind CSS.',
      'Created AI-powered tools such as resume builders, interview preparation platforms, and career utilities.',
      'Handled full project flow: idea → design → development → deployment.',
      'Integrated external APIs and AI services to add real-world functionality.',
      'Continuously improving code quality, UI/UX, and performance.'
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'AI'],
    logo: 'IF'
  },
  {
    id: 'exp-1',
    company: 'Independent',
    role: 'Web Developer (Project-Based Learning)',
    status: 'Past',
    location: 'Remote',
    period: '2024 – 2025',
    description: [
      'Started learning and practicing web development through hands-on projects.',
      'Built multiple small to mid-scale web applications to understand real workflows.',
      'Focused mainly on frontend development using Next.js, Tailwind CSS, and basic TypeScript.',
      'Learned how to structure pages, components, and reusable UI elements.',
      'Gained practical understanding of deployment, hosting, and basic debugging.',
      'Improved problem-solving skills by building, breaking, and fixing real features.'
    ],
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    logo: 'IW'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'p1',
    title: 'AI Resume Builder',
    description: 'An intelligent platform for crafting professional resumes with AI-generated content and precision formatting.',
    imageUrl: 'https://ik.imagekit.io/ioktbcewp/844shots_so.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'AI'],
    status: 'Live',
    link: 'https://www.resumebuilderaizx.xyz/',
    featured: true
  },
  {
    id: 'p2',
    title: 'AI Interview Coach Pro',
    description: 'An advanced AI-powered interview coaching platform that uses Gemini Pro to provide real-time feedback, resume analysis, and tailored interview simulations.',
    imageUrl: 'https://ik.imagekit.io/ioktbcewp/148shots_so.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'AI'],
    status: 'Live',
    link: 'https://www.aiinterviewzx.xyz/',
    featured: true
  },
  {
    id: 'p3',
    title: 'PathFinder AI',
    description: 'An AI-powered career modeling platform that helps users architect their future with precision growth options and career models.',
    imageUrl: '/images/projects/pathfinder.jpg',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    status: 'Live',
    link: 'https://www.pathfinderaizx.xyz/',
    featured: true
  },
  {
    id: 'p4',
    title: 'FFMax Arena',
    description: 'A dedicated esports tournament platform for Free Fire Max players, featuring real-time matchmaking, leaderboards, and automated tournament management.',
    imageUrl: 'https://ik.imagekit.io/ioktbcewp/485_1x_shots_so.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    status: 'Live',
    link: 'https://www.ffmaxarenazx.xyz/',
    featured: true
  }
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: 'b1',
    title: 'Mastering Framer Motion: A Complete Guide to Creating Stunning Animations in React',
    description: 'A deep dive into advanced orchestration, layout isolation, and scroll-linked animations in React.',
    date: 'December 14, 2025',
    tags: ['Framer Motion', 'Animation', 'UI/UX'],
    imageUrl: 'https://ik.imagekit.io/ioktbcewp/ChatGPT%20Image%20Dec%2014,%202025,%2001_45_08%20PM.png',
    likes: 312,
    views: 1240,
    comments: [
      { id: 'c1', author: 'Alex Rivera', text: 'This orchestration guide is a lifesaver! Finally understood staggering.', date: 'Dec 15, 2025' },
      { id: 'c2', author: 'Sarah Chen', text: 'Can you cover useReducedMotion in the next one?', date: 'Dec 16, 2025' }
    ],
    content: (
      <div className="space-y-12">
        <section>
          <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            In modern web development, animation is no longer a luxury—it’s an expectation. Smooth transitions, subtle motion, and interactive feedback significantly enhance user experience. For React developers, Framer Motion has emerged as the most powerful and developer-friendly animation library.
          </p>
          <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
            This blog will take you from basic concepts to advanced techniques, helping you truly master Framer Motion.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">What Is Framer Motion?</h2>
          <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
            Framer Motion is an open-source animation library for React created by Framer. It allows developers to create smooth, declarative animations using simple props instead of complex CSS or JavaScript logic.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Why Framer Motion?</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>Built specifically for React</li>
            <li>Simple and declarative API</li>
            <li>Excellent performance</li>
            <li>Supports gestures, transitions, layout animations, and page transitions</li>
            <li>Works seamlessly with modern frameworks like Next.js</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Installing Framer Motion</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">To get started, install Framer Motion using npm or yarn:</p>
          <CodeBlockComponent code={`npm install framer-motion`} />
          <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-400">Then import it into your component:</p>
          <CodeBlockComponent code={`import { motion } from "framer-motion";`} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Understanding the motion Component</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">Framer Motion works by replacing regular HTML elements with motion components.</p>
          <CodeBlockComponent code={`<motion.div />
<motion.button />
<motion.h1 />`} />
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">These components accept animation-related props such as initial, animate, and transition.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Your First Animation</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">Let’s create a simple fade-in animation:</p>
          <CodeBlockComponent code={`<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  Hello Framer Motion!
</motion.div>`} />
          <div className="mt-6 space-y-2">
            <p className="font-bold text-zinc-900 dark:text-white">Key Concepts:</p>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400">
              <li><strong>initial</strong> – starting state</li>
              <li><strong>animate</strong> – final state</li>
              <li><strong>transition</strong> – how the animation behaves</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Animating Position, Scale, and Rotation</h2>
          <CodeBlockComponent code={`<motion.div
  animate={{
    x: 100,
    scale: 1.2,
    rotate: 45
  }}
  transition={{ duration: 0.5 }}
/>`} />
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">You can animate: x, y, scale, rotate, opacity, and backgroundColor.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Transitions and Easing</h2>
          <CodeBlockComponent code={`transition={{
  duration: 0.8,
  ease: "easeInOut"
}}`} />
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">Popular easing options: linear, easeIn, easeOut, easeInOut, or custom cubic-bezier values.</p>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">You can also use spring animations for more natural motion:</p>
          <CodeBlockComponent code={`transition={{ type: "spring", stiffness: 100 }}`} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Hover and Tap Animations</h2>
          <CodeBlockComponent code={`<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  Click Me
</motion.button>`} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Variants: Writing Clean and Scalable Animations</h2>
          <CodeBlockComponent code={`const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

<motion.div
  variants={boxVariants}
  initial="hidden"
  animate="visible"
>
  Animated Box
</motion.div>`} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Staggered Animations</h2>
          <CodeBlockComponent code={`const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};`} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Layout Animations</h2>
          <CodeBlockComponent code={`<motion.div layout />`} />
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">Powerful for: Expanding cards, Reordering lists, and Dynamic UI changes.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Page Transitions with AnimatePresence</h2>
          <CodeBlockComponent code={`import { AnimatePresence } from "framer-motion";

<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</AnimatePresence>`} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Performance Best Practices</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>Prefer transform animations (x, scale) over layout properties</li>
            <li>Use variants for complex animations</li>
            <li>Avoid unnecessary re-renders</li>
            <li>Combine Framer Motion with CSS for static styling</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">When Should You Use Framer Motion?</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>Landing pages</li>
            <li>Dashboards</li>
            <li>Web apps</li>
            <li>Interactive UI components</li>
            <li>Portfolio websites</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Final Thoughts</h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            Framer Motion transforms animation from a painful task into a creative and enjoyable experience. Its declarative syntax, React-first design, and powerful features make it the best animation library in the React ecosystem.
          </p>
        </section>
      </div>
    )
  },
  {
    id: 'b2',
    title: 'What is taste and how can you develop it?',
    description: 'Deconstructing the psychological and practical bridge between talent and intuition in modern interface design.',
    date: 'December 7, 2025',
    tags: ['Frontend', 'Design', 'Philosophy'],
    imageUrl: 'https://ik.imagekit.io/ioktbcewp/ChatGPT%20Image%20Dec%2014,%202025,%2012_38_28%20PM.png',
    likes: 452,
    views: 2840,
    comments: [
      { id: 'c1', author: 'Jordan M.', text: 'The "100 Reps" rule changed my workflow.', date: 'Dec 8, 2025' }
    ],
    content: (
      <div className="space-y-12">
        <p className="italic text-zinc-500 border-l-4 border-zinc-200 dark:border-zinc-700 pl-4 py-2">
          Hey just a heads up this blog is heavily inspired by <a href="https://emilkowal.ski/" target="_blank" rel="noreferrer" className="underline hover:text-primary transition-colors">Emil Kowalski</a>, <a href="https://www.joshwcomeau.com/" target="_blank" rel="noreferrer" className="underline hover:text-primary transition-colors">Josh W. Comeau</a>, and <a href="https://manuarora.in/" target="_blank" rel="noreferrer" className="underline hover:text-primary transition-colors">Manu Arora</a>'s tweets, blogs or videos.
        </p>

        <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
          With my experiences and how I improved my <strong>taste of design</strong>. And how you can too.
        </p>
        <p className="text-sm text-zinc-500">Also if you like this blog do its a reaction or comment down below or follow me on my socials</p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">What is it?</h2>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          You must be thinking what it can be? Is it something people born with? Is it something only creative people know? Is it something only <em>special</em> people thing?
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          And the answer is <strong>NO</strong> its not its not something you born with and nor its a super power
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          So what it is exactly <strong>taste</strong> is
        </p>
        <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl my-8">
          <p className="text-lg italic text-zinc-700 dark:text-zinc-300">
            Its something i call <strong>Intuition</strong>. A intuition of this doesn't feel right. A intuition of something is off. A intuition of this can be improved i believe.
          </p>
        </div>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          Yeah thats it.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          And the best part, You can train yourself to be <strong>intuitive</strong> and in this blog i'll go through the process, importance of intuition, how to practice it and how to implement it.
        </p>

        <p className="italic text-zinc-500 mt-12 text-sm">selfish auto-plug coming</p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          Hey i'm Zxhan, and i'm a developer coding over <strong>3 years</strong> now.
          If you are interested more in my journey then read <a href="/blogs/how-to-be-me" className="underline hover:text-primary">How to be me blog</a>.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-white">My Journey</h3>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          I'm a full stack developer, but I never tried doing frontend seriously. But i used to have this intuition of this can be improved or i don't like this thing i should do that instead and my intuition was coming from because I had a background in <strong>graphic designing</strong> and <strong>video editing</strong>, I naturally had a better taste for design by default. (developed over <strong>2 year</strong> of span)
        </p>

        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          However, that taste is not something I acquired just because I had done graphic design or video editing.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          The taste I have acquired is because my eye was trained over time by actually consuming good content from great designers, reading design theories and design patterns, and understanding what makes a good design.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          What makes a composition so good in a video, what is framing, what is cinematic and what is cheap.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          And no you don't need to learn graphic designing, video editing for that and not even need to learn design concepts or theory to get started
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          And also It's not a very mathematical thing, but in this blog, I will tell you things that will make you more <strong>intuitive</strong>.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Can you improve your taste?</h2>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          A lot of people think that taste is a <strong>personal preference</strong>.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          If that were true, there would be <strong>no good or bad design</strong>, as it would just be everyone's personal preference.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          Someone could have added a red background on their blog or a green background with yellow text, justifying it as their personal preference.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          Therefore, we cannot agree that taste is purely a personal preference because whenever you see a <strong>good design</strong>, everyone admires it.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400 font-medium">
          Everyone likes the good design.
        </p>

        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          If we take the example of <a href="https://linear.app" className="underline hover:text-primary">Linear</a>, or Apple's products, you will notice a <strong>consistent sense of design</strong>.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          There is a <strong>distinct taste</strong> in every single thing.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          Apple's optimistic UI, for instance, is the <strong>best</strong> I have seen so far.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          And Linear's animations are among the <strong>greatest</strong>, because there is something in their taste that makes them stand out and feel good.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          Same goes to artist like <strong>da Vinci</strong> most of us agree that he was a great artist.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          So we can say taste is <strong>not</strong> a personal preference.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">The "100 Reps" Rule</h2>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          So how do you actually get better? You reproduce. You copy.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          Recreate 100 high-quality components from companies like Linear, Stripe, or Vercel. Don't look at their code first. Compete with them. Compare your padding, your font-weights, and your animation curves. This iterative comparison is where taste is born. It's about building your internal library of 'what looks right'.
        </p>

        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          If you look at the example of my first portfolio website, you would notice it was just <strong>weird</strong>.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400 font-bold">
          It was awful.
        </p>
        <div className="p-8 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-2xl my-8 text-center flex flex-col items-center justify-center min-h-[200px] border border-red-500/30">
          <div className="text-6xl mb-4">🤮</div>
          <p className="text-zinc-800 dark:text-white font-heading font-bold text-2xl mb-2">
            My First Portfolio
          </p>
          <p className="text-sm text-zinc-500">Bad gradients. Terrible colors. Zero hierarchy.</p>
        </div>

        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          You can clearly see the flaws: <strong>bad gradients</strong>, and the <strong>worst color harmony</strong> imaginable.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          The typography was <strong>not that great</strong>.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          It was <strong>not following any design rules or patterns</strong>.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          But when I improved my craft and my design sense, I realized how I could improve it further.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          You can see my current portfolio as a reference.
        </p>
        <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
          I created several portfolios in between. I made around <strong>six to seven portfolios</strong> before making this.
        </p>
      </div>
    )
  },
  {
    id: 'b3',
    title: 'A Crash Course in Go (Golang)',
    description: 'Understanding the M:N scheduler, CSP concurrency, and why Go is the backend engine for 2026.',
    date: 'October 2, 2025',
    tags: ['Go', 'Backend', 'Engineering'],
    imageUrl: 'https://ik.imagekit.io/ioktbcewp/ChatGPT%20Image%20Dec%2014,%202025,%2001_00_10%20PM.png',
    likes: 215,
    views: 1850,
    comments: [],
    content: (
      <div className="space-y-12">
        <section>
          <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            Go, often called Golang, is a fast, simple, and powerful programming language created by Google. It’s widely used for backend systems, cloud services, DevOps tools, and blockchain infrastructure—which makes it a great choice for modern developers.
          </p>
          <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
            This crash course will cover: Why Go exists, Core syntax, Concurrency (Go’s superpower), and more.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Why Go?</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">Go was designed to solve real-world problems faced by large systems. It is:</p>
          <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
            <li><span className="font-bold">Fast:</span> Compiled language for high performance.</li>
            <li><span className="font-bold">Simple:</span> Minimal syntax for better readability.</li>
            <li><span className="font-bold">Concurrent:</span> Built-in support for parallel execution.</li>
            <li><span className="font-bold">Scalable:</span> Perfect for massive cloud architectures.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Your First Go Program</h2>
          <CodeBlockComponent code={`package main

import "fmt"

func main() {
	fmt.Println("Hello, Go!")
}`} />
          <div className="mt-6 space-y-2 text-zinc-600 dark:text-zinc-400 text-sm">
            <p>• <strong>main()</strong> is the entry point</p>
            <p>• <strong>fmt</strong> is used for input/output</p>
            <p>• Run it using: <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">go run main.go</code></p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Variables and Control Flow</h2>
          <div className="space-y-6">
            <div>
              <p className="mb-3 text-zinc-600 dark:text-zinc-400">Variables can be declared explicitly or inferred using the short assignment operator:</p>
              <CodeBlockComponent code={`var name string = "Zxhan"
age := 21 // Type inference`} />
            </div>
            <div>
              <p className="mb-3 text-zinc-600 dark:text-zinc-400">Go's <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">if</code> and <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">for</code> loops are clean and don't require parentheses:</p>
              <CodeBlockComponent code={`if age > 18 {
	fmt.Println("Adult")
}

for i := 0; i < 5; i++ {
	fmt.Println(i)
}`} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Structs and Interfaces</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">Go uses <span className="font-bold">Structs</span> instead of classes. Interfaces are implemented <span className="font-bold">implicitly</span>.</p>
          <CodeBlockComponent code={`type User struct {
	Name string
	Age  int
}

func (u User) Greet() {
	fmt.Println("Hello,", u.Name)
}`} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Concurrency (The Superpower)</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">Goroutines are lightweight threads, and Channels are used for communication between them.</p>
          <CodeBlockComponent code={`ch := make(chan string)

go func() {
	ch <- "Hello from goroutine"
}()

message := <-ch
fmt.Println(message)`} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Final Thoughts</h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            Go is reliable, fast, and production-ready. Its simplicity forces good design, and its concurrency model makes complex systems easier to reason about. If you want to build scalable systems, Go is a skill worth investing in.
          </p>
        </section>
      </div>
    )
  },
  {
    id: 'b4',
    title: 'Why I Bet on Tailwind CSS',
    description: 'Utility-first at scale: How build-time orchestration and JIT engines are redefining the CSS landscape.',
    date: 'December 14, 2025',
    tags: ['Tailwind CSS', 'Web Design', 'Productivity'],
    imageUrl: 'https://ik.imagekit.io/ioktbcewp/ChatGPT%20Image%20Dec%2014,%202025,%2002_16_35%20PM.png',
    likes: 580,
    views: 4200,
    comments: [],
    content: (
      <div className="space-y-12">
        <section>
          <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            In the fast-moving world of frontend development, choosing the right tools is a strategic decision. Frameworks come and go, trends shift, and best practices evolve. Among all the CSS tools I’ve explored, Tailwind CSS is the one I confidently bet on—not just for today, but for the future.
          </p>
          <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
            This blog explains why Tailwind CSS stands out, how it changed the way I write UI code, and why it’s become my default choice for modern web projects.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">The Problem with Traditional CSS</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">Before Tailwind, styling often meant:</p>
          <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>Writing large CSS files</li>
            <li>Struggling with class naming (BEM, anyone?)</li>
            <li>Fighting specificity issues</li>
            <li>Deleting unused CSS</li>
            <li>Context-switching between HTML and CSS files</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">What Is Tailwind CSS?</h2>
          <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
            Tailwind CSS is a utility-first CSS framework that lets you style elements directly in your markup using small, single-purpose classes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <p className="font-bold text-zinc-900 dark:text-white">Traditional CSS:</p>
              <CodeBlockComponent code={`.card {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
}`} />
            </div>
            <div className="space-y-4">
              <p className="font-bold text-zinc-900 dark:text-white">Tailwind CSS:</p>
              <CodeBlockComponent code={`<div class="p-4 rounded-lg bg-white"></div>`} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Reason #1: Tailwind Makes Styling Faster</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">Everything is visible in one place. No more stopping your flow to think of class names or switch files.</p>
          <CodeBlockComponent code={`<button class="px-5 py-3 bg-blue-600 text-white rounded-md">
  Click me
</button>`} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Reason #2: No More Naming Things</h2>
          <p className="text-zinc-600 dark:text-zinc-400">Naming is hard. Tailwind eliminates the need for custom CSS class names like <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">.card-wrapper</code> or <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">.card-container</code>. You describe what the element is, not what it’s called.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Reason #3: Design Consistency by Default</h2>
          <p className="text-zinc-600 dark:text-zinc-400">Tailwind enforces consistency through its spacing scale, color palette, and typography. You’re not guessing values like 13px or 27px; everything aligns with a professional design system.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Reason #4: Responsive Design Is Built In</h2>
          <CodeBlockComponent code={`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="p-4 bg-white rounded-lg">Card 1</div>
  <div class="p-4 bg-white rounded-lg">Card 2</div>
  <div class="p-4 bg-white rounded-lg">Card 3</div>
</div>`} />
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">No media queries. No extra CSS files. Just readable breakpoints.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Reason #5: React & Dark Mode Support</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">Tailwind feels native in component-based frameworks and makes features like Dark Mode incredibly simple.</p>
          <CodeBlockComponent code={`<div class="bg-white dark:bg-gray-900 text-black dark:text-white p-6">
  Dark mode ready
</div>`} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Final Thoughts</h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            Tailwind doesn’t replace CSS knowledge—it rewards it. Once you adopt it seriously, going back feels like a step backward. It speeds up development, reduces bugs, and scales perfectly from small projects to large apps.
          </p>
        </section>
      </div>
    )
  },
  {
    id: 'b5',
    title: 'The Art of Pixel Design: Where Creativity Meets Precision',
    description: 'Mastering the fundamentals of precision: Optical weight, grid systems, and sub-pixel perfection.',
    date: 'December 14, 2025',
    tags: ['Pixel Design', 'Digital Art', 'UI/UX'],
    imageUrl: 'https://ik.imagekit.io/ioktbcewp/ChatGPT%20Image%20Dec%2014,%202025,%2007_12_51%20PM.png',
    likes: 195,
    views: 1100,
    comments: [],
    content: (
      <div className="space-y-12">
        <section>
          <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            Pixel design is one of the most fascinating forms of digital art. At first glance, it may look simple—tiny squares arranged on a grid—but behind every great pixel artwork lies intentional design, deep understanding of color, and extreme attention to detail. In an era of ultra-high resolutions and realistic graphics, pixel design continues to thrive, proving that limitations can inspire creativity.
          </p>
          <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
            This blog explores the history, principles, tools, and techniques behind the art of pixel design.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">What Is Pixel Design?</h2>
          <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
            Pixel design (often called pixel art) is a digital art form where images are created pixel by pixel. Each pixel is deliberately placed, making every square an important part of the final composition.
          </p>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400 font-bold">Unlike modern digital painting, pixel design:</p>
          <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>Uses low resolutions</li>
            <li>Avoids automatic smoothing or blur</li>
            <li>Focuses on clarity and control</li>
            <li>Embraces visible pixels as a stylistic choice</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">A Brief History of Pixel Art</h2>
          <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
            Pixel design was born out of necessity. Early computers and gaming consoles had limited memory and processing power, forcing artists to work with very small resolutions and color palettes.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl">
            <p className="font-bold text-zinc-900 dark:text-white mb-4">Key Milestones:</p>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li><span className="font-bold text-zinc-900 dark:text-white">1970s–1980s:</span> Arcade games like Pac-Man and Space Invaders</li>
              <li><span className="font-bold text-zinc-900 dark:text-white">1990s:</span> 8-bit and 16-bit console eras (Super Mario, The Legend of Zelda)</li>
              <li><span className="font-bold text-zinc-900 dark:text-white">2000s:</span> Decline due to 3D graphics</li>
              <li><span className="font-bold text-zinc-900 dark:text-white">2010s–Present:</span> Revival through indie games, mobile apps, and NFTs</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Core Principles of Pixel Design</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">1. Pixel Precision</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Every pixel counts. You cannot rely on blur or soft edges. Clean outlines and consistent shapes are mandatory.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">2. Working with Grids</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Pixel art lives on a grid. Thinking in blocks, alignment, and symmetry is key to great composition.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">3. Color Palette Control</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Limiting your palette (e.g., to 8 or 16 colors) enforces visual harmony and forces creative shading solutions.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">4. Shading and Lighting</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Depth is created through color contrast rather than gradients. Consistent light sources are vital.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Pixel Design Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Aseprite", desc: "The industry favorite for animation and sprites." },
              { name: "Pixelorama", desc: "A powerful free and open-source alternative." },
              { name: "Piskel", desc: "Web-based tool perfect for quick sketches." },
              { name: "Photoshop", desc: "Can be used with strict grid and pencil settings." }
            ].map((tool, i) => (
              <div key={i} className="p-4 border border-zinc-100 dark:border-zinc-800 rounded-xl">
                <h4 className="font-bold text-zinc-900 dark:text-white mb-1">{tool.name}</h4>
                <p className="text-sm text-zinc-500">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Final Thoughts</h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            The art of pixel design is about doing more with less. It teaches discipline, sharpens visual thinking, and celebrates creativity within constraints. Pixels may be small—but their impact is huge.
          </p>
        </section>
      </div>
    )
  },
  {
    id: 'b6',
    title: 'React Server Components: A Mental Model',
    description: 'Bridging the client-server gap: serialization, streaming, and the new architecture of React.',
    date: 'December 14, 2025',
    tags: ['React', 'Server Components', 'Architecture'],
    imageUrl: 'https://ik.imagekit.io/ioktbcewp/ChatGPT%20Image%20Dec%2014,%202025,%2006_14_40%20PM.png',
    likes: 890,
    views: 5200,
    comments: [],
    content: (
      <div className="space-y-12">
        <section>
          <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            React Server Components (RSC) are not just another React feature—they represent a shift in how we think about rendering, data fetching, and component boundaries. Many developers struggle with RSC not because they’re complex, but because they try to fit them into an old mental model of React.
          </p>
          <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
            This article builds a clear mental model for understanding React Server Components, so you know when, why, and how to use them.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">The Old vs New Mental Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Old Model (Client-Only)</h3>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 text-sm">
                <li>Server sends HTML + JS bundle</li>
                <li>Browser downloads and hydrates</li>
                <li>Components fetch data from browser</li>
                <li>Large JS bundles and slow loads</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">New Model (RSC)</h3>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 text-sm">
                <li>Hybrid execution (Server + Client)</li>
                <li>Server components access DB directly</li>
                <li>Zero JS cost for server components</li>
                <li>Streaming UI and faster TTFB</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Core Idea: Components Are Not Equal</h2>
          <div className="space-y-6">
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <h4 className="font-bold text-zinc-900 dark:text-white mb-2">1. Server Components (Default)</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Run only on the server. Never shipped to the browser. Can access databases and file systems directly.</p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <h4 className="font-bold text-zinc-900 dark:text-white mb-2">2. Client Components</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Run in the browser. Marked with <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">"use client"</code>. Used for state, effects, and interaction.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Where Does This Code Run?</h2>
          <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
            Think of Server Components as <strong>"Backend Functions That Return UI"</strong>. They build the tree on the server, while Client Components animate the leaves.
          </p>
          <CodeBlockComponent code={`// Server Component Example
async function UsersPage() {
  const users = await db.user.findMany() // Direct DB access!

  return (
    <ul>
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </ul>
  )
}`} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Comparison Checklist</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <th className="py-4 font-bold text-zinc-900 dark:text-white">Feature</th>
                  <th className="py-4 font-bold text-zinc-900 dark:text-white">Server Comp</th>
                  <th className="py-4 font-bold text-zinc-900 dark:text-white">Client Comp</th>
                </tr>
              </thead>
              <tbody className="text-sm text-zinc-600 dark:text-zinc-400">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-4">Fetch Data</td>
                  <td className="py-4">✅ Direct</td>
                  <td className="py-4">❌ Via API</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-4">useState / useEffect</td>
                  <td className="py-4">❌ No</td>
                  <td className="py-4">✅ Yes</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-4">Access Secrets</td>
                  <td className="py-4">✅ Yes</td>
                  <td className="py-4">❌ No</td>
                </tr>
                <tr>
                  <td className="py-4">Event Handlers</td>
                  <td className="py-4">❌ No</td>
                  <td className="py-4">✅ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Final Mental Model Summary</h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            React Server Components let the server do the <strong>thinking</strong>, and the client do the <strong>interacting</strong>. By defaulting to the server, you reduce JS bundle size, simplify data flow, and improve performance without any extra effort.
          </p>
        </section>
      </div>
    )
  },
  {
    id: 'b7',
    title: 'Building Scalable APIs in 2025: Principles, Patterns, and Practices',
    description: 'Modern backend architecture: Edge runtimes, token-bucket rate limiting, and global data consistency.',
    date: 'February 28, 2026',
    tags: ['Backend', 'System Design', 'Scalability'],
    imageUrl: 'https://ik.imagekit.io/ioktbcewp/ChatGPT%20Image%20Dec%2027,%202025,%2007_12_11%20PM.png',
    likes: 642,
    views: 3100,
    comments: [],
    content: (
      <div className="space-y-12">
        <section>
          <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            In 2025, building an API is easy. Building an API that scales, performs, and survives growth is not. Modern APIs must handle massive traffic spikes, global users, and real-time interactions while remaining secure and manageable.
          </p>
          <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
            This blog outlines how scalable APIs are designed in 2025, focusing on architecture, technology choices, and the stateless mindset.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-4 font-heading">Core Principles of Scalability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-emerald-500/30 transition-colors group">
              <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl w-fit mb-4 text-zinc-400 group-hover:text-emerald-500 transition-colors">
                <Activity size={18} />
              </div>
              <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2 uppercase tracking-wider">1. Statelessness by Default</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">In 2025, stateless APIs are non-negotiable. Each request should be independent and carry its own context. State belongs in distributed stores likes Redis or specialized databases, not in-memory.</p>
            </div>
            <div className="p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-purple-500/30 transition-colors group">
              <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl w-fit mb-4 text-zinc-400 group-hover:text-purple-500 transition-colors">
                <LayoutTemplate size={18} />
              </div>
              <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2 uppercase tracking-wider">2. Modular Architecture</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">Start as modular monoliths and split into microservices only when independent scaling or team separation requires it. Premature microservices are a common productivity killer.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-4 font-heading">API Protocols & Data Layer</h2>
          <p className="mb-8 text-zinc-600 dark:text-zinc-400">Choosing the right protocol and managing the data bottleneck is critical for performance.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "REST & GraphQL", desc: "REST for simplicity and caching; GraphQL for client flexibility.", icon: <Terminal size={18} /> },
              { title: "gRPC", desc: "The gold standard for high-performance internal service communication.", icon: <Zap size={18} /> },
              { title: "Caching Layer", desc: "CDNs for the edge and Redis for rapid data access are mandatory.", icon: <Cloud size={18} /> },
              { title: "Read Replicas", desc: "Offload heavy read traffic from the primary database to replicas.", icon: <Layers size={18} /> }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-blue-500/30 transition-colors group">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl w-fit mb-4 text-zinc-400 group-hover:text-blue-500 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2 uppercase tracking-wider">{item.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Async & Traffic Control</h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">Scalable APIs handle heavy work in the background and protect themselves from spikes.</p>
          <CodeBlockComponent code={`// Adaptive Token-Bucket Logic
const refillRate = 5; // tokens per sec
const burstLimit = 20;
let tokens = burstLimit;

function handleRequest() {
  if (tokens > 0) {
    tokens--;
    return processAsync(); // Offload to worker
  }
  return throw429(); // Rate limit
}`} />
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Final Thoughts</h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            Building scalable APIs in 2025 is about intentional architecture. Start simple, design for change, and measure everything. A scalable API is not just fast—it’s resilient, understandable, and evolvable.
          </p>
        </section>
      </div>
    )
  },
  {
    id: 'b8',
    title: "What's an API Key and How to Integrate API Keys",
    description: "At the heart of API access lies one critical concept: API Keys. In this blog, we'll break down what they are and how to use them securely.",
    date: 'January 17, 2026',
    tags: ['API', 'Security', 'Web Development', 'Backend'],
    imageUrl: 'https://ik.imagekit.io/ioktbcewp/ChatGPT%20Image%20Jan%2017,%202026,%2006_20_06%20PM.png',
    likes: 124,
    views: 840,
    comments: [],
    content: (
      <div className="space-y-12">
        <section>
          <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            Modern applications rarely work in isolation. From payments and maps to AI and authentication, APIs power almost everything. At the heart of API access lies one critical concept: <strong>API Keys</strong>.
          </p>
          <p className="mt-6 leading-7 text-zinc-600 dark:text-zinc-400">
            In this blog, we’ll break down:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>What an API key actually is</li>
            <li>Why it exists</li>
            <li>How it works</li>
            <li>How to integrate API keys securely</li>
            <li>Common mistakes developers make</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">What Is an API Key?</h2>
          <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
            An API key is a unique identifier used to authenticate a client (your app) when making requests to an API. Think of it like a password for your application, a ticket that tells the API who you are, or a way for the server to track, limit, and secure usage.
          </p>
          <CodeBlockComponent code={`api_key=sk-123456abcdef`} />
          <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
            The API provider issues this key to you, and every request you send includes it.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-4 font-heading">Why Do APIs Use API Keys?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Authentication", desc: "Verifying the identity of the calling application.", icon: <Terminal size={18} /> },
              { title: "Authorization", desc: "Enforcing permissions and access levels.", icon: <Lock size={18} /> },
              { title: "Rate Limiting", desc: "Preventing DDoS and ensuring fair usage.", icon: <Cpu size={18} /> },
              { title: "Analytics", desc: "Monitoring traffic patterns and billing.", icon: <Database size={18} /> }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-emerald-500/30 transition-colors group">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl w-fit mb-4 text-zinc-400 group-hover:text-emerald-500 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2 uppercase tracking-wider">{item.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-4 font-heading">The API Key Lifecycle</h2>
          <div className="relative">

            <div className="space-y-8">
              {[
                { step: "Provisioning", desc: "Generate your unique key via the provider's developer dashboard.", icon: "🎟️" },
                { step: "Secure Storage", desc: "Inject the key into protected environment variables on your server.", icon: "💉" },
                { step: "Request Signing", desc: "Attach the key (typically via Bearer Token) to your outbound headers.", icon: "📡" },
                { step: "Handshake", desc: "The provider validates the key and returns the requested data.", icon: "🤝" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-6 relative group">
                  <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm relative z-10 group-hover:border-emerald-500/50 transition-colors shrink-0">
                    <span className="text-lg md:text-xl">{item.icon}</span>
                  </div>
                  <div className="flex-1 p-5 md:p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2 md:gap-3 flex-wrap">
                      <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-[10px] text-zinc-500 font-mono shrink-0">STEP 0{i + 1}</span>
                      <span className="truncate">{item.step}</span>
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">Where Do You Use an API Key?</h2>
          <p className="mb-6 leading-7 text-zinc-600 dark:text-zinc-400">
            API keys are commonly sent in:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-zinc-900 dark:text-white mb-2">1. Request Headers (Recommended)</h3>
              <CodeBlockComponent code={`Authorization: Bearer YOUR_API_KEY`} />
            </div>
            <div>
              <h3 className="font-bold text-zinc-900 dark:text-white mb-2">2. Query Parameters (Less Secure)</h3>
              <CodeBlockComponent code={`https://api.example.com/data?api_key=YOUR_API_KEY`} />
            </div>
          </div>
          <p className="mt-6 italic text-zinc-500">👉 Headers are safer because URLs can be logged or cached.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">How to Integrate API Keys</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">Step 1: Get Your API Key</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Sign up on the API provider’s dashboard and generate a key.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">Step 2: Store It Securely</h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">❌ Never hardcode API keys:</p>
              <CodeBlockComponent code={`const API_KEY = "sk-123456"; // BAD`} />
              <p className="my-4 text-zinc-600 dark:text-zinc-400">✅ Use environment variables:</p>
              <CodeBlockComponent code={`// .env
API_KEY=sk-123456

// app.js
const API_KEY = process.env.API_KEY;`} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">Step 3: Use the API Key in Requests</h3>
              <CodeBlockComponent code={`// Fetch API (JavaScript)
fetch("https://api.example.com/data", {
  headers: {
    Authorization: \`Bearer \${process.env.API_KEY}\`
  }
})
.then(res => res.json())
.then(data => console.log(data));`} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white">API Keys vs Tokens</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-4 font-bold text-zinc-900 dark:text-white">Feature</th>
                  <th className="py-4 font-bold text-zinc-900 dark:text-white">API Key</th>
                  <th className="py-4 font-bold text-zinc-900 dark:text-white">OAuth Token</th>
                </tr>
              </thead>
              <tbody className="text-zinc-600 dark:text-zinc-400">
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-4">Simplicity</td>
                  <td className="py-4">Very simple</td>
                  <td className="py-4">Complex</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-4">User-specific</td>
                  <td className="py-4">❌ No</td>
                  <td className="py-4">✅ Yes</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800/50">
                  <td className="py-4">Expiry</td>
                  <td className="py-4">Usually long-lived</td>
                  <td className="py-4">Short-lived</td>
                </tr>
                <tr>
                  <td className="py-4">Security</td>
                  <td className="py-4">Medium</td>
                  <td className="py-4">High</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 italic text-zinc-500">👉 API keys are best for server-to-server communication.</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-4 font-heading">Backend vs Frontend Usage</h2>
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 flex items-start gap-4 mb-8">
            <div className="bg-red-500 p-2 rounded-lg text-white mt-1 shadow-lg shadow-red-500/20">
              <ShieldAlert size={20} />
            </div>
            <div>
              <p className="text-red-600 dark:text-red-400 font-bold text-lg mb-1">
                Security Critical: Never Expose Your Keys
              </p>
              <p className="text-red-600/80 dark:text-red-400/80 text-sm leading-relaxed">
                Embedding production API keys in client-side code is the #1 cause of API credential theft. Browser DevTools make it trivial for anyone to inspect and steal your secrets instantly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Insecure Path */}
            <div className="flex flex-col border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2rem] bg-white dark:bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:border-red-500/30 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-xl group-hover:scale-110 transition-transform">
                  <Unlock className="text-red-600" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Direct Client Access</h3>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold">Vulnerable Architecture</p>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                  The frontend makes a direct call to the external provider. This exposes your <strong>Secret Key</strong> to the public web instantly.
                </p>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-red-200 dark:border-red-900/30 shadow-2xl shadow-red-500/5">
                    <CodeBlockComponent code={`// ❌ CLIENT-SIDE LEAK
fetch("https://api.openai.com/v1/...", {
  headers: {
    "Authorization": "Bearer sk-..." // LEAKED!
  }
});`} />
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/20">
                  <span className="text-red-500 text-sm">⚠️</span>
                  <span className="text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-wider">Leaked via Network Inspection</span>
                </div>
              </div>
            </div>

            {/* Secure Path */}
            <div className="flex flex-col border-2 border-emerald-500/20 p-8 rounded-[2rem] bg-emerald-500/[0.02] dark:bg-emerald-500/[0.05] backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl group-hover:scale-110 transition-transform">
                  <ShieldCheck className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Secure Proxy Gateway</h3>
                  <p className="text-[10px] text-emerald-600 uppercase tracking-[0.2em] font-bold">The Industry Standard</p>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="relative p-4 md:p-6 bg-white dark:bg-zinc-800/80 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-xl shadow-emerald-500/10 overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 relative z-10">
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <Smartphone size={20} className="text-zinc-500" />
                      </div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter sm:tracking-normal">Frontend</span>
                    </div>

                    <div className="flex sm:flex-1 flex-col items-center px-1 rotate-90 sm:rotate-0">
                      <div className="w-8 sm:w-full h-px bg-zinc-200 dark:bg-zinc-700 relative flex items-center justify-center">
                        <ArrowRight size={12} className="text-zinc-300 dark:text-zinc-600 absolute" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className="p-3 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/30 relative">
                        <Server size={20} />
                        <div className="absolute -top-1 -right-1 bg-white dark:bg-zinc-900 text-[8px] p-0.5 rounded-full shadow-sm">
                          <Lock size={8} className="text-emerald-500" />
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase">Edge</span>
                    </div>

                    <div className="flex sm:flex-1 flex-col items-center px-1 rotate-90 sm:rotate-0">
                      <div className="w-8 sm:w-full h-px bg-emerald-200 dark:bg-emerald-800/50 relative flex items-center justify-center">
                        <ArrowRight size={12} className="text-emerald-400 absolute" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <Cloud size={20} className="text-blue-500" />
                      </div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter sm:tracking-normal">Provider</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-800 relative group-hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">
                      Secrets reside in high-security <code className="text-emerald-400 bg-emerald-400/10 px-1 rounded font-mono">.env</code> variables. Your private backend acts as a trusted, encrypted middleman.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mt-12 mb-6 text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-4 font-heading">The "Developer Debt" Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Git Exposure", desc: "Committing .env files to GitHub. Use .gitignore religiously.", icon: "📂" },
              { title: "Hardcoding", desc: "Setting keys as strings in code. Always use process.env.", icon: "⌨️" },
              { title: "Shared Env", desc: "Using production keys in local dev. Always segregate keys.", icon: "🔑" },
              { title: "Stale Keys", desc: "Never rotating credentials. Set a 90-day rotation policy.", icon: "🔄" }
            ].map((err, i) => (
              <div key={i} className="flex gap-4 p-5 border border-zinc-100 dark:border-zinc-800 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/30">
                <span className="text-2xl">{err.icon}</span>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white text-sm">{err.title}</h4>
                  <p className="text-zinc-500 text-xs mt-1 leading-relaxed">{err.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
              <ShieldCheck size={160} className="text-emerald-500" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-white font-heading">Final Thoughts</h2>
              <p className="leading-relaxed text-zinc-400 max-w-2xl text-lg mb-8">
                API keys may look simple, but they are a critical security layer in modern development. Understanding how to use them properly separates beginners from professional developers. Master API key handling early to ensure your apps are more secure and your architecture scales better.
              </p>
              <div className="flex gap-4">
                <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-emerald-500 text-xs font-bold uppercase tracking-widest">
                  Knowledge Secured
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-500 text-xs font-bold uppercase tracking-widest">
                  Ready for Production
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
];

export const BOOKS_DATA = [
  { title: "Steve Jobs", author: "Walter Isaacson", rating: 5, thought: "The best biography I've ever read. It shows the brutal reality of perfectionism.", cover: "https://ik.imagekit.io/ioktbcewp/download%20(26).jpg" },
  { title: "Atomic Habits", author: "James Clear", rating: 5, thought: "Practical, actionable, and life-changing. 1% better every day.", cover: "/images/books/atomic-habits.jpg" },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", rating: 5, thought: "Essential reading for any software engineer who cares about their craft.", cover: "/images/books/pragmatic-programmer.jpg" },
  { title: "Show Your Work!", author: "Austin Kleon", rating: 4, thought: "Helped me get over the fear of sharing my imperfect projects.", cover: "/images/books/show-your-work.jpg" },
  { title: "Deep Work", author: "Cal Newport", rating: 4, thought: "In a distracted world, focus is the new superpower.", cover: "https://bookmarkandworld.com/cdn/shop/files/WhatsAppImage2024-10-06at3.11.46PM.jpg?v=1728207868" }, // Keep original as backup or find a better source
  { title: "Zero to One", author: "Peter Thiel", rating: 4, thought: "Contrarian thinking on startups.", cover: "/images/books/zero-to-one.jpg" }
];

export const MOVIES_DATA = [
  {
    title: "Ford v Ferrari",
    year: "2019",
    category: "High Performance",
    rating: "9.2",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(19).jpg",
    whyWatch: "A masterclass in technical excellence, persistence, and the raw passion for engineering perfection.",
    lessons: "Taught me that great things are built when talent meets relentless obsession, despite corporate friction."
  },
  {
    title: "Whiplash",
    year: "2014",
    category: "High Performance",
    rating: "9.5",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(20).jpg",
    whyWatch: "An intense exploration of what it takes to be 'one of the greats' and the price of perfection.",
    lessons: "It showed me that focus requires sacrifice, but there's a fine line between greatness and self-destruction."
  },
  {
    title: "Moneyball",
    year: "2011",
    category: "High Performance",
    rating: "9.3",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(21).jpg",
    whyWatch: "A legendary story of using data and unconventional thinking to disrupt a rigged game.",
    lessons: "Taught me that being the first one to use logic in an emotional industry is the ultimate competitive advantage."
  },
  {
    title: "Rush",
    year: "2013",
    category: "High Performance",
    rating: "8.1",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(23).jpg",
    whyWatch: "A fast-paced rivalry that explores the mental fortitude required to compete at the highest level of motorsport.",
    lessons: "Taught me that your competitors are your greatest teachers and push you to reach impossible limits."
  },
  {
    title: "Air",
    year: "2023",
    category: "High Performance",
    rating: "8.5",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(22).jpg",
    whyWatch: "The story of how a small division at Nike bet everything on a single athlete to change sports forever.",
    lessons: "Taught me that 'safe' is often the riskiest move, and true disruption requires absolute conviction."
  },
  {
    title: "The Social Network",
    year: "2010",
    category: "Tech & Startup",
    rating: "9.0",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(24).jpg",
    whyWatch: "The definitive movie about the birth of a tech giant and the complexity of modern relationships.",
    lessons: "Taught me about the speed of innovation and that building something world-changing often comes with ethical costs."
  },
  {
    title: "Silicon Valley",
    year: "2014",
    category: "Tech & Startup",
    rating: "9.6",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(25).jpg",
    whyWatch: "A hilariously accurate depiction of the tech startup world and its unique challenges.",
    lessons: "It taught me to find humor in'pivot' moments and that technical brilliance needs business sense to survive."
  },
  {
    title: "Steve Jobs",
    year: "2015",
    category: "Tech & Startup",
    rating: "8.8",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(26).jpg",
    whyWatch: "A high-stakes drama focusing on the pivotal moments of a tech visionary's life.",
    lessons: "Taught me the power of product vision and that the best interfaces are the ones that feel human."
  },
  {
    title: "The Founder",
    year: "2016",
    category: "Tech & Startup",
    rating: "7.2",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(27).jpg",
    whyWatch: "A brutal look at the expansion of McDonald's and the relentless persistence (and ruthlessness) required to build an empire.",
    lessons: "Taught me that persistence is the single most important trait in business, but ethics should never be secondary."
  },
  {
    title: "BlackBerry",
    year: "2023",
    category: "Tech & Startup",
    rating: "7.4",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(28).jpg",
    whyWatch: "The fast-paced rise and catastrophic fall of the world's first smartphone.",
    lessons: "Taught me that failing to adapt to a changing market is the fastest way to become obsolete."
  },
  {
    title: "Interstellar",
    year: "2014",
    category: "Psychology",
    rating: "9.8",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(29).jpg",
    whyWatch: "A visual and emotional masterpiece that explores the limits of human endurance and love through space and time.",
    lessons: "Taught me that curiosity is our greatest asset and that some connections transcend physical dimensions."
  },
  {
    title: "Inception",
    year: "2010",
    category: "Psychology",
    rating: "8.8",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(30).jpg",
    whyWatch: "A heist within the mind that challenges our perception of reality and the power of ideas.",
    lessons: "Taught me that an idea is the most resilient parasite and that we must be the masters of our own thoughts."
  },
  {
    title: "Fight Club",
    year: "1999",
    category: "Psychology",
    rating: "8.8",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(31).jpg",
    whyWatch: "A dark exploration of consumerism, identity, and the primal instincts we suppress in modern society.",
    lessons: "Taught me that true freedom comes when we let go of the things we think we need to be happy."
  },
  {
    title: "A Beautiful Mind",
    year: "2001",
    category: "Psychology",
    rating: "8.2",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(32).jpg",
    whyWatch: "The story of John Nash, a mathematical genius who struggled with schizophrenia while making groundbreaking discoveries.",
    lessons: "Taught me the strength of the human spirit and that genius often walks a fine line with madness."
  },
  {
    title: "Black Mirror",
    year: "2011",
    category: "Psychology",
    rating: "8.8",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(33).jpg",
    whyWatch: "A chillingly prophetic series exploring our relationship with technology and how it can change us.",
    lessons: "Taught me to be mindful of how we build tools, as technology is a mirror that often reflects our darkest sides."
  },
  {
    title: "The Big Short",
    year: "2015",
    category: "Finance",
    rating: "9.1",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(34).jpg",
    whyWatch: "A sharp, fast-paced look at how a few outsiders saw the 2008 financial crisis coming when no one else did.",
    lessons: "Taught me the importance of looking at the data for yourself and questioning the majority's assumptions."
  },
  {
    title: "Margin Call",
    year: "2011",
    category: "Finance",
    rating: "8.5",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(35).jpg",
    whyWatch: "A tense, claustrophobic look at the first 24 hours of a financial crisis within an investment bank.",
    lessons: "Taught me about high-stakes decision-making and the weight of responsibility in systemic failures."
  },
  {
    title: "The Wolf of Wall Street",
    year: "2013",
    category: "Finance",
    rating: "8.2",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(36).jpg",
    whyWatch: "The outrageous true story of Jordan Belfort's rise and fall in the world of high-finance fraud.",
    lessons: "Taught me that absolute greed without purpose inevitably leads to total collapse."
  },
  {
    title: "Dumb Money",
    year: "2023",
    category: "Finance",
    rating: "6.9",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(37).jpg",
    whyWatch: "The story of the GameStop short squeeze and how a group of retail investors took on Wall Street.",
    lessons: "Taught me the power of community and that the financial world is often more fragile than it seems."
  },
  {
    title: "Wall Street",
    year: "1987",
    category: "Finance",
    rating: "7.3",
    image: "https://ik.imagekit.io/ioktbcewp/download%20(38).jpg",
    whyWatch: "The ultimate 80s movie about the allure and danger of quick money in the corporate world.",
    lessons: "Taught me that 'greed is good' is a lie that destroys character and integrity."
  }
];

export const GEARS_DATA = [
  { name: 'Asus Vivobook X515JA', icon: Laptop, link: 'https://www.asus.com/laptops/for-home/vivobook/vivobook-15-x515/', description: 'Primary workstation for heavy coding and design sessions.' },
  { name: 'Dell Wireless Mouse', icon: Mouse, link: 'https://www.dell.com/en-us/shop/dell-wireless-mouse-wm126/apd/570-aarc/pc-accessories', description: 'Reliable, ergonomic pointing device for precise UI work.' },
  { name: 'Boult Wireless Earbuds', icon: Headphones, link: 'https://www.boultaudio.com/products/airbass-z1', description: 'High-fidelity audio for focused coding and technical brainstorming.' },
  { name: 'iPhone 12', icon: Smartphone, link: 'https://support.apple.com/kb/SP830?locale=en_US', description: 'Testing environment for mobile responsiveness and performance.' },
  { name: 'Chai (Fuel)', icon: Coffee, recipe: '2 cups of milk, 2 tsp tea leaves, sugar to taste, and a pinch of cardamom. Boil until rich and creamy. The ultimate fuel.', description: 'The essential catalyst for any late-night debugging session.' }
];

export const EXTENSIONS_DATA = [
  { name: "Unhook", link: "https://chromewebstore.google.com/detail/unhook-remove-youtube-r/khncfooichmfjbepaaaebmommgaepoid", description: "Reclaims focus by removing distracting recommendations from YouTube." },
  { name: "uBlock Origin", link: "https://ublockorigin.com/", description: "Essential for a clean, ad-free, and secure browsing experience." },
  { name: "React Developer Tools", link: "https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi", description: "The standard toolkit for debugging React component hierarchies." },
  { name: "daily.dev", link: "https://daily.dev/", description: "Staying updated with the latest engineering news and tech blogs." },
  { name: "Grammarly", link: "https://www.grammarly.com/", description: "Ensuring professional and error-free technical documentation." },
  { name: "Wappalyzer", link: "https://www.wappalyzer.com/", description: "Instantly identifying the technology stack of any website." },
  { name: "ColorZilla", link: "https://www.colorzilla.com/", description: "Precision color picking for pixel-perfect UI implementation." }
];

export const SOFTWARE_DATA = [
  { name: "Dia", link: "http://dia-installer.de/", description: "Clean, minimal diagramming for system architecture and logic flow." },
  { name: "Notion", link: "https://www.notion.so/", description: "The central hub for all my project planning, notes, and research." },
  { name: "TickTick", link: "https://ticktick.com/", description: "Time management and habit tracking to stay on top of deadlines." },
  { name: "OBS Studio", link: "https://obsproject.com/", description: "Recording high-quality demos and technical walkthroughs." },
  { name: "VLC", link: "https://www.videolan.org/", description: "Universal media player that handles any file format I throw at it." },
  { name: "Ghostty", link: "https://ghostty.org/", description: "High-performance, GPU-accelerated terminal for smooth CLI work." }
];

export const SKILLS = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'PostgreSQL', 'Figma', 'AWS'];
export const AVATAR_URL_LIGHT = "https://ik.imagekit.io/ioktbcewp/ChatGPT%20Image%20Dec%2015,%202025,%2009_50_39%20AM.png?tr=w-200,q-80";
export const AVATAR_URL_DARK = "https://ik.imagekit.io/ioktbcewp/ChatGPT%20Image%20Dec%2015,%202025,%2009_35_49%20AM.png?tr=w-200,q-80";
