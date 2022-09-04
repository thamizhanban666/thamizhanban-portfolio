import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './MyProjectPage.css'
import { styled } from '@mui/material/styles'
import { projectsData } from '../ProjectsData'
import { Button, Grid, Input, Typography } from '@mui/material'
import SingleProject from '../SingleProject'
import { Box } from '@mui/system'
import ArrowBack from '@mui/icons-material/ArrowBack';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { MyContext } from '../../../App'


function ProjectPage() {

	const { theme, setTheme } = useContext(MyContext);
	const switchTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}
	
	return (
		<Box>
			<div className="projectPage-header">
				<Button onClick={()=>window.history.back()}>
					<Box className={"back-box"}>
						<ArrowBack className={"back-btn"} />
					</Box>
				</Button>
				<h1>Projects</h1>
				<Box onClick={switchTheme} sx={{cursor:"pointer", ml:"auto"}} >
						{theme === 'dark' ?
								<LightModeIcon sx={{color: "gold",width:"25px" }} className="theme-btn" />
								:
								<Box className="moon-div theme-btn">
								<DarkModeIcon sx={{color: "#fff",width:"20px" }} />
								</Box>
						}
				</Box>
			</div>
			<div className="projectPage" style={{ backgroundColor: 'var(--background-image)' }}>
			<div className="projectPage-container">
				<div className="project-container">
					<Grid className="project-grid" container direction="row" alignItems="center" justifyContent="center">
						{projectsData.map(project => (
							<SingleProject
								key={project.id}
								id={project.id}
								name={project.projectName}
								desc={project.projectDesc}
								tags={project.tags}
								code={project.code}
								demo={project.demo}
								image={project.image}
							/>
						))}
					</Grid>
				</div>
			</div>
			</div>
		</Box>
	)
}

export default ProjectPage;