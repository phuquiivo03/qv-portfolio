
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Neon theme colors
				neon: {
					blue: '#00f3ff',
					purple: '#9b30ff',
					pink: '#ff00ff',
					green: '#00ff66',
					yellow: '#f9fb54'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				flicker: {
					'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
						opacity: '0.99',
						filter: 'drop-shadow(0 0 1px rgba(252, 211, 77, 0.8)) drop-shadow(0 0 5px rgba(252, 211, 77, 0.4)) drop-shadow(0 0 10px rgba(252, 211, 77, 0.2))',
					},
					'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
						opacity: '0.4',
						filter: 'none',
					},
				},
				glow: {
					'0%, 100%': {
						filter: 'brightness(1)',
					},
					'50%': {
						filter: 'brightness(1.5) drop-shadow(0 0 15px rgba(0, 247, 255, 0.7))',
					},
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				gradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				flicker: 'flicker 3s linear infinite',
				glow: 'glow 2s ease-in-out infinite',
				fadeIn: 'fadeIn 0.5s ease-out forwards',
				float: 'float 3s ease-in-out infinite',
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				gradient: 'gradient 8s linear infinite',
			},
			backgroundImage: {
				'neon-glow': 'linear-gradient(90deg, #00f3ff, #9b30ff, #ff00ff, #00ff66)',
				'grid-pattern': 'radial-gradient(#333 1px, transparent 1px)',
			},
			backgroundSize: {
				'size-200': '200% 200%',
			},
			boxShadow: {
				neon: '0 0 5px theme(colors.neon.blue), 0 0 20px theme(colors.neon.blue)',
				'neon-purple': '0 0 5px theme(colors.neon.purple), 0 0 20px theme(colors.neon.purple)',
				'neon-pink': '0 0 5px theme(colors.neon.pink), 0 0 20px theme(colors.neon.pink)',
				'neon-green': '0 0 5px theme(colors.neon.green), 0 0 20px theme(colors.neon.green)',
				'neon-yellow': '0 0 5px theme(colors.neon.yellow), 0 0 20px theme(colors.neon.yellow)',
				'neon-blue': '0 0 5px theme(colors.neon.blue), 0 0 20px theme(colors.neon.blue)',
			},
			textShadow: {
				neon: '0 0 5px rgba(0, 243, 255, 0.8), 0 0 10px rgba(0, 243, 255, 0.5), 0 0 15px rgba(0, 243, 255, 0.3)',
				'neon-purple': '0 0 5px rgba(155, 48, 255, 0.8), 0 0 10px rgba(155, 48, 255, 0.5), 0 0 15px rgba(155, 48, 255, 0.3)',
				'neon-pink': '0 0 5px rgba(255, 0, 255, 0.8), 0 0 10px rgba(255, 0, 255, 0.5), 0 0 15px rgba(255, 0, 255, 0.3)',
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		// Add custom textShadow plugin
		function ({ addUtilities }) {
			const newUtilities = {
				'.text-shadow-neon': {
					textShadow: '0 0 5px rgba(0, 243, 255, 0.8), 0 0 10px rgba(0, 243, 255, 0.5), 0 0 15px rgba(0, 243, 255, 0.3)',
				},
				'.text-shadow-neon-purple': {
					textShadow: '0 0 5px rgba(155, 48, 255, 0.8), 0 0 10px rgba(155, 48, 255, 0.5), 0 0 15px rgba(155, 48, 255, 0.3)',
				},
				'.text-shadow-neon-pink': {
					textShadow: '0 0 5px rgba(255, 0, 255, 0.8), 0 0 10px rgba(255, 0, 255, 0.5), 0 0 15px rgba(255, 0, 255, 0.3)',
				},
				'.text-shadow-neon-green': {
					textShadow: '0 0 5px rgba(0, 255, 102, 0.8), 0 0 10px rgba(0, 255, 102, 0.5), 0 0 15px rgba(0, 255, 102, 0.3)',
				},
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
