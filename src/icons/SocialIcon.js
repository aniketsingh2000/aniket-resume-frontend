
import React from 'react';
import { SvgIcon } from '@mui/material';


// First Function: GradientLinkedInIcon
function GradientLinkedInIcon(props) {
    return (
        <div className="icon-wrapper">
            <SvgIcon {...props} viewBox="0 0 24 24">
                <defs>
                    <linearGradient id="linkedinGradient" gradientTransform="rotate(0)">
                        <stop offset="0%" stopColor="#9063F4" />
                        <stop offset="100%" stopColor="#517DED" />
                    </linearGradient>
                    <linearGradient id="hoverGradient" gradientTransform="rotate(0)">
                        <stop offset="0%" stopColor="#994ECC" />
                        <stop offset="100%" stopColor="#3E187A" />
                    </linearGradient>
                </defs>
                <path fill="url(#linkedinGradient)" d="M22.23 0H1.77C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.27V1.73C24 .774 23.208 0 22.23 0zM7.09 20.452H3.572V9h3.518v11.452zM5.33 7.743c-1.127 0-2.04-.917-2.04-2.043 0-1.126.913-2.043 2.04-2.043s2.04.917 2.04 2.043c0 1.126-.913 2.043-2.04 2.043zM20.454 20.452h-3.518v-5.604c0-1.338-.026-3.064-1.866-3.064-1.87 0-2.156 1.462-2.156 2.97v5.698h-3.518V9h3.379v1.561h.048c.47-.888 1.618-1.825 3.331-1.825 3.561 0 4.216 2.346 4.216 5.397v6.319z" />
            </SvgIcon>
        </div>
    );
}

// Second Function: GradientGitHubIcon
function GradientGitHubIcon(props) {
    return (
        <div className="icon-wrapper">
            <SvgIcon {...props} viewBox="0 0 24 24">
                <defs>
                    <linearGradient id="githubGradient" gradientTransform="rotate(0)">
                        <stop offset="0%" stopColor="#9063F4" />
                        <stop offset="100%" stopColor="#517DED" />
                    </linearGradient>
                    <linearGradient id="hoverGradient" gradientTransform="rotate(0)">
                        <stop offset="0%" stopColor="#994ECC" />
                        <stop offset="100%" stopColor="#3E187A" />
                    </linearGradient>
                </defs>
                <path fill="url(#githubGradient)" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.727-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.302-.536-1.521.117-3.176 0 0 1.01-.322 3.3 1.23a11.46 11.46 0 0 1 3-.404c1.02.004 2.04.137 3 .403 2.28-1.553 3.285-1.23 3.285-1.23.655 1.655.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.81 1.1.81 2.22v3.293c0 .32.21.694.82.577C20.565 22.092 24 17.594 24 12.297c0-6.627-5.373-12-12-12" />
            </SvgIcon>
        </div>
    );
}



export { GradientGitHubIcon, GradientLinkedInIcon };