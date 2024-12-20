import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Team() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This platform empowers us to think beyond limits.",
      name: "Mohammad Shariq Jabbar",
      designation: "Lead Founder",
      src: "/founder.jpg",
    },
    {
      quote:
        "Collaborating on this platform has been a game-changer for us. The seamless integration has brought our vision to life.",
      name: "Mohammad Atif Abbas",
      designation: "Lead Co-founder",
      src: "/cofounder.jpg",
    },
    {
      quote:
        "The productivity boost we've experienced is phenomenal. The interface is so intuitive that it allows us to achieve our goals faster.",
      name: "Arsalan Arshad",
      designation: "Chief Executive Officer",
      src: "/ceo.jpg",
    },
    {
      quote:
        "This tool has elevated our management capabilities to the next level. The support team has been incredibly responsive and helpful.",
      name: "Harmanpreet Kaur",
      designation: "Senior Manager",
      src: "/sen_manager.jpg",
    },
    {
      quote:
        "From analytics to reporting, everything is streamlined. It's a perfect solution for managing tasks efficiently.",
      name: "Abhishek Krishnan",
      designation: "Assistant Manager",
      src: "/ass_manager.jpg",
    },
    {
      quote:
        "As an operational leader, scalability and reliability are key—and this platform delivers on both fronts, every time.",
      name: "Selena Dsouza",
      designation: "Lead COO",
      src: "/coo.jpg",
    },
    {
      quote:
        "The financial insights provided by the system are unmatched. It has truly simplified our budgeting and forecasting processes.",
      name: "Shefali Mehrotra",
      designation: "Lead CFO",
      src: "/cfo.jpg",
    },
    {
      quote:
        "The technology is built to adapt, innovate, and grow with us. It’s rare to find a solution so aligned with modern technical demands.",
      name: "Abhilasha Chopra",
      designation: "Chief Technical Officer",
      src: "/cto.jpg",
    },
    {
      quote:
        "Marketing strategies have never been easier to implement and track. This platform has revolutionized the way we engage our audience.",
      name: "Akshita Tripathi",
      designation: "Lead CMO",
      src: "/cmo.jpg",
    },
  ];
  
  return <>
    <div id="team" className=" flex flex-col justify-center items-center">   
        <h1 className="mt-8 md:text-4xl text-2xl font-bold text-[#b7d1e1] "> Meet my team</h1>     
  <AnimatedTestimonials testimonials={testimonials} />
    </div>
  </>;
}
