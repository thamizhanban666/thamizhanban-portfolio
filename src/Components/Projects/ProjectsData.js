import ChatApp from '../../Assets/Images/ChatApp.png'
import StackOverflow from '../../Assets/Images/StackOverflow.png'
import Calculator from '../../Assets/Images/Calculator.png'
import Portfolio from '../../Assets/Images/Portfolio.png'
// import ChatApp from '../../Assets/svg-images/ChatApp.svg'

export const projectsData = [
	{
		id: 1,
		projectName: 'Chat application',
		projectDesc: 'A responsive React.js app with one to one and group chat having features of notifications, online status, messages seen or not with the indication of single or double tick respectively.',
		tags: ['React.js', 'Javascript', 'HTML', 'CSS', 'Chakra UI', 'Node.js','Express.js', 'MongoDB', 'JWT Auth', 'bcryptjs', 'socket.io'	],
		code: ['https://github.com/thamizhanban666/chat-app-frontend', 'https://github.com/thamizhanban666/chat-app-backend'],
		demo: 'https://chat-app-thamizhanban.netlify.app',
		image: ChatApp
	},
	{
		id: 2,
		projectName: 'Stack Overflow Clone',
		projectDesc: 'A clone of stack overflow web app with a responsive design in which a user should register or login to ask question with tags and answer to the questions in detail in a text-editor',
		tags: ['React.js', 'Javascript', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB','Mongoose','JWT Auth', 'bcryptjs'],
		code: ['https://github.com/thamizhanban666/stack-overflow-clone-frontend', 'https://github.com/thamizhanban666/stack-overflow-clone-backend'],
		demo: 'https://stack-overflow-clone-thamizhanban.netlify.app/',
		image: StackOverflow
	},
	{
		id: 3,
		projectName: 'Calculator',
		projectDesc: 'A dom manipulation calculator with functionality like addition, subtraction, multiplication, division, percentage, clear all, back, last history, and automated braces which will open or close the brace based upon the equation.',
		tags: ['HTML', 'CSS', 'Javascript', 'Dom manipulation'],
		code: ['https://github.com/thamizhanban666/my_Project/tree/main/calculator'],
		demo: 'https://thamizhanbanprojects.netlify.app/calculator',
		image: Calculator
	},
	{
		id: 4,
		projectName: 'Portfolio',
		projectDesc: 'My personal portfolio which is you are currently viewing built with react.js',
		tags: ['React.js', 'Javascript', 'HTML', 'CSS', 'Material UI', 'Netlify'],
		code: ['https://github.com/thamizhanban666/thamizhanban-portfolio'],
		demo: 'https://thamizhanban.netlify.app/',
		image: Portfolio
	},
			
]