export const blogPosts = [
  {
    slug: "custom-chart-component-in-react",
    title: "Custom Chart Component in React: From Concept to Implementation",
    excerpt: "Popular libraries are feature-rich but can be overkill for simpler use cases.",
    content:  `
    <h1 class="text-3xl font-bold mb-4">Creating a Custom Chart Component in React</h1>
    
    <p class="mb-4">
      When working on a React project, the demand for creating a performant and visually appealing chart is common. 
      While many chart libraries like <strong>Chart.js</strong>, <strong>D3.js</strong>, or <strong>Recharts</strong> exist, 
      sometimes you need something lightweight and tailored for your specific use case. 
      This blog walks you through the journey of creating a Custom Chart Component in React, 
      focusing on reducing project size and ensuring high performance.
    </p>

    <h2 class="text-2xl font-semibold mt-6 mb-2">Why Build a Custom Chart?</h2>
    
    <p class="mb-4">
      Popular libraries are feature-rich but can be overkill for simpler use cases. Here’s why I opted for a custom solution:
    </p>
    
    <ul class="list-disc list-inside mb-4">
      <li><strong>Performance:</strong> By crafting only the required functionality, I eliminated unnecessary overhead.</li>
      <li><strong>Customization:</strong> Full control over the design and behavior.</li>
      <li><strong>Reduced Dependency Size:</strong> Minimizing third-party dependencies keeps the project lean.</li>
    </ul>

    <p class="mb-4">
      Below, I detail the implementation of the custom chart component and how to use it effectively.
    </p>

    <h2 class="text-2xl font-semibold mt-6 mb-2">Key Features of the Custom Chart Component</h2>
    
    <ul class="list-disc list-inside mb-4">
      <li>📏 <strong>Dynamic Responsiveness:</strong> Adjusts to container size changes.</li>
      <li>🎯 <strong>Interactive Hover Points:</strong> Displays tooltips with detailed information.</li>
      <li>🎞️ <strong>Animated Lines and Areas:</strong> Smooth transitions on load.</li>
      <li>👁️ <strong>Configurable Line Visibility:</strong> Toggle visibility for different data series.</li>
    </ul>

    <h3 class="text-xl font-semibold mt-6 mb-2">Custom Chart Component Code:</h3>

  `,
    sampleCodeOne: `
    import React, { useEffect, useRef, useState } from 'react'
    import Input_New from './Input_New'

    const CustomSalesChart = ({ data, width = 800, height = 400 }) => {
        const canvasRef = useRef(null)
        const containerRef = useRef(null)
        const [hoveredPoint, setHoveredPoint] = useState(null)
        const [animationProgress, setAnimationProgress] = useState(0)
        const [dimensions, setDimensions] = useState({ width: 800, height: 400 })
        const [visibleLines, setVisibleLines] = useState({
            totalSales: true,
            netRevenue: true,
            grossSales: true
        })
        const animationRef = useRef(null)

        // Colors exactly matching the image
        const COLORS = {
            totalSales: '#6C6CFF',
            netRevenue: '#52D47F',
            grossSales: '#FEAD01',
            grid: '#E2E4E9',
            text: '#666666',
            background: '#FFFFFF'
        }

        // Chart constants
        const PADDING = { top: 40, right: 40, bottom: 60, left: 60 }
        const POINT_RADIUS = 4
        const HOVER_POINT_RADIUS = 6

        useEffect(() => {
            const handleResize = () => {
                if (containerRef.current) {
                    const { width } = containerRef.current.getBoundingClientRect()
                    setDimensions({
                        width: width,
                        height: Math.max(400, width * 0.5)
                    })
                }
            }

            handleResize()
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }, [])

        // Animation setup
        useEffect(() => {
            const animate = (timestamp) => {
                if (!animationRef.current) {
                    animationRef.current = timestamp
                }

                const progress = Math.min((timestamp - animationRef.current) / 1000, 1)
                setAnimationProgress(progress)

                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }

            setAnimationProgress(0)
            animationRef.current = null
            requestAnimationFrame(animate)

            return () => {
                animationRef.current = null
            }
        }, [])

        const formatDate = (date) => {
            return new Date(date).toISOString().split('T')[0]
        }

        const getVisibleDates = (data, containerWidth) => {
            if (!data || data.length === 0) return []

            let maxDates
            if (containerWidth >= 1024) {
                maxDates = 7 // Desktop
            } else if (containerWidth >= 768) {
                maxDates = 6 // Tablet
            } else if (containerWidth >= 480) {
                maxDates = 3 // Mobile
            } else {
                maxDates = 2 // Small Mobile
            }

            // If data points are less than or equal to maxDates, show all dates
            if (data.length <= maxDates) {
                return data.map(d => formatDate(d.date))
            }

            // For more data points, calculate visible dates
            const step = Math.floor((data.length - 1) / (maxDates - 1))
            const visibleDates = []

            // Always show first date
            visibleDates.push(formatDate(data[0].date))

            // Add intermediate dates
            for (let i = 1; i < maxDates - 1; i++) {
                const index = i * step
                visibleDates.push(formatDate(data[index].date))
            }

            // Always show last date
            visibleDates.push(formatDate(data[data.length - 1].date))

            return visibleDates
        }


        useEffect(() => {
            const canvas = canvasRef.current
            if (!canvas || !data || data.length === 0) return

            const ctx = canvas.getContext('2d')
            if (!ctx) return

            // Setup high DPI canvas
            const dpr = window.devicePixelRatio || 1
            const { width, height } = dimensions
            canvas.width = width * dpr
            canvas.height = height * dpr
            // canvas.style.width = \`\${width}px\`
            canvas.style.width = '100%'
            // canvas.style.width = width > 576 ? '100%' : '800px'
            canvas.style.height = \`\${height}px\`
            ctx.scale(dpr, dpr)

            // Clear canvas
            ctx.fillStyle = COLORS.background
            ctx.fillRect(0, 0, width, height)

            // Calculate scales
            const xScale = (width - PADDING.left - PADDING.right) / (data.length - 1)
            const yScale = (height - PADDING.top - PADDING.bottom) / 2 // -1 to 1 range

            // Draw grid lines
            ctx.strokeStyle = COLORS.grid
            ctx.lineWidth = 1
            for (let i = -10; i <= 10; i += 2) {
                const y = PADDING.top + (height - PADDING.top - PADDING.bottom) * (1 - (i + 10) / 20)
                ctx.beginPath()
                ctx.moveTo(PADDING.left, y)
                ctx.lineTo(width - PADDING.right, y)
                ctx.stroke()

                // Draw y-axis labels
                ctx.fillStyle = COLORS.text
                ctx.font = '12px Arial'
                ctx.textAlign = 'right'
                ctx.fillText((i / 10).toFixed(1), PADDING.left - 10, y + 4)
            }

            // Draw x-axis labels
            ctx.textAlign = 'center'
            ctx.fillStyle = COLORS.text
            ctx.font = '12px Arial'
            const visibleDates = getVisibleDates(data, dimensions.width)
            const dateSpacing = (width - PADDING.left - PADDING.right) / (visibleDates.length - 1)

            visibleDates.forEach((date, i) => {
                const x = PADDING.left + (i * dateSpacing)
                // Draw date without rotation
                ctx.fillText(date, x, height - PADDING.bottom + 20)
            })

            // Function to draw a straight line series
            const drawSeries = (dataKey, color) => {
                if (!visibleLines[dataKey]) return

                const points = data.slice(0, Math.ceil(data.length * animationProgress)).map((point, i) => ({
                    x: PADDING.left + i * xScale,
                    y: PADDING.top + (height - PADDING.top - PADDING.bottom) * (1 - (point[dataKey] + 1) / 2)
                }))

                if (points.length < 2) return

                // Draw area
                ctx.beginPath()
                ctx.moveTo(points[0].x, height - PADDING.bottom)
                points.forEach(point => ctx.lineTo(point.x, point.y))
                ctx.lineTo(points[points.length - 1].x, height - PADDING.bottom)
                ctx.closePath()

                const gradient = ctx.createLinearGradient(0, PADDING.top, 0, height - PADDING.bottom)
                gradient.addColorStop(0, \`\${color}33\`)
                gradient.addColorStop(1, \`\${color}05\`)
                ctx.fillStyle = gradient
                ctx.fill()

                // Draw line
                ctx.beginPath()
                points.forEach((point, i) => {
                    if (i === 0) ctx.moveTo(point.x, point.y)
                    else ctx.lineTo(point.x, point.y)
                })
                ctx.strokeStyle = color
                ctx.lineWidth = 4 //Chart Line Stroke Width
                ctx.stroke()

                // Draw points
                points.forEach((point) => {
                    ctx.beginPath()
                    ctx.arc(point.x, point.y, POINT_RADIUS, 0, Math.PI * 2)
                    ctx.fillStyle = color
                    ctx.fill()
                })

                return points
            }

            // Draw series
            const totalSalesPoints = drawSeries('totalSales', COLORS.totalSales)
            const netRevenuePoints = drawSeries('netRevenue', COLORS.netRevenue)
            const grossSalesPoints = drawSeries('grossSales', COLORS.grossSales)

            // Draw hover line and points
            if (hoveredPoint && hoveredPoint.dataIndex >= 0 && hoveredPoint.dataIndex < data.length) {
                // Draw vertical line
                ctx.beginPath()
                ctx.strokeStyle = COLORS.grid
                ctx.lineWidth = 6
                const x = PADDING.left + hoveredPoint.dataIndex * xScale
                ctx.moveTo(x, PADDING.top)
                ctx.lineTo(x, height - PADDING.bottom)
                ctx.stroke()

                    // Draw hover points
                    ;[
                        { points: totalSalesPoints, color: COLORS.totalSales, key: 'totalSales' },
                        { points: netRevenuePoints, color: COLORS.netRevenue, key: 'netRevenue' },
                        { points: grossSalesPoints, color: COLORS.grossSales, key: 'grossSales' }
                    ].forEach(({ points, color, key }) => {
                        if (points && points[hoveredPoint.dataIndex] && visibleLines[key]) {
                            ctx.beginPath()
                            ctx.arc(points[hoveredPoint.dataIndex].x, points[hoveredPoint.dataIndex].y, HOVER_POINT_RADIUS, 0, Math.PI * 2)
                            ctx.fillStyle = color
                            ctx.fill()
                            ctx.strokeStyle = COLORS.background
                            ctx.lineWidth = 2
                            ctx.stroke()
                        }
                    })
            }

        }, [data, dimensions, hoveredPoint, animationProgress, visibleLines])

        const handleMouseMove = (e) => {
            const canvas = canvasRef.current;
            if (!canvas || !data || data.length === 0) return;

            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (
                x < PADDING.left ||
                x > dimensions.width - PADDING.right ||
                y < PADDING.top ||
                y > dimensions.height - PADDING.bottom
            ) {
                setHoveredPoint(null);
                return;
            }

            const dataIndex = Math.round((x - PADDING.left) / ((dimensions.width - PADDING.left - PADDING.right) / (data.length - 1)));
            if (dataIndex >= 0 && dataIndex < data.length) {
                setHoveredPoint({ x, y, dataIndex });
            } else {
                setHoveredPoint(null);
            }
        };

        const handleMouseLeave = () => {
            setHoveredPoint(null)
        }

        const toggleLine = (key) => {
            setVisibleLines(prev => ({ ...prev, [key]: !prev[key] }))
        }

        return (
            <div ref={containerRef} className="wsx-card wsx-mb-40">
                <div className="wsx-sales-chart-header">
                    <h2 className="wsx-title wsx-font-20">Sales Statistics</h2>
                    <div className="wsx-sales-chart-legend">
                        {Object.entries(COLORS).slice(0, 3).map(([key, color]) => (
                            <label key={key} className="wsx-sales-chart-filter-item">
                                {(() => {
                                    let label = key.charAt(0).toUpperCase() + key.slice(1);
                                    return (
                                        <div className="wsx-d-flex wsx-item-center wsx-gap-40">
                                            <Input_New
                                                type="checkbox"
                                                inputBackground={color}
                                                labelClass="wsx-color-text-light"
                                                checkState={true}
                                                onChecked={visibleLines[key]}
                                                onChange={() => toggleLine(key)}
                                                label={label + " (B2B)"}
                                            />
                                        </div>
                                    );
                                })()}
                            </label>
                        ))
                        }
                    </div>
                </div>
                <div className="wsx-sales-chart-wrapper">
                    <canvas
                        ref={canvasRef}
                        width={dimensions.width}
                        height={dimensions.height}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="wsx-sales-chart-canvas"
                    />
                    {hoveredPoint && hoveredPoint.dataIndex >= 0 && hoveredPoint.dataIndex < data.length && (
                        <div
                            className="wsx-sales-chart-tooltip wsx-text-space-nowrap"
                            style={{
                                left: \`\${hoveredPoint.x}px\`,
                                top: \`\${hoveredPoint.y}px\`,
                            }}
                        >
                            <div className="wsx-sales-chart-tooltip-date">
                                {formatDate(data[hoveredPoint.dataIndex].date)}
                            </div>
                            <div className="wsx-sales-chart-tooltip-content">
                                {Object.entries(COLORS).slice(0, 3).map(([key, color]) => (
                                    visibleLines[key] && (
                                        <div key={key} className="wsx-sales-chart-tooltip-item">
                                            <div className='wsx-d-flex wsx-item-center wsx-gap-8'>
                                                <div
                                                    className="wsx-sales-chart-tooltip-dot"
                                                    style={{ backgroundColor: color }}
                                                />
                                                <div className="wsx-sales-chart-tooltip-label">
                                                    {key.charAt(0).toUpperCase() + key.slice(1)} (B2B):
                                                </div>
                                            </div>
                                            <div className="wsx-sales-chart-tooltip-value">
                                                {(data[hoveredPoint.dataIndex][key] * 1000).toFixed(0) < 0 ? '-$'+(data[hoveredPoint.dataIndex][key] * -1000).toFixed(0) : '$'+(data[hoveredPoint.dataIndex][key] * 1000).toFixed(0)}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    export default CustomSalesChart`,
    sampleCodeTwo: `
    import React from 'react';
    import CustomSalesChart from './CustomSalesChart';
 
    const ExampleUsage = () => {
        const sampleData = [
            { date: '2024-08-25', totalSales: -1.0, netRevenue: -0.6, grossSales: -0.8 },
            { date: '2024-08-26', totalSales: 0.1, netRevenue: -0.4, grossSales: -0.6 },
            { date: '2024-08-27', totalSales: 0.3, netRevenue: 0.2, grossSales: 0.0 },
            // More data points...
        ];
        return <CustomSalesChart data={sampleData} />;
    };

    export default ExampleUsage;`,
    sampleCodeThree: `
    .wsx-sales-chart-container {
    width: 100%;
    font-family: Arial, sans-serif;
    }

    .wsx-sales-chart-header {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    }

    @media (min-width: 768px) {
    .wsx-sales-chart-header {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    }

    .wsx-sales-chart-title {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    }

    .wsx-sales-chart-legend {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
    }

    .wsx-sales-chart-legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
    }

    .wsx-sales-chart-checkbox {
    width: 16px;
    height: 16px;
    cursor: pointer;
    }

    .wsx-sales-chart-color-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    }

    .wsx-sales-chart-wrapper {
    position: relative;
    margin-bottom: 50px;
    }

    .wsx-sales-chart-
    canvas {
    cursor: pointer;
    border: 1px solid #e2e8f0;
    width: 100%;
    height: auto;
    }

    .wsx-sales-chart-tooltip {
    position: absolute;
    z-index: 10;
    background-color: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translate(-50%, -100%);
    pointer-events: none;
    }

    .wsx-sales-chart-tooltip-date {
    font-size: 14px;
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e2e8f0;
    }

    .wsx-sales-chart-tooltip-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    }

    .wsx-sales-chart-tooltip-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    }

    .wsx-sales-chart-tooltip-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    }

    .wsx-sales-chart-tooltip-label {
    color: #718096;
    }

    .wsx-sales-chart-tooltip-value {
    font-weight: 600;
    color: #2d3748;
    }
    `,
    finalThoughts: `
    <h1 class="text-2xl font-semibold mt-6 mb-2">Final Thoughts</h1>
    <p class="mb-4">Creating a custom chart component requires a deeper understanding of React and the Canvas API. However, the effort pays off with increased flexibility, performance, and reduced dependency bloat. If you’ve been relying on third-party chart libraries, I encourage you to explore creating your own — it’s a rewarding and educational experience.</p>
    <p class="mb-4"><strong>What are your thoughts on building custom components like this?</strong> Share your experience in the comments below!</p>
    `,
    date: "March 15, 2024",
    author: "hmd kamrul",
    readTime: "5 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*KfRZ3S0GjYW6WangrAAX1Q.jpeg",
    category: "Web Development",
    tags: ["Web Development", "Canvas", "React", "NPM"]
  },
  {
    slug: "react-authentication-with-jwt",
    title: "React Authentication With JWT: The Complete Guide",
    excerpt: "Learn how to implement JWT authentication in your React application",
    content: `
    <div class="prose max-w-4xl mx-auto p-6">
        <h2 class="text-2xl font-bold ">Authenticating Users</h2>
        <p class="">
        Authenticating users entails being able to identify and confirm that a user is exactly who they say they are. 
        In web apps, this is achieved by providing user credentials, such as a username and password, on the client side. 
        When a user attempts to log in, their credentials are verified on the server side. If correct, a JSON web token is generated and saved.
        </p>

        <h3 class="text-xl font-semibold  mt-6">Setting Up the Backend</h3>
        <p class="">
        You will use a custom-built Express server API to relay the JSON web token. Clone the main branch of the 
        <strong>express-auth-api</strong> GitHub repository to kick off.
        </p>

        <h3 class="text-xl font-semibold  mt-6">Developer Prerequisites</h3>
        <ul class="list-disc list-inside ">
        <li>Node.js and npm</li>
        <li>Express</li>
        <li>Bcrypt</li>
        <li>jsonwebtoken</li>
        <li>Nodemon</li>
        <li>Mongoose</li>
        </ul>
        <p class="">Run the following command to install dependencies:</p>
        <br > <pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto"><code class="whitespace-pre" >npm install</code></pre> <br>

        <h3 class="text-xl font-semibold  mt-6">Defining Routes</h3>
        <p class="">
        The Express app has two routes, 
        <code class="whitespace-pre" >/sign-up</code> and <code class="whitespace-pre" >/sign-in</code>, defined inside <code class="whitespace-pre" >userRoutes.js</code>.
        </p>

        <h4 class="text-lg font-semibold  mt-4">/sign-up</h4>
        <p class="">
        When a user makes a POST request to <code class="whitespace-pre" >/sign-up</code>, an email and password are required. The email is checked in 
        the database, and if the user doesn't exist, the password is hashed and stored.
        </p>

        <h4 class="text-lg font-semibold  mt-4">/sign-in</h4>
        <p class="">
        The <code class="whitespace-pre" >/sign-in</code> endpoint verifies the user and generates a JWT token upon successful authentication.
        </p>

        <h3 class="text-xl font-semibold  mt-6">Creating a JSON Web Token</h3>
        <p class="">
        To generate a token, use <code class="whitespace-pre" >jsonwebtoken</code>:
        </p>

        <br > <pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto"><code class="whitespace-pre" >const jwt = require("jsonwebtoken");</code></pre> <br>
        <p class="">
        Use <code class="whitespace-pre" >jwt.sign()</code> to create a token:
        </p>

        <br > <pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto"><code class="whitespace-pre" >
    const JWT_SECRET = process.env.JWT_SECRET;
    const token = jwt.sign({ email }, JWT_SECRET);
    return res.status(200).json({ message: "User Logged in Successfully", token });
        </code></pre> <br>

        <h3 class="text-xl font-semibold  mt-6">Validating a JSON Web Token</h3>
        <p class="">
        A middleware function can be used to validate tokens and protect routes.
        </p>

        <br > <pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto"><code class="whitespace-pre" >
    const jwt = require("jsonwebtoken");
    const mongoose = require("mongoose");
    const User = mongoose.model("User");
    require("dotenv").config();

    module.exports = (req, res, next) => {
        const JWT_SECRET = process.env.JWT_SECRET;
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(404).send({ error: "Must be logged in" });
        }
        const token = authorization.replace("Bearer ", "");
        jwt.verify(token, JWT_SECRET, async (err, payload) => {
            if (err) {
                return res.status(403).send("Could not verify token");
            }
            req.user = payload;
        });
        next();
    };
        </code></pre> <br>

        <h3 class="text-xl font-semibold  mt-6">Setting Up the React Frontend</h3>
        <p class="">
        Install Axios to handle API requests in your React project:
        </p>
        
        <br > <pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto"><code class="whitespace-pre" >npm install axios</code></pre> <br>


        <h3 class="text-xl font-semibold  mt-6">Making Requests to the Authentication Endpoint</h3>

        <p class="">Here’s how to make API requests in React using Axios:</p>

        <br > <pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto"><code class="whitespace-pre" >
    import React, { useEffect } from "react";
    import axios from "axios";

    const MyComponent = () => {
        useEffect(() => {
            axios.post("/sign-up", { username: "exampleuser", password: "password123" })
                .then(response => console.log("Sign up successful", response.data))
                .catch(error => console.error("Sign up error", error));

            axios.post("/sign-in", { username: "exampleuser", password: "password123" })
                .then(response => {
                    console.log("Sign in successful", response.data);
                    const token = response.data.token;
                    axios.defaults.headers.common["Authorization"] = \`Bearer \${token}\`;
                })
                .catch(error => console.error("Sign in error", error));

            axios.get("/test")
                .then(response => console.log("Test request successful", response.data))
                .catch(error => console.error("Test request error", error));
        }, []);

        return &lt;div&gt;...&lt;/div&gt;;
    };

    export default MyComponent;
        </code></pre> <br>

        <h3 class="text-xl font-semibold  mt-6">Conclusion</h3>

        <p class="">
        Integrating JWT authentication into a React app provides a secure way to authenticate users and protect data. 
        By leveraging <code class="whitespace-pre" >jsonwebtoken</code>, you can easily implement token-based authentication.
        </p>
    </div>
    `,
    date: "March 10, 2024",
    author: "hmd kamrul",
    readTime: "8 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*3AYAWNR52tprPciTgWkvYg.jpeg",
    category: "JWT Auth",
    tags: ["MERN", "React", "JWT", "Auth"]
  },
  {
    slug: "beginners-guide-to-competitive-programming",
    title: "🚀 The Ultimate Beginner's Guide to Competitive Programming: Step-by-Step Roadmap",
    excerpt: "A structured roadmap to help beginners get started with competitive programming.",
    content: `
        <div class=" dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 md:p-12">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-bold mb-6 text-center">Complete Beginner Competitive Programming Guideline</h1>
            
            <p class="mb-4">Competitive programming (CP) is a great way to improve your problem-solving skills and prepare for coding interviews. If you’re a beginner, follow this structured roadmap to get started in an organized manner.</p>

            <h2 class="text-2xl font-semibold mt-8">Step 1: Learn a Programming Language</h2>
            <p class="mb-4">Before diving into competitive programming, pick a language and master its syntax. The most commonly used languages are:</p>
            <ul class="list-disc pl-5">
            <li><strong>C++</strong> (Preferred due to its Standard Template Library - STL)</li>
            <li><strong>Python</strong> (Great for beginners but slower execution time)</li>
            <li><strong>Java</strong> (Good balance of readability and speed)</li>
            </ul>
            
            <h2 class="text-2xl font-semibold mt-8">Step 2: Learn Basic Data Structures and Algorithms (DSA)</h2>
            <p class="mb-4">Once you’re comfortable with a programming language, focus on learning essential DSA concepts:</p>
            <h3 class="text-xl font-semibold">Basic Data Structures:</h3>
            <ul class="list-disc pl-5">
            <li>Arrays and Strings</li>
            <li>Linked Lists</li>
            <li>Stacks and Queues</li>
            <li>Hash Maps and Hash Sets</li>
            </ul>

            <h3 class="text-xl font-semibold mt-4">Basic Algorithms:</h3>
            <ul class="list-disc pl-5">
            <li>Sorting (Bubble, Selection, Insertion, Merge, Quick Sort)</li>
            <li>Searching (Linear Search, Binary Search)</li>
            <li>Two-pointer Technique</li>
            <li>Recursion and Backtracking</li>
            </ul>
            
            <h2 class="text-2xl font-semibold mt-8">Step 3: Learn Mathematics for CP</h2>
            <p class="mb-4">Mathematics plays a crucial role in CP. Learn:</p>
            <ul class="list-disc pl-5">
            <li>Number Theory (GCD, LCM, Modular Arithmetic)</li>
            <li>Combinatorics (Permutations, Combinations)</li>
            <li>Probability Basics</li>
            <li>Bit Manipulation (XOR, Bitwise Operators)</li>
            <li>Modular Exponentiation and Fermat’s Theorem</li>
            </ul>
            
            <h2 class="text-2xl font-semibold mt-8">Step 4: Master Intermediate Data Structures and Algorithms</h2>
            <h3 class="text-xl font-semibold">Data Structures:</h3>
            <ul class="list-disc pl-5">
            <li>Trees (Binary Tree, BST, Segment Tree, Fenwick Tree)</li>
            <li>Graphs (BFS, DFS, Dijkstra’s Algorithm, Floyd-Warshall)</li>
            <li>Heaps and Priority Queues</li>
            <li>Disjoint Set Union (DSU)</li>
            </ul>

            <h3 class="text-xl font-semibold mt-4">Algorithms:</h3>
            <ul class="list-disc pl-5">
            <li>Dynamic Programming (Knapsack, LIS, LCS)</li>
            <li>Greedy Algorithms</li>
            <li>Sliding Window Technique</li>
            <li>Divide and Conquer (Merge Sort, Quick Sort, Fast Exponentiation)</li>
            </ul>
            
            <h2 class="text-2xl font-semibold mt-8">Step 5: Participate in Contests and Solve Problems Regularly</h2>
            <p class="mb-4">Once you have the required knowledge, practice is key!</p>
            <ul class="list-disc pl-5">
            <li>Start with <strong>Beginner contests</strong> on Codeforces, AtCoder, and CodeChef</li>
            <li>Solve at least <strong>3-5 problems daily</strong> from platforms like Codeforces, Leetcode, UVa Online Judge, and SPOJ</li>
            </ul>
            
            <h2 class="text-2xl font-semibold mt-8">Step 6: Learn Advanced Algorithms</h2>
            <p class="mb-4">Once you reach an intermediate level, focus on advanced topics like Graph Algorithms, Segment Trees, Suffix Arrays, Game Theory, and Persistent Data Structures.</p>
            
            <h2 class="text-2xl font-semibold mt-8">Step 7: Join CP Communities and Compete in Major Contests</h2>
            <p class="mb-4">Stay motivated by joining CP communities and participating in ICPC, Google Kick Start, Facebook Hacker Cup, Leetcode Weekly Contests, and more.</p>
            
            <h2 class="text-2xl font-semibold mt-8">Step 8: Learn Debugging and Optimization Techniques</h2>
            <p class="mb-4">As you progress, debugging and optimizing your code become crucial skills. Learn debugging techniques, analyze time complexity, and optimize loops to avoid TLE errors.</p>
            
            <h2 class="text-2xl font-semibold mt-8">Step 9: Develop a Strong Problem-Solving Strategy</h2>
            <ul class="list-disc pl-5">
            <li>Read problems carefully and identify constraints</li>
            <li>Think of brute force solutions first, then optimize</li>
            <li>Check for edge cases and test with small inputs</li>
            <li>Write clean and modular code to avoid logical errors</li>
            <li>Analyze time complexity before submitting</li>
            </ul>
            
            <h2 class="text-2xl font-semibold mt-8 text-center">Final Words</h2>
            <p class="text-center text-lg">Competitive programming is a journey that requires dedication and practice. Stay consistent, solve problems daily, and learn from editorial solutions.</p>
            <p class="text-center text-lg font-bold mt-6">Happy Coding! 🚀</p>
        </div>
        </div>
        `,
    date: "March 5, 2024",
    author: "hmd kamrul",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=1200&q=80",
    category: "Programming",
    tags: ["Problem Solving", "Programming", "CP Guideline"]
  }
]

export const getBlogPost = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug)
}