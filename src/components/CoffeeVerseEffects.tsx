import { useEffect, useState } from "react";

export default function CoffeeVerseEffects() {
  const [beans, setBeans] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const [steamParticles, setSteamParticles] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    // Create falling coffee beans
    const createBeans = () => {
      const newBeans = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 8
      }));
      setBeans(newBeans);
    };

    // Create steam particles
    const createSteam = () => {
      const newSteam = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i + 100,
        left: Math.random() * 100,
        delay: Math.random() * 4
      }));
      setSteamParticles(newSteam);
    };

    createBeans();
    createSteam();

    const beanInterval = setInterval(createBeans, 10000);
    const steamInterval = setInterval(createSteam, 6000);

    return () => {
      clearInterval(beanInterval);
      clearInterval(steamInterval);
    };
  }, []);

  return (
    <div className="coffee-beans-container">
      {/* Falling Coffee Beans */}
      {beans.map((bean) => (
        <div
          key={bean.id}
          className="falling-bean animate-coffee-beans"
          style={{
            left: `${bean.left}%`,
            animationDelay: `${bean.delay}s`,
          }}
        />
      ))}

      {/* Steam Effects */}
      {steamParticles.map((particle) => (
        <div
          key={particle.id}
          className="steam-effect animate-steam"
          style={{
            left: `${particle.left}%`,
            bottom: '20%',
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Magical Sparkles */}
      <div className="fixed top-1/4 left-1/4 w-2 h-2">
        <div className="sparkle" />
        <div className="sparkle" />
        <div className="sparkle" />
        <div className="sparkle" />
      </div>
      <div className="fixed top-3/4 right-1/4 w-2 h-2">
        <div className="sparkle" />
        <div className="sparkle" />
      </div>
      <div className="fixed top-1/2 left-3/4 w-2 h-2">
        <div className="sparkle" />
        <div className="sparkle" />
        <div className="sparkle" />
      </div>
    </div>
  );
}