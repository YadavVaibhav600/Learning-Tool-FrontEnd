// generating the sidebar component
import React, { useState } from "react";
// React components start with captial letter

const Sidebar = (props) => {
  // adding some sample data to be displayed as of now

  //  adding states for managing states
  // expandedState for tracking which section is opened now
  const [expandedProjects, setExpandedProjects] = useState([1]);
  // activeTopic will track the topics which are selected as of now
  const [activeTopic, setActiveTopic] = useState("Hooks");

  // function to open or close projects
  // in react we have to set the values always using the setter methods that is important

  const projectsToggle = (projectId) => {
    if (expandedProjects.includes(projectId)) {
      // if it is already in opened state we need to close it as of now
      const new_arr = expandedProjects.filter((id) => id !== projectId);
      setExpandedProjects(new_arr);
    } else {
      const new_arr = [...expandedProjects, projectId];
      //    we have to always set using the setter methods
      setExpandedProjects(new_arr);
    }
  };

  const getProjectBadge = (status) => {
    const colors = {
              Tested: '#10B981',   // Green
              Review: '#FFB830',   // Orange
              New: '#00D9FF'       // Cyan
        };

    return (
    <span style={{
      // your styles here using colors[status]
      backgroundColor : colors[status], 
      color : 'white',
      padding : '4px 8px 4px 8px',
      borderRadius : '12px',
      fontSize : '0.8rem',
      fontWeight : 600



    }}>
      {status}
    </span>
  );

       

  }

  const projects = [
    // adding data for first
    {
      id: 1,
      name: "React Learning",
      subtopics: [
        { name: "Hooks", status: "Tested" },
        { name: "Components", status: "Review" },
        { name: "State Management", status: "New" },
      ],
    },
    {
      id: 2,
      name: "Javascript Basics",
      subtopics: [
        { name: "Arrays", status: "Tested" },
        { name: "Objects", status: "New" },
      ],
    },
  ];

  return (
    <div style={{
      width: '280px',
      background: 'rgba(30, 34, 62, 0.8)',
      backdropFilter: 'blur(20px)',
      borderRight: '1px solid rgba(148, 163, 184, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      {/* Header */}

      <div
        className="sidebar-header p-6 bg-gradient-to-r from-accent-purple to-accent-cyan"
        style={{
          padding: "0.5rem",
          background: "linear-gradient(135deg, #9333EA, #00D9FF)",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <h2
          className="text-2xl font-display font-bold text-white"
          style={{ fontweight: "700", fontSize: "1.6rem" }}
        >
          MindForge
        </h2>
      </div>

      {/* Buttons */}
      <div
        className="p-4 flex flex-col gap-3"
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <button className="btn-primary">✏️ Create Note</button>
        <button
          className="btn-upload"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 217, 255, 0.1)";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.borderStyle = "solid"; // ✅ Add this
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderStyle = "dashed"; // ✅ Add this
          }}
        >
          📤 Upload Notes
        </button>
      </div>

      {/* Projects List */}
      <div
        style={{
          flex: 1, // Takes remaining space
          overflowY: "auto", // Enables scrolling
          padding: "16px", // Space around
        }}
      >
        
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
            //   display: "flex",
            //   alignItems: "center",
              gap: "12px",
              padding: "12px 8px",
              cursor: "pointer",
              marginBottom: "8px",
              backgroundColor: "rgba(26, 29, 58, 0.6)",
              borderRadius: "8px",
            }}
            onClick={() => projectsToggle(project.id)}
          >
            <span
              style={{
                color: "#FFB830",
                fontSize: "16px",
                transition: "transform 0.3s ease",
                transform: expandedProjects.includes(project.id)
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
              }}
            >
              ▶
            </span>
            <span
              style={{
                color: "#F8FAFC",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              {project.name}
            </span>

            <div>
              {expandedProjects.includes(project.id) && (
                <div>
                  {project.subtopics.map((topic) => {
                    const isActive = activeTopic === topic.name;
                    return (
                    <div
                      className="subtopics"
                      key={topic.name}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTopic(topic.name);
                        }}
                      style={{
                        padding: "10px 16px 10px 25px",
                        fontSize: "14px",
                        marginBottom: "4px",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                          backgroundColor: isActive ? "rgba(147, 51, 234, 0.2)" : "transparent",
                          borderRadius: "6px",
                      }}
                    >
                      {/* {topic.name} - {topic.status} */}
                      <span style={{ color: "#FFFFFF" }}>{topic.name}</span>
                      <span
                        style={{
                          color: "#94A3B8", // Gray for status
                          fontSize: "12px",
                        }}
                      >
                        {getProjectBadge(topic.status)}
                      </span>
                    </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* project list div ends here */}
    </div>
  );
};

// name of a react component is in capital letters only always
export default Sidebar;