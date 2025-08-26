import { useEffect, useState } from "react";

export default function CoffeeVerseEffects() {
  const [beans, setBeans] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const [steamParticles, setSteamParticles] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const [showBeanRain, setShowBeanRain] = useState(false);
  const [petMessage, setPetMessage] = useState("");

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

  const handlePetClick = () => {
    const messages = [
      "🐾 Woof! Welcome to the Coffee Verse! ☕✨",
      "🎾 I love coffee treats! Got any? 🦴",
      "☕ This place smells amazing! 🐕",
      "🌟 You found our magical coffee companion! 🪄",
      "🎪 Let's make this coffee adventure pawsome! 🎉"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setPetMessage(randomMessage);
    
    // Trigger bean rain easter egg
    setShowBeanRain(true);
    setTimeout(() => setShowBeanRain(false), 3000);
    
    setTimeout(() => setPetMessage(""), 3000);
  };

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

      {/* Enhanced Bean Rain Easter Egg */}
      {showBeanRain && (
        <div className="bean-rain">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="bean"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

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

      {/* Interactive Coffee Pet */}
     

      {/* Pet Message */}
      {petMessage && (
        <div className="fixed bottom-32 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border-2 border-caramel font-playful text-lg text-deep-coffee-brown max-w-xs z-50 animate-bounce">
          {petMessage}
        </div>
      )}

      {/* Enhanced Magical Sparkles */}
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

      {/* Floating Coffee Particles */}
      <div className="fixed top-1/3 left-1/2 coffee-particle" style={{ animationDelay: "0s" }} />
      <div className="fixed top-2/3 left-1/3 coffee-particle" style={{ animationDelay: "1s" }} />
      <div className="fixed top-1/2 right-1/3 coffee-particle" style={{ animationDelay: "2s" }} />

      {/* Steam Particles for Atmosphere */}
      <div className="steam-particles">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="steam-particle"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}