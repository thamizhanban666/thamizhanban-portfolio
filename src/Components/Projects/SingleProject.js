import React, { useState } from 'react';
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import { styled } from '@mui/material/styles'
import placeholder from '../../Assets/Images/placeholder.png';
import './SingleProject.css';
import { Button, Divider, Icon, Popover, Typography } from '@mui/material';

function SingleProject({ id, name, desc, tags, code, demo, image }) {

  const IconBtn = styled(Button)({
    display: 'flex',
    margin: '0.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    border: `2px solid #fff`,
    color: '#fff',
    transition: 'all 0.2s',
    '&:hover': {
      // backgroundColor: '#555',
      color: '#eee',
      transform: 'scale(1.1)',
      border: `2px solid gold`,
    },
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;


	return (
		<Fade bottom>
			<div
				key={id}
				className='singleProject'
				style={{ backgroundColor: '#9b02d8' }}
			>
				<div className='projectContent'>
					<h2
						id={name.replace(' ', '-').toLowerCase()}
						style={{ color: '#fff' }}
					>
						{name}
					</h2>
					<img src={image ? image : placeholder} alt={name} />
					<div className='project--showcaseBtn'>
						<a
							href={demo}
							target='_blank'
							rel='noreferrer'
							aria-labelledby={`${name
								.replace(' ', '-')
								.toLowerCase()} ${name
									.replace(' ', '-')
									.toLowerCase()}-demo`}
            >
              <IconBtn>
                <FaPlay
                  id={`${name
                    .replace(' ', '-')
                    .toLowerCase()}-demo`}
                  aria-label='Demo'
                  style={{
                    fontSize: '1.1rem',
                    transition: 'all 0.2s',
                    '&:hover': {},
                  }}
                />
              </IconBtn>
						</a>
						{
							code.length === 1 ?					
								<a
									href={code[0]}
									target='_blank'
									rel='noreferrer'
									aria-labelledby={`${name
										.replace(' ', '-')
										.toLowerCase()} ${name
											.replace(' ', '-')
											.toLowerCase()}-code`}
								>
									<IconBtn>
										<FaCode
											id={`${name
												.replace(' ', '-')
												.toLowerCase()}-code`}
											aria-label='Code'
											style={{
												fontSize: '1.1rem',
												transition: 'all 0.2s',
												'&:hover': {},
											}}
										/>
									</IconBtn>
								</a>
								: 
								<>
									<Button
										aria-describedby={popoverId}
										onClick={handleClickPopover}
									>
										<IconBtn>
											<FaCode
												id={`${name
													.replace(' ', '-')
													.toLowerCase()}-code`}
												aria-label='Code'
												style={{
													fontSize: '1.1rem',
													transition: 'all 0.2s',
													'&:hover': {},
												}}
											/>
										</IconBtn>
									</Button>
									<Popover
							id={popoverId}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClosePopover}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
						>
							<a
								href={code[0]}
								target='_blank'
								rel='noreferrer'
								aria-labelledby={`${name
									.replace(' ', '-')
									.toLowerCase()} ${name
										.replace(' ', '-')
											.toLowerCase()}-code`}
								style={{textDecoration:'none'}}
							>
								<Typography sx={{ my:0.8,mx:1.5 }}>Frontend</Typography>			
							</a>
							<Divider />
							<a
								href={code[1]}
								target='_blank'
								rel='noreferrer'
								aria-labelledby={`${name
									.replace(' ', '-')
									.toLowerCase()} ${name
										.replace(' ', '-')
										.toLowerCase()}-code`}
								style={{textDecoration:'none'}}
							>
								<Typography sx={{ my:0.8,mx:1.5 }}>Backend</Typography>
							</a>
									</Popover>
								</>
						}
					</div>
				</div>
				<p
					className='project--desc'
					style={{
						background: 'var(--background-image)',
						color: 'var(--txt)',
					}}
				>
					{desc}
				</p>
				<div
					className='project--lang'
					style={{
						background: 'var(--background-image)',
						color: 'var(--txt)',
					}}
				>
					{tags.map((tag, id) => (
						<span key={id}>{tag}</span>
					))}
				</div>
			</div>
		</Fade>
	);
}

export default SingleProject;