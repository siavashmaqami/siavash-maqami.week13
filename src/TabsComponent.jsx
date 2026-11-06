import { useState } from "react";
import "./TabsComponent.css"
const info = [
  {
    id: 1,
    title: "Content-1",
      
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sed. Minima laboriosam eum natus magni quas qui iste. Odit minus, nihil laboriosam dolor cumque fuga tenetur deserunt voluptates consequuntur qui?",
  },
  {
    id: 2,
    title: "Content-2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sed. Minima laboriosam eum natus magni quas qui iste. Odit minus, nihil laboriosam dolor cumque fuga tenetur deserunt voluptates consequuntur qui?",
  },
  {
    id: 3,
    title: "Content-3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sed. Minima laboriosam eum natus magni quas qui iste. Odit minus, nihil laboriosam dolor cumque fuga tenetur deserunt voluptates consequuntur qui?",
  },
  {
    id: 4,
    title: "Content-4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sed. Minima laboriosam eum natus magni quas qui iste. Odit minus, nihil laboriosam dolor cumque fuga tenetur deserunt voluptates consequuntur qui?",
  },
];


function TabsComponent() {
  const [activeId, setActiveId] = useState(1);
  const activeContent = info.find((item) => item.id === activeId);
  const tabHandler = (id) => {
    setActiveId(id)
  }
  return (
    <div className="section">
      <div className="tabs">
        {info.map((info) => (
          <button
            key={info.id}
            className={activeId === info.id ? "active" : ""}
            onClick={() => tabHandler(info.id)}
          >
            Tab-{info.id}
          </button>
        ))}
      </div>
      {activeContent && (
        <div className="content">
          <h2>{activeContent.title}</h2>
          <p>{activeContent.description}</p>
        </div>
      )}
    </div>
  );
}

export default TabsComponent;
