import React from 'react';
import { Contacts } from './Contact.Data';

const ContactLinks = () => {
    return (
       <div className=" mt-10  rounded-md font-mono text-sm">
            <div className="text-green-500">{`/**`}</div>
            {Contacts.map((contact, index) => (
              <div
                key={index}
                className="flex md:text-xl items-center space-x-2 mt-5 ml-2">
                <span className="text-green-500">{`*`}</span>
                {contact.icon}
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  text-green-400">
                  {contact.label}: {contact.value}
                </a>
              </div>
            ))}
            <div className="text-green-500">{`*/`}</div>
          </div>
    );
};

export default ContactLinks;