import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
                image="https://images.unsplash.com/photo-1537632083056-f557a4e1e01f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                title="Ben Gray"
            />
            <Story
                profileSrc="https://images.unsplash.com/photo-1503237279237-8d924aaa7183?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                image="https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                title="Luca Martinez"
            />
            <Story 
                image="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://images.unsplash.com/photo-1555617171-a072c97e09a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Jamie Anderson"
            />
             <Story 
                image="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://images.unsplash.com/photo-1509635214689-98ef31ec7e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Alex Iwobi"
            />
            <Story 
                image="https://images.unsplash.com/photo-1502519144081-acca18599776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                profileSrc="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                title="Gabriel Jr."
            />
        </div>
    )
}

export default StoryReel;
