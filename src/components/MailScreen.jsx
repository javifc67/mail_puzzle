import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalContext.jsx";
import LeftMenu from "./mail/LeftMenu.jsx";
import EmailList from "./mail/EmailList.jsx";
import EmailContent from "./mail/EmailContent.jsx";
import "./../assets/scss/MailScreen.scss";
import { LOGIN_SCREEN } from "../constants/constants.jsx";

export default function MailScreen({ setScreen }) {
  const { appSettings: config, I18n, Storage } = useContext(GlobalContext);

  // State
  const [emails, setEmails] = useState(config.emails);

  useEffect(() => {
    setEmails(config.emails);
  }, [config.emails]);

  const [selectedEmailId, setSelectedEmailId] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState("received");

  // Filter emails based on category
  const getEmailsFromCategory = (category) => {
    return emails.filter(email => email.categories.includes(category));
  };

  const getUnreadEmailsFromCategory = (category) => {
    return emails.filter(email => email.categories.includes(category) && email.unread);
  };

  const updateEmails = (emails) => {
    setEmails(emails);
    Storage.saveSetting("emails", emails);
  };

  // Handlers
  const handleSelectEmail = (id) => {
    const emailIndex = emails.findIndex(e => e.id === id);
    if (emailIndex !== -1) {
      const newEmails = [...emails];
      newEmails[emailIndex] = { ...newEmails[emailIndex], unread: false };
      updateEmails(newEmails);
      setSelectedEmailId(id);
    }
  };

  const handleHighlightEmail = (id) => {
    const emailIndex = emails.findIndex(e => e.id === id);
    if (emailIndex !== -1) {
      const newEmails = [...emails];
      const email = { ...newEmails[emailIndex] };
      const categories = [...email.categories];

      const hlIndex = categories.indexOf("highlighted");
      if (hlIndex === -1) {
        categories.push("highlighted");
      } else {
        categories.splice(hlIndex, 1);
      }

      email.categories = categories;
      newEmails[emailIndex] = email;
      updateEmails(newEmails);
    }
  };

  const currentEmails = getEmailsFromCategory(selectedCategory);
  const selectedEmail = emails.find(e => e.id === selectedEmailId);

  // Close handler (for the exit button in LeftMenu)
  const handleClose = () => {
    setScreen(LOGIN_SCREEN);
  };

  return (
    <div className="mailScreen wrapper">
      <LeftMenu
        config={config}
        chats={config.chats}
        selectedCategory={selectedCategory}
        getUnreadEmailsFromCategory={getUnreadEmailsFromCategory}
        selectCategory={setSelectedCategory}
        close={handleClose}
        I18n={I18n}
      />
      <EmailList
        emails={currentEmails}
        selectedEmail={selectedEmail}
        selectEmail={handleSelectEmail}
        highlightEmail={handleHighlightEmail}
        I18n={I18n}
      />
      <EmailContent
        config={config}
        email={selectedEmail}
        highlightEmail={handleHighlightEmail}
        I18n={I18n}
      />
    </div>
  );
}
