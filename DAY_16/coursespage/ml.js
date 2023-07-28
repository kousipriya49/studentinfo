import React, { useState } from 'react';

const LearnMorePage = () => {
  const [sections, setSections] = useState([
    {
      title: 'Introduction to Machine Learning',
      content: 'Machine learning is a subset of artificial intelligence that focuses on enabling machines to learn from data without being explicitly programmed. It is a field of study that gives computers the ability to learn without being explicitly programmed. Instead of being programmed for specific tasks, machines can learn and improve their performance over time by analyzing data and identifying patterns.',
      expanded: false,
    },
    {
      title: 'Types of Machine Learning',
      content: 'There are several types of machine learning:',
      expanded: false,
      subSections: [
        {
          title: '1. Supervised Learning',
          content: 'Supervised learning is a type of machine learning where the algorithm is trained on a labeled dataset. The algorithm learns from the labeled examples to make predictions or decisions without human intervention. It is called "supervised" because the process of an algorithm learning from the training dataset can be compared to a teacher supervising the learning process.',
        },
        {
          title: '2. Unsupervised Learning',
          content: 'Unsupervised learning is a type of machine learning where the algorithm is trained on an unlabeled dataset. The algorithm tries to learn the patterns and relationships in the data without any guidance. In this type of learning, the algorithm is not told what to do but must figure out what is being shown.',
        },
        {
          title: '3. Reinforcement Learning',
          content: 'Reinforcement learning is a type of machine learning where the algorithm learns by interacting with an environment. The algorithm receives feedback in the form of rewards or penalties as it navigates the problem space. The goal of reinforcement learning is to maximize the cumulative reward over time.',
        },
      ],
    },
    // Add more sections as needed
  ]);

  const handleExpand = (index) => {
    setSections((prevSections) => {
      const updatedSections = [...prevSections];
      updatedSections[index].expanded = !updatedSections[index].expanded;
      return updatedSections;
    });
  };

  return (
    <div>
      <h1>Welcome to the Machine Learning Learning Page!</h1>
      {sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          {section.subSections ? (
            <ul>
              {section.subSections.map((subSection, subIndex) => (
                <li key={subIndex}>
                  <h3>{subSection.title}</h3>
                  <p>{subSection.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              {section.expanded ? section.content : `${section.content.slice(0, 200)}...`}
              {!section.expanded && (
                <button onClick={() => handleExpand(index)}>Learn More</button>
              )}
            </p>
          )}
        </section>
      ))}
    </div>
  );
};

export default LearnMorePage;
