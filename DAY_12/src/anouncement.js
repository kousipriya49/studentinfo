








import React from 'react';
import './news.css'
const AnnouncementPage = () => {
  const announcements = [
    {
      id: 1,
      title: 'New Feature Release',
      date: 'July 10, 2023',
      content: 'We are excited to announce the release of a new feature that will enhance user experience. Check out our documentation for more details.',
    },
    {
      id: 2,
      title: 'Scheduled Maintenance',
      date: 'July 15, 2023',
      content: 'We will be performing scheduled maintenance on the system. During this time, the admin portal will be temporarily unavailable. We apologize for any inconvenience caused.',
    },
    // Add more announcements as needed
  ];

  return (
    <div>
      <h2>Recent Announcements and News</h2>
      {announcements.map((announcement) => (
        <div key={announcement.id}>
          <h3>{announcement.title}</h3>
          <p>Date: {announcement.date}</p>
          <p>{announcement.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementPage;
